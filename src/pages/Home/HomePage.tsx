import * as React from 'react';
import HomeSlideshow from "./HomeSlideshow";
import Carousel from "../../components/Carousel";

function HomePage() {

    return (
        <React.Fragment>
            <HomeSlideshow/>
            <Carousel/>
        </React.Fragment>
    );
}

export default HomePage;