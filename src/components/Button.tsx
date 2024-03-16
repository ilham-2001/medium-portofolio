
const Button = ({ text }: any) => {
  return (
    <button 
      className='px-4 py-3 text-white font-medium bg-[#050505] rounded-xl hover:opacity-80'>
      {text}
    </button>
  )
}

export default Button;