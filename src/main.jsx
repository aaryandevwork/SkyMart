import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import "@fontsource/syne";

createRoot(document.getElementById('root')).render(
    <AppRoutes />
)
