import React, { useState } from 'react';
import "/workspaces/MiguelGonzalez_TrafficLight/src/styles/index.css";

function TrafficLight() {
    const [color, setColor] = useState("red");

    const handleSetColor = (newColor) => {
        setColor(newColor);
    };

    return (
        <div className="traffic-light-container">
            {color === "red" ? (
                <div className={"light red" + (color === "red" ? " glow-red" : "")} onClick={() => handleSetColor("red")}></div>
            ) : (
                <div className={"light red"} onClick={() => handleSetColor("red")}></div>
            )}
            {color === "yellow" ? (
                <div className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")} onClick={() => handleSetColor("yellow")}></div>
            ) : (
                <div className={"light yellow"} onClick={() => handleSetColor("yellow")}></div>
            )}
            {color === "green" ? (
                <div className={"light green" + (color === "green" ? " glow-green" : "")} onClick={() => handleSetColor("green")}></div>
            ) : (
                <div className={"light green"} onClick={() => handleSetColor("green")}></div>
            )}
        </div>
    );
}

export default TrafficLight;


