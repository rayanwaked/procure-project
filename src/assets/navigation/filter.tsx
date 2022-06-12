import * as React from "react";

export const FilterIcon = ({
                               height = "24px",
                               width = "24px",
                               color = "white",
                               secondaryColor,
                               ...props
                           }: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14 12a2 2 0 11-4 0 2 2 0 014 0zM14 4a2 2 0 11-4 0 2 2 0 014 0zM14 20a2 2 0 11-4 0 2 2 0 014 0z"
            fill="#FAFAFA"
        />
    </svg>
);
