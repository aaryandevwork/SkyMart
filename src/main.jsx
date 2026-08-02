import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import "@fontsource/syne";
import { Provider } from 'react-redux'
import { store } from './app/store.js';
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppRoutes />
        <ToastContainer />
    </Provider>    
)
