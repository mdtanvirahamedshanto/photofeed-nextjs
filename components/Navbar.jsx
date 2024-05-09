import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="py-2 md:py-4 border-b">
      <div className="container h-[50px]  flex items-center justify-between gap-x-6">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
