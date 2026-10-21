import Header from "./_components/Header";
import SideBar from "./_components/Sidebar";

export default function LayoutDashboard({ children }: Readonly<{ children: React.ReactNode }>) {
    return(
        <div className= "w-screen h-screen bg-yellow-50">
            <Header />
            <SideBar />
            {children}
        </div>
    )
}