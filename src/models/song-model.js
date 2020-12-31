const mongoose = require("mongoose");

/**
 * 1. create the 'Song' model following the schema requirements
 *
 * The schema should have the following properties:
 *
 * 1.1 name:
 *    1.1.1 required
 *    1.1.2 string
 *    1.1.3 trim
 *
 * 1.2 genre
 *    1.2.1 required
 *    1.2.2 string
 *    1.2.3 trim
 *
 * 1.3 duration
 *    1.3.1 required
 *    1.3.2 number
 *
 * 1.4 stats
 *    1.4.1 object
 *
 *    1.4.2 stats.timesPlayed
 *       1.4.2.1 number
 *
 *    1.4.3 stats.upVotes
 *       1.4.3.1 number
 *
 *    1.4.4 stats.downVotes
 *       1.4.4.1 number
 *
 *    1.4.5 default values: timesPlayed: 0, upVotes: 0, downVotes: 0,
 *
 * 1.5 author
 *    1.5.1 required
 *    1.5.2 mongoose.SchemaTypes.ObjectId
 *    1.5.3 ref to 'user' collection
 *
 * 1.6 set the "createdAt" and "updatedAt" properties that are created automatically
 */

const SongSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    stats: {
      type: Object,
      default: {
        timesPlayed: 0,
        upVotes: 0,
        downVotes: 0,
      },
      timesPlayed: Number,
      upVotes: Number,
      downVotes: Number,
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true },
);

const SongModel = new mongoose.model("song", SongSchema);

module.exports = SongModel;
