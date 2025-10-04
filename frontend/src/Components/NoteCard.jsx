import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from "react-hot-toast";

const NoteCard = ({note, setNotes}) => {

    const handleDelete = async (e,id) => {
        e.preventDefault(); //prevent default navigation behavior
        if(!window.confirm("Are you sure you want to delete?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter((note) => note._id !==id)); //gets rid of the deleted notes and refreshes the UI upon successful note deletion showing the current notes only

            toast.success(`Successfully Deleted ${note.title} Note`);


        }catch(error){
            console.log("Error deleting the Note", error);
            toast.error(`Error deleting ${note.title}`);

        }
    };

  return (
<Link to={`/note/${note._id}`} 
    className='card bg-base-200 shadow hover:shadow-lg duration-300 transition-all border-t-8 border-solid border-primary'>
    
    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/80 line-clamp-3'>{note.content}</p>

        <div className='card-actions justify-between items-center mt-4'>
            <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}
            </span>
            <div className='flex items-center gap-2'>
                
                <PenSquareIcon className='size-4' />

                <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}>
                    <Trash2Icon className='size-4' />
  
                </button>
            </div>

        </div>

     </div>
</Link>
  )
}

export default NoteCard