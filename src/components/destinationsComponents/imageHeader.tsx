import Image from "next/image"
import { usePathname } from "next/navigation";


const ImageHeader = () => {
    const pathName = usePathname();
    const lastSegment = pathName.split("/").filter(Boolean).pop();
    return (<>
        <Image
            src="/ukpage.jpg"
            alt="UK Banner"
            width={1920}
            height={1080}
            className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-full object-cover"
            priority
        />
        <div className="absolute inset-0 flex flex-col items-center gap-1.5 text-center text-white px-4 py-6 sm:py-8 md:py-10">
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                Study in <span className="uppercase">{lastSegment}</span>
            </h1>
            <a
                href="/talk-to-expert"
                className="bg-base-300 px-4 sm:px-6 py-2 rounded text-xs hover:bg-accent transition text-black font-bold"
            >
                Talk to an Expert Counsellor for FREE
            </a>
        </div>
    </>)
}


export default ImageHeader