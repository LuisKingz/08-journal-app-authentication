import { Routes, Route } from "react-router-dom"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { AuthRoutes } from "../auth/router/AuthRoutes" 

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="/*" element={ <JournalRoutes /> } />
    </Routes>
  )
}
