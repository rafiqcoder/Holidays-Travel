import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Destination from "../Pages/Destination/Destination";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";


const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/', element: <Main></Main>,
            children: [
                {
                    path: '/', element: <Home></Home>
                },
                {
                    path: '/news', element: <News></News>
                },
                {
                    path: '/blog', element: <Blog></Blog>
                },
                {
                    path: '/destination', element: <Destination />
                },
                {
                    path: '/contact', element: <Contact />
                },
            ]
        }
    ])

    return (
        router
    );
};

export default Route;