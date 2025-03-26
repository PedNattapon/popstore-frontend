import Logo from "./Logo"
import Search from "./Search"
import Cart from "./Cart"

const Navbar = () => {
  return (
    <nav>
        <div className="container flex justify-between py-5">
            <div className="flex gap-2 text-sm">
                <span>HOME</span>
                <span>GAMES</span>
                <span>CONSOLE</span>
                <span>CONTACT</span>
                <span>ACCESORIES</span>
            </div>
            {/* Logo */}
            <Logo />
            {/* Search */}
            <Search/>
            {/* Profile */}
            <div className="flex-col text-xs">
                <span>Log in | Create Account</span>
                <Cart/>
            </div>
        </div>
    </nav>
  )
}
export default Navbar