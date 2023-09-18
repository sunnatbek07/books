
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import router from './Router/index.jsx';
import Layout from "./pages/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <RouterProvider router={router}>
        <Layout />
    </RouterProvider>
    // </React.StrictMode>
);
