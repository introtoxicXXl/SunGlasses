import { useLoaderData } from "react-router-dom";
import Banner from "./Banner"
import ShowProducts from "../../Components/ShowProducts";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const sunglasses = useLoaderData();
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>

            <Banner />
            <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProducts name={'Best sellers'} sunglasses={sunglasses.slice(0, 5)} />
            
        </>
    );
};

export default Home;