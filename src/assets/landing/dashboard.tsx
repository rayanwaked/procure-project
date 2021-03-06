import * as React from "react";

export const DashboardIcon = ({
                                  height = "44px",
                                  width = "44px",
                                  color = "green",
                                  secondaryColor,
                                  ...props
                              }: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (


    <svg width="42"
         height="42"
         viewBox="0 0 42 42"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1H1V41H11V1Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M41 16H31V41H41V16Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M41 1H16V11H41V1Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M26 31H16V41H26V31Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M26 16H16V26H26V16Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
    </svg>


);