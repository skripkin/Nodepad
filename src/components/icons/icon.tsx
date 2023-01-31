import React from "react";

interface IIconProps {
  color?: string;
  className?: string;
}

export const DownArrow = ({ color = "#AAB2BB", className }: IIconProps) => {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1L4.5 4L8 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FontSizeIcon = ({ color = "#AAB2BB", className }: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4H4V14H6V4H10V3V2H0V4Z"
        fill={color}
      />
      <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill={color} />
    </svg>
  );
};

export const LineHeightIcon = ({
  color = "#AAB2BB",
  className,
}: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_1573)">
        <path d="M8 13H16V15H6L8 13Z" fill={color} />
        <rect x="6" y="5" width="10" height="2" fill={color} />
        <rect x="6" y="9" width="10" height="2" fill={color} />
        <path d="M6 1H16V3H8L6 1Z" fill={color} />
        <path
          d="M3 1.5L2.5 2L3.5 2L3 1.5ZM3 1.5L3.00001 14.5M3.00001 14.5L3.50001 14H2.5L3.00001 14.5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1573">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LetterSpacingIcon = ({
  color = "#AAB2BB",
  className,
}: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_1572)">
        <path
          d="M8 0L8.92164 -0.388057C8.7655 -0.758871 8.40234 -1 8 -1C7.59766 -1 7.2345 -0.758871 7.07836 -0.388057L8 0ZM10.8 8C11.3523 8 11.8 7.55228 11.8 7C11.8 6.44772 11.3523 6 10.8 6V8ZM4.92164 9.88806L8.92164 0.388057L7.07836 -0.388057L3.07836 9.11194L4.92164 9.88806ZM7.07836 0.388057L11.0784 9.88806L12.9216 9.11194L8.92164 -0.388057L7.07836 0.388057ZM5.2 8H10.8V6H5.2V8Z"
          fill={color}
        />
        <path
          d="M1.5 13L2 13.5L2 12.5L1.5 13ZM1.5 13L14.5 13M14.5 13L14 12.5L14 13.5L14.5 13Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1572">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 16) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const AlignLeftIcon = ({ color = "#AAB2BB", className }: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.5">
        <rect y="13.0001" width="10" height="2" fill={color} />
        <rect y="1.00012" width="16" height="2" fill={color} />
        <rect y="9.00012" width="16" height="2" fill={color} />
        <rect y="5.00012" width="16" height="2" fill={color} />
      </g>
    </svg>
  );
};

export const AlignCenterIcon = ({
  color = "#AAB2BB",
  className,
}: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.5">
        <rect x="4" y="13.0001" width="8" height="2" fill={color} />
        <rect y="1.00012" width="16" height="2" fill={color} />
        <rect y="9.00012" width="16" height="2" fill={color} />
        <rect y="5.00012" width="16" height="2" fill={color} />
      </g>
    </svg>
  );
};

export const AlignRightIcon = ({
  color = "#AAB2BB",
  className,
}: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.5">
        <rect x="6" y="13.0001" width="10" height="2" fill={color} />
        <rect y="1.00012" width="16" height="2" fill={color} />
        <rect y="9.00012" width="16" height="2" fill={color} />
        <rect y="5.00012" width="16" height="2" fill={color} />
      </g>
    </svg>
  );
};

export const AlignJustifyIcon = ({
  color = "#AAB2BB",
  className,
}: IIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.5">
        <rect y="13.0001" width="16" height="2" fill={color} />
        <rect y="1.00012" width="16" height="2" fill={color} />
        <rect y="9.00012" width="16" height="2" fill={color} />
        <rect y="5.00012" width="16" height="2" fill={color} />
      </g>
    </svg>
  );
};
