import { ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
    icon: ReactNode;
    path: string;
}

const NavItem = ({icon, path}: NavItemProps) => {
    return (
        <Link href={path}>{icon}</Link>
    )
}

export default NavItem;