import Logo from "./Logo"
import Search from "./Search"
import Cart from "./Cart"
import Button from "@/components/ui/Button"
import Wishlish from "./Wishlist"

const Navbar = () => {
  return (
    <nav className="layout_header grid grid-cols-3 items-center px-2 py-2 gap-4 sm:flex-row">
        <div className="header_listContainer flex items-center gap-4 text-sm">
                <span>HOME</span>
                <span>GAMES</span>
                <span>CONSOLE</span>
                <span>CONTACT</span>
                <span>ACCESORIES</span>
            </div>
            {/* Logo */}
            <div className="flex justify-center">
            <Logo />
            </div>
            {/* Search */}
            <div className="header_searchContainer flex flex-row items-center justify-end gap-4 py-5">
            <Search/>
            {/* Profile */}
            <div className="header_inforBlock flex flex-col items-end gap-2">
                    <span className="text-xs">Log in | Create Account</span>
                    <div className="flex items-center gap-2 relative">
                    <Wishlish/>
                    <Button className="flex-shrink-0">
                    <Cart/>
                    </Button>
                    </div>
                </div>
            </div>
    </nav>
  )
}
export default Navbar