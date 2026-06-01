import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Notes from "./pages/Notes"
import History from "./pages/History"
import Pricing from "./pages/Pricing"
import { useEffect } from "react"
import { getCurrentUser } from "./services/api"
import { useDispatch,useSelector } from "react-redux"

export const serverUrl = "http://localhost:8000"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getCurrentUser(dispatch)
  },[dispatch])
 
  const {userData}=useSelector(state=>state.user)
  console.log(userData);

  return (
  <>
    <Routes>
      <Route path="/" element={userData ? <Home /> : <Navigate to="/auth" replace />} />
      <Route path="/auth" element={userData ? <Navigate to="/" replace />: <Auth />} />
      <Route path="/notes" element={userData ? <Notes/>: <Navigate to="/notes"  replace/> }/>
      <Route path="/History" element={userData ? <History/>:<Navigate to="/history"  replace/>} />
      <Route path="/pricing" element={userData ?  <Pricing/>: <Navigate to="/pricing"  replace/>} />
    </Routes>
  </>
  )
}

export default App
