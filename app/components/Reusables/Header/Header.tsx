
import Logo from "./Logo";
import LargeDeviceMenu from "./Navbar/LargeDeviceMenu";
import SmallDeviceMenu from "./Navbar/SmallDeviceMenu";

//
const Header = () => {
  return (
    <header className="w-full  lg:w-10/12 mx-auto flex flex-col justify-between items-start lg:flex-row lg:items-center  p-2 lg:p-6 ">
      <Logo />
      <div className="w-full lg:w-1/2 flex items-center justify-end">
       
        <LargeDeviceMenu />
        <SmallDeviceMenu/>
        
      </div>
    </header>
  );
};

export default Header;
