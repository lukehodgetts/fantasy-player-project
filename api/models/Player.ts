import mongoose, { Document } from "mongoose";
import { Team } from "./Team";

interface Player extends Document {
  idRef: string;
  firstName: string;
  lastName: string;
  webName: string;
  teamID: number;
  form: string;
  totalPoints: number;
  lastMatchPoints: number;
  cost: number;
  photo: string;
}

const getCost = (cost: number) => {
  return cost / 10;
};

const PlayerSchema = new mongoose.Schema(
  {
    idRef: {
      type: String,
      required: true,
      index: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    webName: {
      type: String,
      required: true,
    },
    teamID: {
      type: Number,
      required: true,
    },
    team: {
      type: Number,
      ref: "Team",
      localField: "teamID",
      foreignField: "teamID",
    },
    form: {
      type: String,
      required: true,
    },
    totalPoints: {
      type: Number,
      required: true,
    },
    lastMatchPoints: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
      get: getCost,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

export default mongoose.model<Player>("Player", PlayerSchema);
