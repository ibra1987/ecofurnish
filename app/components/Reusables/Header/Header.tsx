
import { ServerActionResponse } from "@/types/app";
import Logo from "./Logo";
import LargeDeviceMenu from "./Navbar/LargeDeviceMenu";
import SmallDeviceMenu from "./Navbar/SmallDeviceMenu";
import { LoggedInUser } from "@/types/users";

//
const Header = ({session}:{session:ServerActionResponse | null}) => {
  return (
    <header className="w-full   bg-secondary text-white   p-2 px-4 lg:p-6 ">
     <div className="w-full lg:w-10/12 mx-auto flex flex-col justify-between items-start lg:flex-row lg:items-center">
     <Logo />
      <div className="w-full lg:w-1/2 flex items-center justify-end">
       
        <LargeDeviceMenu user={session?.data ? session?.data.user as LoggedInUser: null } />
        <SmallDeviceMenu  user={session?.data ? session?.data.user as LoggedInUser: null }/>
        
      </div>
     </div>
    </header>
  );
};

export default Header;
