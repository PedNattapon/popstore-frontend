import Image from 'next/image'

const Cart = () => {
  return (
        <Image
        src="/assets/icons/Cart1.png"
        alt="Cart1"
        width={35}
        height={20}
        className="cursor-pointer"
        draggable={false}
        />
  )
}
export default Cart