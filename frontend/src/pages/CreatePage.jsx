
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate} from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for form submission


  // Navigate hook to programmatically navigate
  const Navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async  (e) => {
    // Handle form submission logic here
    e.preventDefault();
  
    if(!title.trim() || !content.trim()) {
      toast.error("Title and Content are required!"); // Show error if title or content is empty
      // 
      return;
    }
    
    
    //else if(error.response.status === 429) { // This is wrong - error doesn't exist here! API call is not made yet
    //   // This validation is correct
    //   // Show rate limit error if status is 429
    //   // This block is misplaced because 'error' is not defined in this scope 

    //   toast.error("Ayooh! You're trippin! You are creating notes too quickly. Please slow down, meehn!", {
    //     duration: 4000,
    //     icon: '⚠️',

    //   });
    //   return;
    // } //why is this wrong?  


    setLoading(true); // Set loading to true when submission starts

    try {
      // Simulate an API call to create a note
      // Simulate a 2-second API call delay

      await api.post("/notes", { 
        title, 
        content 
      });

      // Simulate an API call to create a note
    setTimeout(() => {
      setLoading(false); // Set loading to false when submission ends
      toast.success("Note created successfully!"); // Show success message
      setTitle(""); // Clear title input
      setContent(""); // Clear content input
    }, 1000); // Simulate a 2-second API call delay

      Navigate("/"); // Navigate back to homepage after successful creation
      
    } catch (error) {
      console.error("Error creating note:", error);
      // toast.error("Ooops! Something went wrong."); // Show error message if API call fails

      if(error.response.status === 429) {
        toast.error("Ayooh! You're trippin! You are creating notes too quickly. Please slow down, meehn!", {
          duration: 4000,
          icon: '⚠️',

        });
      } else {
        toast.error("Ooops! Something went wrong."); // Show error message if API call fails
      }

    } finally {
      setLoading(false); // Ensure loading is set to false in case of error
    }

  

  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-2xl mx-auto">

        <Link to="/" className="btn btn-ghost mt-6">
          <ArrowLeftIcon className="size-5"/>
          Back to Home
        </Link>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Create a New Note</h2>
            <form onSubmit={handleSubmit}>  
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" 
                  placeholder="Note Title"
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}

                />
              </div>
                   <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary " disabled={loading}>
                    {loading ? "Creating..." : "Create Note"} 
                    {/* // Button text changes based on loading state  */}
                    
                  </button>
                </div>

            </form>
          </div>
          

        </div>



      </div>
    </div>
  )
}

export default CreatePage