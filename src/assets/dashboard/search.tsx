import * as React from "react";

export const SearchIcon = ({
                               height = "24px",
                               width = "24px",
                               color = "white",
                               secondaryColor,
                               ...props
                           }: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
    <svg width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Light/Search">
            <g id="Search">
                <circle id="Ellipse_739"
                        cx="11.7666"
                        cy="11.7666"
                        r="8.98856"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                <path id="Line_181"
                      d="M18.0183 18.4851L21.5423 22"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
            </g>
        </g>
    </svg>

);
