import * as React from "react";

export const MouseIcon = ({
                              height = "44px",
                              width = "44px",
                              color = "green",
                              secondaryColor,
                              ...props
                          }: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (

    <svg width="48"
         height="48"
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M24 2V19"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M9 19H39"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M24 46C20.0218 46 16.2064 44.4196 13.3934 41.6066C10.5804 38.7936 9 34.9782 9 31V17C9 13.0218 10.5804 9.20644 13.3934 6.3934C16.2064 3.58035 20.0218 2 24 2V2C27.9782 2 31.7936 3.58035 34.6066 6.3934C37.4196 9.20644 39 13.0218 39 17V31C39 34.9782 37.4196 38.7936 34.6066 41.6066C31.7936 44.4196 27.9782 46 24 46Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
    </svg>


);