import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Calculator from "../components/Calculator";
import Result from "../pages/Result";
import style from './RoutesApp.module.css'



const Layout = () => {
    return (
        <div className={style.container}>
            <Outlet /> {/* Aquí se renderizarán las páginas según la ruta */}
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Contenedor principal
        children: [
            { path: "/", element: <Calculator /> },
            { path: "/resultado", element: <Result /> }
        ]
    }
]);

const RoutesApp = () => {
    return <RouterProvider router={router} />;
};

export default RoutesApp;
