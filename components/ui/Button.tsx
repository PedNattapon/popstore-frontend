function Button({ children, className = '', ...props }) {
  return (
    <button className={`flex items-center border-[3px] border-b-8 border-black rounded-full shadow-md px-3 py-0.5   active:scale-99 active:shadow-none transition duration-150 ease-in-out active:translate-y-[3px] active:border-b-3${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button

