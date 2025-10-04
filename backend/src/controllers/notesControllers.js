import Note from "../model/Note.js";

export async function getAllNotes (req, res) {
    try{
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);

    }catch(error) {
        console.error('Error on the getAll function', error);
        res.status(500).json({message: 'Internal-Server Error!'})
        

    }  
} 


export async function createNote  (req, res) {
    try {
    const {title,content} = req.body
    const note = new Note({title, content})

    const savedNote = await note.save();
    res.status(201).json(savedNote);
    } 
    
    catch(error) {
        
    console.error('Error on the createNote function', error);
    res.status(500).json({message: 'Internal-Server Error!'})

    }
}



export async function updateNote (req, res) {
    try{
        const {title,content} =req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {
            new: true ,
        });
        if(!updatedNote) return res.status(404).json({message: "Oops! We couldn't find that note"})
        res.status(200).json({message: "Note updated successully"})


    }catch(error) {

    console.error('Error on the updateNote function', error);
    res.status(500).json({message: 'Internal-Server Error!'})
    }
}


export async function deleteNote (req, res) {
    try {
        const {title,content} =req.body
        const deletedNote = await Note.findByIdAndDelete(req.params.id, {title,content},{
            new: true,
        });

        if(!deletedNote) return res.status(404).json({message: "Oops! We couldn't find that note, delete unsuccessful"});
        res.status(200).json({message: "Note was deleted succesfully"})


    }catch(error) {


    console.error('Error on the deleteNote function', error);
    res.status(500).json({message: 'Internal-Server Error!'})
    }
}


export async function getNoteById (req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({message: "Ooops! We could not find that note"})
        res.json(note);

    }catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error!"})

    }
}