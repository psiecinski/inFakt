import { Route, Routes } from "react-router-dom"
import { HomePage, AccountantsPage } from "../pages"
import { Header } from "../features/Shared"

export const AppRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ksiegowi" element={<AccountantsPage />} />
    </Routes>
    </>
  )
}
