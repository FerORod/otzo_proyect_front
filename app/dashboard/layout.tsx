import Header from "./_components/Header";
import Sidebar from "./_components/_Sidebar/Sidebar";

export default function LayoutDashboard({ children }: Readonly<{ children: React.ReactNode }>) {
    return(
        <div className= "w-screen h-screen bg-yellow-50">
            <Header />
            <div className="flex flex-row items-center">
                <Sidebar />
                {children}
            </div>

        </div>
    )
}