import { Router } from "express";
import TrackedPlayer from "../models/TrackedPlayer";
const router = Router();

const getTrackedPlayer = async () => {
  return await TrackedPlayer.find();
};

const findPlayer = async (idRef: String) => {
  const player = await TrackedPlayer.findOne({ idRef });
  return player;
};

//get all
router.get("/", async (req, res) => {
  const trackedPlayer = await getTrackedPlayer();
  res.send(trackedPlayer);
});

//create one
router.post("/", async (req, res) => {
  const {
    idRef,
    firstName,
    lastName,
    webName,
    teamID,
    form,
    totalPoints,
    lastMatchPoints,
    cost,
  } = req.body;

  const player = await findPlayer(req.body.idRef);
  if (player) {
    res.send({ data: player.idRef, message: "player already tracked" });
    return;
  }

  const trackedPlayer = new TrackedPlayer({
    idRef,
    firstName,
    lastName,
    webName,
    teamID,
    form,
    totalPoints,
    lastMatchPoints,
    cost,
  });
  await trackedPlayer.save();
  res.send({data: trackedPlayer, message: "player tracked"})
});

//delete one
router.delete("/:idRef", async (req, res) => {
  const player = await findPlayer(req.params.idRef);

  if (player) {
    await player.delete();
    res.send({ data: player.idRef, message: "player untracked" });
  } else {
    res.status(404).send({ message: "player not found" });
  }
});

export default router;
