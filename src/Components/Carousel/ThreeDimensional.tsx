import React from "react";
import { Carousel } from "react-circular-carousel-ts";
import { CarouselTypes } from "react-circular-carousel-ts/types";
import customData from "./customData";
import CustomSlideComponent from "./CustomSlideComponent";

const ThreeDimensional = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#111" }}>
        <Carousel
            mediaPool={customData}
            type={CarouselTypes.STANDARD_3D}  // Ensures a 3D effect
            slideComponent={CustomSlideComponent}
            aspectRatio={"1/1"}
        />
    </div>
);

export default ThreeDimensional;