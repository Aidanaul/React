import Content__block from "./Content__block";
import Navbar__block from "./Navbar__block";

function Header__container() {
    return (
        <div class="header__container">
            < Navbar__block />
            < Content__block />
        </div>
    );
}
export default Header__container;