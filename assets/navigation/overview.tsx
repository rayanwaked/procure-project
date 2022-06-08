import * as React from "react";

export const OverviewIcon = ({
  height = "24px",
  width = "24px",
  color = "white",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Bulk/Chart">
      <g id="Chart">
        <path
          id="Fill 1"
          opacity="0.4"
          d="M16.6756 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0711 3.92889 22 7.33333 22H16.6756C20.08 22 22 20.0711 22 16.6667V7.33333C22 3.92889 20.08 2 16.6756 2Z"
          fill="#fff"
        />
        <path
          id="Fill 4"
          d="M7.36866 9.36898C6.91533 9.36898 6.54199 9.74231 6.54199 10.2045V17.0756C6.54199 17.529 6.91533 17.9023 7.36866 17.9023C7.83088 17.9023 8.20421 17.529 8.20421 17.0756V10.2045C8.20421 9.74231 7.83088 9.36898 7.36866 9.36898Z"
          fill="#fff"
        />
        <path
          id="Fill 6"
          d="M12.0354 6.08897C11.5821 6.08897 11.2087 6.46231 11.2087 6.92453V17.0756C11.2087 17.529 11.5821 17.9023 12.0354 17.9023C12.4976 17.9023 12.871 17.529 12.871 17.0756V6.92453C12.871 6.46231 12.4976 6.08897 12.0354 6.08897Z"
          fill="#fff"
        />
        <path
          id="Fill 8"
          d="M16.64 12.9956C16.1778 12.9956 15.8044 13.369 15.8044 13.8312V17.0756C15.8044 17.529 16.1778 17.9023 16.6311 17.9023C17.0933 17.9023 17.4667 17.529 17.4667 17.0756V13.8312C17.4667 13.369 17.0933 12.9956 16.64 12.9956Z"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);
