import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-evenly sm:flex-row sm:flex  flex-col  bg-black p-4">
        <h1>
          <Link href="/" className="pr-10 font text-white font-extrabold  cursor-pointer">SCNZ᙮</Link>
        </h1>
        <ul className="flex mr-12 gap-20  items-center sm:flex-row flex-col">
          <li className="flex items-center">
            <span className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mr-2"></span>
            <Link href="/" className="text-white font-serif font-semibold hover:text-cyan-400">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="w-1.5 h-1.5 bg-[#ff0000]  rounded-full mr-2"></span>
            <Link href="/catalog" className="text-white font-semibold font-serif hover:text-cyan-400">
              Catalog
            </Link>
          </li>
          <li className="flex items-center">
            <span className="w-1.5 h-1.5 bg-[#ff0000]  rounded-full mr-2"></span>
            <Link href="/contact" className="text-white font-semibold font-serif hover:text-cyan-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}