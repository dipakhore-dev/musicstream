import mongoose from "mongoose";

const playHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      required: true,
    },
    playedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: false }
);

// Prevent duplicate play-history records for the same user and song.
playHistorySchema.index(
  { user: 1, song: 1 },
  { unique: true }
);

// Fetch a user's most recently played songs efficiently.
playHistorySchema.index({ user: 1, playedAt: -1 });

export default mongoose.model("PlayHistory", playHistorySchema);
