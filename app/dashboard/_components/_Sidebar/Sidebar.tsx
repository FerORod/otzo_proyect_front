import { LuBookUser, LuPopcorn, LuStore, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <nav className="w-[8vw] h-[90vh] bg-yellow-200 flex flex-col items-center">
            <NavItem icon={<LuStore className="text-4xl my-4"/>} path="/dashboard"/>
            <NavItem icon={<LuBookUser className="text-4xl my-4"/>}path="/providers"/>
            <NavItem icon={<LuPopcorn className="text-4xl my-4"/>} path="/products"/>
            <NavItem icon={<LuUser className="text-4xl my-4"/>} path="/managers"/>
            <NavItem icon={<LuUsers className="text-4xl my-4"/>} path="/users"/>
        </nav>
    )
}