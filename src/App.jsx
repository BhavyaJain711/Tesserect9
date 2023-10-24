import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
const App = () => {
  return (<>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<EventPage />} /> */}
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App