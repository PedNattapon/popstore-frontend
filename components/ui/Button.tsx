function Button({ children, className = '', ...props }) {
  return (
    <button className={`
     flex items-center justify-center border-[3px] border-b-8 border-black rounded-full shadow-md px-3 py-0.5 
    active:border-b-3 active:translate-y-[3px] active:shadow-none active:scale-99
    transition duration-60 ease-in-out
    h-[48px] w-[80px] bg-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button

