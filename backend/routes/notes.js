const express = require("express");
// Models and middleware
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");

// Router

const router = express.Router();

// I wont comment these imports
const { body, validationResult } = require("express-validator");

// Route to get all the notes

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Route to Add a new note using POST "api/notes/addnote" Login Required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({
      min: 3,
    }),

    body("description", "Description is too small(5 characters)").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //* If there are errors return err(400)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: `${errors.array()} err 400 Bad request`,
        });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error ");
    }
    // res.json(notes);
  }
);
router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // //Todo  Create a newNote object

      // const newNote = note;

      // if (title) {
      //   newNote.title = title;
      // }
      // if (description) {
      //   newNote.description = description;
      // }
      // if (tag) {
      //   newNote.tag = tag;
      // }

      // // todo   Find the note that is to be updated and update the note

      // let note = await Note.findById(req.params.id);

      // if (!note) {
      //   res.status(404).send(`error 404 not found`);
      // }

      // if (note.user.toString() !== req.user.id) {
      //   return res.status(401).send("not Allowed");
      // }

      // note = await Note.findByIdAndUpdate(
      //   req.params.id,
      //   { $set: newNote },
      //   { new: true }
      // );
      // res.json({ note });
      // Create a newNote object
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      // Find the note to be updated and update it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error ");
    }
  }
);

// Route  #4 to Delete an  existing note using DELETE "api/notes/updatenote" LoginRequired

router.delete(
  "/deletenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      // todo   Find the note that is to be updated and update the note

      let note = await Note.findById(req.params.id);

      if (!note) {
        res.status(404).send(`error 404 not found`);
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not Allowed");
      }

      note = await Note.findByIdAndDelete(req.params.id);
      res.json({
        Success: `the note with the id of ${note} has been deleted successfully `,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error ");
    }
  }
);
module.exports = router;
