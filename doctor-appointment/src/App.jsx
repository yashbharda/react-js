import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Appointment from "./pages/Appointment";
import Appointments from "./pages/Appointments";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
}

export default App;
