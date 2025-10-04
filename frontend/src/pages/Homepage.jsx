import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import RateLImitedUI from '../Components/RateLImitedUI';
import { data } from 'react-router';
import { toast } from 'react-hot-toast';
import NoteCard from '../Components/NoteCard';
import api from '../lib/axios';
import NotesNotFound from '../Components/NotesNotFound';

const Homepage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false); // State to track if user is rate limited

  const  [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Simulate an API call to check rate limit status
    const fetchNotes = async () =>{
      try {
        const res = await api.get("/notes");
        // const data = await res.json(); we would use this in fetch api
        console.log(res.data);  //

        setNotes(res.data); // Set the fetched notes to state

        setIsRateLimited(false); // Assuming the user is not rate limited if the fetch is successful

      }catch (error) {
        console.error("Error fetching notes:", error);
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true) // Set rate limited state to true if 429 error
        }else {
          toast.error("Ooops! Notes could not be loaded!")
        }
         

      } finally {
        setLoading(false); // Set loading to false after fetch attempt failed or succeeded
      }
    };

    fetchNotes();

 }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLImitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {/* Primary conditional: Check loading state first */}
        {loading ? (
          // Show loading spinner while data is being fetched
          <div className='text-center text-primary py-10'>Loading notes...</div>
        ) : (
          // Only render content after loading is complete
          <>
            {/* Check if user is not rate limited before showing content */}
            {!isRateLimited && (
              // If we have notes, show the grid, otherwise show NotFound
              notes.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {notes.map((note) => (
                    <NoteCard key={note._id} note={note} setNotes={setNotes} />
                  ))}
                </div>
              ) : (
                // Show this only when loading is complete AND no notes exist
                <NotesNotFound />
              )
            )}
          </>
        )}
      </div>

    </div>
  );
};

export default Homepage