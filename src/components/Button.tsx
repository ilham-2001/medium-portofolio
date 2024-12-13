import {  MouseEventHandler, ReactNode } from 'react';

const Button = ({
  children,
  text,
  className,
  callback,
}: {
  text: string;
  children?: ReactNode;
  className?: string;
  callback?: MouseEventHandler;
}) => {
  return (
    <button
      onClick={callback}
      className={`border border-[#050505] px-4 py-3 font-medium  rounded-xl hover:bg-black hover:text-white ${className}`}>
      {text}
      {children}
    </button>
  );
};

export default Button;
