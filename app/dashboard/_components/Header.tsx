import Image from "next/image";

export default function Header() {
    return (
        <div className="w-screen h-[10vh] bg-yellow-200 flex flex-row items-center px-10">
            <Image src="/otzo_logo_2.png" alt="Logo de otzo" width={120} height={0} draggable={false} />
        </div>
    )
}