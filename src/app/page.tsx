// app/page.tsx or pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-center bg-cover h-screen" style={{ backgroundImage: 'url(/images/bg-img.png)' }}>
      <div className="flex items-center justify-center h-full">
        <Link href="/catalog">
          <button className="bg-cyan-400 text-black py-3 px-12 rounded transition-transform duration-200 ease-in-out hover:bg-cyan-500 transform hover:scale-105">
            SHOP NOW // BATCH 008
          </button>
        </Link>
      </div>
    </div>
  );
}