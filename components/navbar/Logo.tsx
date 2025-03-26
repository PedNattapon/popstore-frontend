import Image from 'next/image'
import Link from 'next/link'

const logo = () => {
  return (
    <div>
        <Link href="/">
        <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={157}
            height={66}
            className="cursor-pointer"
            />
        </Link>
    </div>
  )
}
export default logo