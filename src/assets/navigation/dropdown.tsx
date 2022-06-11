import * as React from "react";

export const DropdownIcon = ({
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
        <path d="M19 8.5L12 15.5L5 8.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
    </svg>


);
