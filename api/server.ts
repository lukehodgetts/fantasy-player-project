import express, { request } from "express";
import mongoose from "mongoose";
import trackedPlayers from "./routes/trackedPlayers";
import players from "./routes/players";
import { config } from "dotenv";
import axios from "axios";
import TrackedPlayer from "./models/TrackedPlayer";
import Player from "./models/Player";
import Team from "./models/Team";
import cors from "cors";
config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => {
  console.log("connected");
});

axios
  .get("https://fantasy.premierleague.com/api/bootstrap-static/", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    },
  })
  .then((response) => {
    const playerData = response.data.elements;
    const teamData = response.data.teams;
    // console.log({
    //   elements: response.data.elements,
    //   status: response.status,
    // });
    console.log(teamData);

    const mappedPlayers = playerData.map((player: any) => {
      return {
        updateOne: {
          filter: { idRef: player.id },
          update: {
            firstName: player.first_name,
            lastName: player.second_name,
            webName: player.web_name,
            teamID: player.team,
            form: player.form,
            totalPoints: player.total_points,
            lastMatchPoints: player.event_points,
            cost: player.now_cost,
            photo: `https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.photo.replace(
              ".jpg",
              ".png"
            )}`,
          },
          upsert: true,
        },
      };
    });
    const mappedTeams = teamData.map((team: any) => {
      return {
        updateOne: {
          filter: { teamID: team.id },
          update: {
            teamID: team.id,
            name: team.name,
          },
          upsert: true,
        },
      };
    });
    const res = Player.bulkWrite(mappedPlayers);

    const res2 = Team.bulkWrite(mappedTeams);
  });

app.use(express.json());
app.use("/players", players);
app.use("/trackedPlayers", trackedPlayers);

app.listen(3002, () => console.log("server started"));
