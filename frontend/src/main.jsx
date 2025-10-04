import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router' //importing BrowserRouter to use routing in the app
import{Toaster} from 'react-hot-toast' //importing Toaster to show toast notifications in the app

//Rendering the App component inside the root div in index.html



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* //We are wrapping the entire app in BrowserRouter so that we can use routing in the app */}
      <App />
      <Toaster/>
    </BrowserRouter>
  </StrictMode>,
)
