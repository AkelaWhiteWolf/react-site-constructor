import React from 'react';

interface Props {
  direction?: 'up' | 'right' | 'down' | 'left';
}

function rotate(direction: Props['direction']) {
  let deg: number;

  switch (direction) {
    case 'up':
      deg = 180;
      break;
    case 'right':
      deg = 270;
      break;
    case 'down':
      deg = 0;
      break;
    case 'left':
      deg = 90;
      break;
    default:
      deg = 0;
  }

  return `rotate(${deg})`;
}

export const ArrowIcon: React.FC<Props> = ({ direction }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      transform={rotate(direction)}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.875 11.616V1.25h1.25v10.366l3.933-3.933.884.884L7.5 14.009 2.058 8.567l.884-.884 3.933 3.933Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
