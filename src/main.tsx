import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/* The build prerenders the page into #root, so hydrate it rather than
   discarding and re-rendering the server markup. Falls back to a fresh render
   if the prerender is ever absent (e.g. `vite dev`). */
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
