import Image from "next/image";

interface HoodiesType {
    image: string;
    name: string; 
}

export default function HoodiesCard({ image, name }: HoodiesType) {
    return (
        <div className="w-auto bg-[#333] border content-center border-black rounded-lg p-4 text-center transition-transform duration-200  transform hover:scale-105 cursor-pointer">
            <Image 
                src={image}
                alt="winter-wear"
                width={300}
                height={250}
                className="rounded-md h-auto w-auto sm:w-full  sm:h-[300px]  object-cover"
            />
            <h3 className="text-xl text-white mt-3">{name}</h3>
        </div>
    );
}