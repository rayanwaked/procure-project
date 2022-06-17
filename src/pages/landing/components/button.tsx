import React from "react";

const LandingButton = () => {
    // This function will be triggered when the mouse pointer is over the button
    const buttonMouseOverHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const btn: HTMLButtonElement = event.currentTarget;
        btn.style.backgroundColor = "#5081fc";
    };

    // This function will be triggered when the mouse pointer is moving out of the button
    const buttonMouseOutHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const btn: HTMLButtonElement = event.currentTarget;
        btn.style.border = "none";
        btn.style.backgroundColor = "#2663FF";
    };

    return (
        <div>
            <button
                onMouseOver={buttonMouseOverHandler}
                onMouseOut={buttonMouseOutHandler}
                className="LandingPrimaryButton">
                <p className="LandingPrimaryButtonText">Join wait list</p>
            </button>
        </div>
    );
};

export default LandingButton;