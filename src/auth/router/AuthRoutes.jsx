import { Routes } from "react-router-dom"
import { LoginPage, RegisterPage} from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element = { < LoginPage />} />
      <Route path="login" element = { < RegisterPage />} />

      <Route path='/*' elemet={ <Navigate to="" /> } />
    </Routes>
  )
}
