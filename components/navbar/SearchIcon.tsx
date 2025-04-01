import Image from 'next/image'


const SearchIcon = () => {
  return (
    <Image
    src="/assets/icons/Search.png"
    alt="Search"
    width={30}
    height={20}
    className="cursor-pointer"
    draggable={false}
    />
  )
}
export default SearchIcon