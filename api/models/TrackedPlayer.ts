import mongoose, { Document } from "mongoose";

interface TrackedPlayer extends Document {
  idRef: String;
  firstName: String;
  lastName: String;
  webName: String;
  teamID: Number;
  form: String;
  totalPoints: Number;
  lastMatchPoints: Number;
  cost: Number;
  photo: String;
}

const TrackedPlayerSchema = new mongoose.Schema({
  idRef: {
    type: String,
    required: true,
    index: true
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
  },
  photo: {
    type: String,
    required: true,
  },
});

export default mongoose.model<TrackedPlayer>(
  "TrackedPlayer",
  TrackedPlayerSchema
);
