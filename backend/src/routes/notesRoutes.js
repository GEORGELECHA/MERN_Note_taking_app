import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesControllers.js";

 const router = express.Router();



//routes (the api)
//endpoint: combination of a URL plus HTTPS method that lets the clients unteract with with a specific resource 


//we use the "/" because it has already been prefixed in the server.js file

router.get('/', getAllNotes);

 // app.get('/api/notes', (req, res) => {
//     res.send("You have got five Notes!!");
// } );

//get note by id

router.get('/:id', getNoteById);


//CREATE

router.post('/', createNote);

// app.post('/api/notes', (req, res) =>{
//     res.status(201).json({message: "Note has been created successfully"});

// });



// //UPDATE

router.put('/:id', updateNote);

// app.put('/api/notes/:id', (req, res) =>{
//     res.status(200).json({message: "Note has been updated successfully"});

// })


// //DELETE

router.delete('/:id', deleteNote);

// app.delete('/api/notes/:id', (req, res) =>{
//     res.status(200).json({message: "Note has been deleted successfully"});

// })


 export default router;
