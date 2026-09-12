import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* Unknown paths fall back to the portfolio until more routes exist. */}
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}
