
const Button = ({ children, text, className }: any) => {
  return (
    <button 
      className={`border border-[#050505] px-4 py-3 font-medium  rounded-xl hover:bg-black hover:text-white ${className}`}>
      {text}
      {children}
    </button>
  )
}

export default Button;