import PlayHistory from "../models/PlayHistory.js";
import Song from "../models/Song.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { SONG_POPULATE } from "../utils/populate.js";

// Return the 20 most recently played songs for the logged-in user.
export const listHistory = asyncHandler(async (req, res) => {
  const history = await PlayHistory.find({ user: req.user._id })
    .sort({ playedAt: -1, _id: -1 })
    .limit(20)
    .select("song playedAt")
    .lean();

  const songs = await Song.find({
    _id: { $in: history.map((item) => item.song) },
  }).populate(SONG_POPULATE);

  const songsById = new Map(
    songs.map((song) => [String(song._id), song])
  );

  const ordered = history
    .map((item) => songsById.get(String(item.song)))
    .filter(Boolean);

  sendSuccess(res, { data: ordered });
});

// Clear all play history for the logged-in user.
export const clearHistory = asyncHandler(async (req, res) => {
  await PlayHistory.deleteMany({ user: req.user._id });

  sendSuccess(res, { message: "Play history cleared" });
});
