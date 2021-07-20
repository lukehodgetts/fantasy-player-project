import mongoose, { Document } from "mongoose";

export interface Team extends Document {
  teamID: number;
  name: string;
}

const TeamSchema = new mongoose.Schema({
  teamID: {
    type: Number,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model<Team>(
  "Team",
  TeamSchema
);
