import Image from 'next/image'

const Wishlist = () => {
  return (
    <Image
            src="/assets/icons/Wishlist.png"
            alt="Wishlist"
            width={35}
            height={0}
            className="cursor-pointer"
            />
  )
}
export default Wishlist