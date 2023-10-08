import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
const App = () => {
  return (<>
    <Navbar />
    <div style={{ height: '300vh', width: '90vw', backgroundColor: 'white',display:'flex',margin:'0 auto' }}>
      <h1>Add some scroll effect and then remove me</h1>
    </div>
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