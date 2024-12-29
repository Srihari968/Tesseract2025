import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import Team from "./Pages/Team/Team"
import Cultural from "./Pages/Cultural/Cultural"
import LoginSignupPage from "./Pages/Login/login"
import FormPage from "./Pages/Forms/Form"

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="cultural" element={<Cultural />} />
        <Route path="login" element={<LoginSignupPage/>} />
        <Route path="forms" element={<FormPage/>} />

      </Route>
      <Route index element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default Views
