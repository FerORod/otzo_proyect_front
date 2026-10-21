import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=  "bg-yellow-200 h-screen w-screen overflow-hidden ">
        <div className="place-content-center flex flex-col items-center justify-center h-full w-full">
            <Image src="/otzo_logo_2.png" alt="Logo de otzo" width={300} height={0} />
            {children}
        </div>
    </div>
  )
}