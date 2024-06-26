const CursorIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 512"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H144l-22.8 26z"
      ></path>
      <path
        fill="currentColor"
        d="M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1H144L38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z"
      ></path>
    </svg>
  );
};
const BoardLayerIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19.3697 4.89012L13.5097 2.28012C12.6497 1.90012 11.3497 1.90012 10.4897 2.28012L4.62969 4.89012C3.14969 5.55012 2.92969 6.45012 2.92969 6.93012C2.92969 7.41012 3.14969 8.31012 4.62969 8.97012L10.4897 11.5801C10.9197 11.7701 11.4597 11.8701 11.9997 11.8701C12.5397 11.8701 13.0797 11.7701 13.5097 11.5801L19.3697 8.97012C20.8497 8.31012 21.0697 7.41012 21.0697 6.93012C21.0697 6.45012 20.8597 5.55012 19.3697 4.89012Z"
        fill={"currentcolor"}
      />
      <path
        opacity="0.4"
        d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
        fill={"currentcolor"}
      />
      <path
        opacity="0.4"
        d="M12.0003 22C11.6203 22 11.2403 21.92 10.8903 21.77L4.15031 18.77C3.04031 18.28 2.32031 17.17 2.32031 15.95C2.32031 15.54 2.65031 15.21 3.06031 15.21C3.47031 15.21 3.80031 15.54 3.80031 15.95C3.80031 16.58 4.17031 17.15 4.75031 17.41L11.4903 20.41C11.8103 20.55 12.1803 20.55 12.5003 20.41L19.2403 17.41C19.8103 17.16 20.1903 16.58 20.1903 15.95C20.1903 15.54 20.5203 15.21 20.9303 15.21C21.3403 15.21 21.6703 15.54 21.6703 15.95C21.6703 17.17 20.9503 18.27 19.8403 18.77L13.1003 21.77C12.7603 21.92 12.3803 22 12.0003 22Z"
        fill={"currentcolor"}
      />
    </svg>
  );
};
const FirstBoardIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.4"
        d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z"
        fill="currentcolor"
      />
      <path
        d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const LastBoardIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.4"
        d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z"
        fill="currentcolor"
      />
      <path
        d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const PrevBoardIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.9783 5.31877L10.7683 8.52877L8.79828 10.4888C7.96828 11.3188 7.96828 12.6688 8.79828 13.4988L13.9783 18.6788C14.6583 19.3588 15.8183 18.8688 15.8183 17.9188V12.3088V6.07877C15.8183 5.11877 14.6583 4.63877 13.9783 5.31877Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const NextBoardIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const ColorSelectIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.6"
        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
        fill={"currentcolor"}
      />
      <path
        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
        fill={"currentcolor"}
      />
      <path
        opacity="0.4"
        d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
        fill={"currentcolor"}
      />
    </svg>
  );
};
const BoardColorSelectIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z"
        fill={"currentcolor"}
      />
      <path
        opacity="0.4"
        d="M4 8.31982V11.8798C4 12.9598 4.58003 13.9598 5.53003 14.4898L8.48999 16.1598C9.11999 16.5098 9.51001 17.1798 9.51001 17.8998V19.9998C9.51001 21.0998 10.41 21.9998 11.51 21.9998H12.51C13.61 21.9998 14.51 21.0998 14.51 19.9998V17.8998C14.51 17.1798 14.9 16.5098 15.53 16.1598L18.49 14.4898C19.43 13.9598 20.02 12.9598 20.02 11.8798V8.31982H4Z"
        fill={"currentcolor"}
      />
    </svg>
  );
};
const RubberIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21.0303 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0303C21.4503 20.5 21.7803 20.84 21.7803 21.25C21.7803 21.66 21.4503 22 21.0303 22Z"
        fill="currentcolor"
      />
      <path
        opacity="0.4"
        d="M15.41 16.3401L10.66 21.0901C9.54997 22.2001 7.77002 22.2601 6.59002 21.2701C6.52002 21.2101 6.46002 21.1501 6.40002 21.0901L5.53003 20.2201L3.73999 18.4301L2.88 17.5701C2.81 17.5001 2.75 17.4301 2.69 17.3601C1.71 16.1801 1.78 14.4201 2.88 13.3201L6.57 9.64008L7.63 8.58008L15.41 16.3401Z"
        fill="currentcolor"
      />
      <path
        d="M21.1208 10.6399L15.4108 16.3399L7.63086 8.57994L13.3409 2.87994C14.5109 1.70994 16.4308 1.70994 17.6008 2.87994L21.1208 6.38994C22.2908 7.55994 22.2908 9.46994 21.1208 10.6399Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const ShapesIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994L6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15Z"
        fill="currentcolor"
      />
      <path
        opacity="0.4"
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const TextIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM18.75 8.9C18.75 9.31 18.41 9.65 18 9.65C17.59 9.65 17.25 9.31 17.25 8.9V7.72C17.25 7.4 16.99 7.14 16.67 7.14H12.75V16.86H14.53C14.94 16.86 15.28 17.2 15.28 17.61C15.28 18.02 14.94 18.36 14.53 18.36H9.47C9.06 18.36 8.72 18.02 8.72 17.61C8.72 17.2 9.06 16.86 9.47 16.86H11.25V7.14H7.33C7.01 7.14 6.75 7.4 6.75 7.72V8.9C6.75 9.31 6.41 9.65 6 9.65C5.59 9.65 5.25 9.31 5.25 8.9V7.72C5.25 6.57 6.18 5.64 7.33 5.64H16.66C17.81 5.64 18.74 6.57 18.74 7.72V8.9H18.75Z"
        fill="currentcolor"
      />
    </svg>
  );
};

const ImageIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.4"
        d="M22 7.81V13.9L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L2.67 18.95L2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentcolor"
      />
      <path
        d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z"
        fill="currentcolor"
      />
      <path
        d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const TrashIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
        fill={"currentcolor"}
      />
      <path
        opacity="0.3991"
        d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z"
        fill={"currentcolor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z"
        fill={"currentcolor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z"
        fill={"currentcolor"}
      />
    </svg>
  );
};
const UndoIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.4"
        d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"
        fill="currentcolor"
      />
      <path
        d="M12 18.5799C8.83 18.5799 6.25 15.9999 6.25 12.8299C6.25 11.6899 6.58 10.5799 7.22 9.6399C7.45 9.2999 7.92 9.1999 8.26 9.4299C8.6 9.6599 8.7 10.1299 8.47 10.4699C8 11.1699 7.76 11.9899 7.76 12.8299C7.76 15.1699 9.67 17.0799 12.01 17.0799C14.35 17.0799 16.26 15.1699 16.26 12.8299C16.26 10.5899 14.52 8.7499 12.32 8.5899L12.73 8.8899C13.06 9.1299 13.14 9.5999 12.89 9.9399C12.65 10.2699 12.18 10.3499 11.84 10.0999L9.9 8.6899C9.83 8.6399 9.77 8.5799 9.72 8.5099C9.71 8.4999 9.7 8.4899 9.69 8.4699C9.65 8.3999 9.62 8.3199 9.6 8.2399C9.58 8.1399 9.58 8.0499 9.59 7.9499C9.6 7.9099 9.61 7.8699 9.62 7.8299C9.64 7.7599 9.68 7.6999 9.72 7.6299C9.74 7.6199 9.76 7.5999 9.78 7.5799L11.44 5.6799C11.71 5.3699 12.19 5.3399 12.5 5.6099C12.81 5.8799 12.84 6.3599 12.57 6.6699L12.2 7.0999C15.28 7.1999 17.76 9.7399 17.76 12.8499C17.75 15.9999 15.17 18.5799 12 18.5799Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const RedoIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity="0.4"
        d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"
        fill="currentcolor"
      />
      <path
        d="M12 18.5801C8.83 18.5801 6.25 16.0001 6.25 12.8301C6.25 9.72012 8.73 7.19012 11.81 7.08012L11.44 6.65012C11.17 6.34012 11.2 5.86012 11.51 5.59012C11.82 5.32012 12.3 5.35012 12.57 5.66012L14.23 7.56012C14.25 7.58012 14.26 7.60012 14.28 7.62012C14.32 7.68012 14.36 7.75012 14.38 7.82012C14.39 7.86012 14.4 7.90012 14.41 7.94012C14.43 8.03012 14.42 8.13012 14.4 8.22012C14.38 8.30012 14.35 8.38012 14.31 8.46012C14.3 8.48012 14.28 8.50012 14.27 8.52012C14.23 8.58012 14.17 8.63012 14.11 8.67012C14.11 8.67012 14.1 8.67012 14.1 8.68012L12.16 10.1001C11.82 10.3401 11.36 10.2701 11.11 9.94012C10.87 9.61012 10.94 9.14012 11.27 8.89012L11.68 8.59012C9.48 8.75012 7.74 10.5901 7.74 12.8301C7.74 15.1701 9.65 17.0801 11.99 17.0801C14.33 17.0801 16.24 15.1701 16.24 12.8301C16.24 11.9901 15.99 11.1701 15.53 10.4701C15.3 10.1301 15.39 9.66012 15.74 9.43012C16.09 9.20012 16.55 9.29012 16.78 9.64012C17.41 10.5901 17.75 11.6901 17.75 12.8301C17.75 16.0001 15.17 18.5801 12 18.5801Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const PencilIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M492.7 58.2c25 25 25 65.5 0 90.5l-60 60L302.7 78.7l60-60c25-25 65.5-25 90.5 0l39.4 39.4zM315.3 186.7l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
        fill="currentColor"
      />
      <path
        d="M432.7 208.7L302.7 78.7 58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L432.7 208.7zM89.3 360.5l22.7-9.1v32c0 8.8 7.2 16 16 16h32l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3zm226-196.4c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0z"
        fill="currentColor"
      />
    </svg>
  );
};
const UploadIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.53 13.53C11.38 13.68 11.19 13.75 11 13.75C10.81 13.75 10.62 13.68 10.47 13.53L9.75 12.81V17C9.75 17.41 9.41 17.75 9 17.75C8.59 17.75 8.25 17.41 8.25 17V12.81L7.53 13.53C7.24 13.82 6.76 13.82 6.47 13.53C6.18 13.24 6.18 12.76 6.47 12.47L8.47 10.47C8.54 10.41 8.61 10.36 8.69 10.32C8.71 10.31 8.74 10.3 8.76 10.29C8.82 10.27 8.88 10.26 8.95 10.25C8.98 10.25 9 10.25 9.03 10.25C9.11 10.25 9.19 10.27 9.27 10.3C9.28 10.3 9.28 10.3 9.29 10.3C9.37 10.33 9.45 10.39 9.51 10.45C9.52 10.46 9.53 10.46 9.53 10.47L11.53 12.47C11.82 12.76 11.82 13.24 11.53 13.53Z"
        fill="currentColor"
      />
      <path
        d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z"
        fill="currentColor"
      />
    </svg>
  );
};
const LeftArrowIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const RightArrowIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const useIcons = () => {
  return {
    CursorIcon,
    BoardLayerIcon,
    ColorSelectIcon,
    BoardColorSelectIcon,
    RubberIcon,
    ShapesIcon,
    TextIcon,
    ImageIcon,
    TrashIcon,
    UndoIcon,
    RedoIcon,
    PencilIcon,
    FirstBoardIcon,
    LastBoardIcon,
    PrevBoardIcon,
    NextBoardIcon,
    UploadIcon,
    LeftArrowIcon,
    RightArrowIcon,
  };
};
