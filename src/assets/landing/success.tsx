import * as React from "react";

export const SuccessIcon = ({
                                height = "44px",
                                width = "44px",
                                color = "green",
                                secondaryColor,
                                ...props
                            }: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
    <div style={{
        height: "44px",
        width: "44px",
        background: "#49D078",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center"
    }}>

        <div style={{display: "flex", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24px"
                 height="24px"
                 fill="#141A25"
                 viewBox="0 0 1792 1792">
                <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
        </div>

    </div>

);
