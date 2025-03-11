import React from "react";

const CustomSlideComponent = ({ id, title, imageUrl }) => {
    return (
        <div style={{
            textAlign: "center",
            transformStyle: "preserve-3d",
        }}>
            <img 
                src={imageUrl} 
                alt={title} 
                style={{
                    width: "250px", 
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                }} 
            />
            <h3 style={{ marginTop: "10px", color: "#fff" }}>{title}</h3>
        </div>
    );
};

export default CustomSlideComponent;