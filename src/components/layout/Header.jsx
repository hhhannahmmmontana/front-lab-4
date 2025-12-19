import SearchBar from "../search/SearchBar";
import ThemeToggler from "./ThemeToggler";
import UnitsToggler from "./UnitsToggler";

function Header() {
    return (
        <header className="flex justify-between sized mb-[47px]">
            <ThemeToggler />
            <SearchBar />
            <UnitsToggler />
        </header>
    );
}

export default Header;