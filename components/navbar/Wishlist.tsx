import Image from 'next/image'

const Wishlist = () => {
  return (
    <Image
            src="/assets/icons/Wishlist.png"
            alt="Wishlist"
            width={40}
            height={0}
            draggable={false}
            className="cursor-pointer active:shadow-none active:scale-85
    transition duration-60 ease-in-out"

            />
  )
}
export default Wishlist