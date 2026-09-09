import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

function App() {
   return (
   <div className="min-h-screen bg-slate-50">
     <Navbar/>
     <div className="flex">
      <Sidebar/>
      <Dashboard/>
     </div>
   </div>
  )
}

export default App
