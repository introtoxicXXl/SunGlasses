import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import ProductDetail from '../../Pages/ProductDetail/ProductDetail';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Login/Register';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Root from '../../Root';
import NotFound from '../NotFound';
import PrivetRoute from "../../PrivetRoute/PrivetRoute";

const url = 'https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses';
const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/home',
                element: <Home />,
                loader: async () => (fetch(url))
            },
            {
                path: '/products',
                element: <Products />,
                loader: async () => (fetch(url))
            },
            {
                path: '/product/:id',
                element: <PrivetRoute><ProductDetail /></PrivetRoute>,
                loader: async ({ params }) => (fetch(`${url}/${params.id}`))
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
]);

export default Route;
