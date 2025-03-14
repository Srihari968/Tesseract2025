import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import Team from "./Pages/Team/Team"
import Cultural from "./Pages/Cultural/Cultural"
import LoginSignupPage from "./Pages/Login/login"
import FormPage from "./Pages/Forms/Form"
import Schedule from "./Pages/Schedule/Schedule"
import AlertPage from '../src/Components/AlertPage'
import ProtectedRoute from './middleware/ProtectedRoute';
import Register from "./Pages/Register/Register"
import CircularCarousel from "./Components/Circularcarousel/CircularCarousel"
import Test from "./Pages/Events/Test"

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="team" element={<Team />} />
        <Route path="cultural" element={<Cultural />} />
        <Route path="login" element={<LoginSignupPage/>}/>
        <Route path="forms" element={<FormPage/>}/>
        <Route path="Register" element={<Register />}/>
		<Route 
		          path="alert" 
		          element={
		            <ProtectedRoute>
		              <AlertPage />
		            </ProtectedRoute>
		          } 
		        />
      </Route>
      <Route path="/carousel" element={<CircularCarousel />} />
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  )
}

export default Views
