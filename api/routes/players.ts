import { Router } from "express";
import Player from "../models/Player";
import Team from "../models/Team";
const router = Router();

const getPlayer = async () => {
  return await Player.find();
};

//get all
router.get("/", async (req, res) => {
  const player = await getPlayer();
  res.send(player);
});

//get one
router.get("/:idRef", async (req, res) => {
  const player = await Player.findOne({ idRef: req.params.idRef });

  if (!player) return res.status(404);

  const team = await Team.findOne({ teamID: player.teamID });

  console.log(player);
  console.log(req.params.idRef);
  res.send({
    ...player.toObject(),
    team: team?.toObject(),
  });
});

export default router;
