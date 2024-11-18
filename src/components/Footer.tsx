import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#333] text-black text-center py-6">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-center flex-wrap gap-5 mb-5">
                    <a href="#search" className="text-black hover:text-[#16a085] transition-colors duration-300">Search</a>
                    <a href="#refunds" className="text-black hover:text-[#16a085] transition-colors duration-300">Refunds and Exchange</a>
                    <a href="#privacy" className="text-black hover:text-[#16a085] transition-colors duration-300">Privacy Policy</a>
                    <a href="#returns" className="text-black hover:text-[#16a085] transition-colors duration-300">Returns</a>
                    <a href="#terms" className="text-black hover:text-[#16a085] transition-colors duration-300">Terms of Service</a>
                </div>
                <div className="mb-5">
                    <input type="email" placeholder="My email address" className="px-4 py-2 border border-gray-300 rounded-md" />
                    <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-teal-600 transition-colors duration-300">Subscribe</button>
                </div>
                <div className="mb-2">
                    <a href="https://www.instagram.com" target="_blank" className="inline-block">
                        <Image
                            src="/images/insta.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="inline-block"
                        />
                    </a>
                </div>
                <p className="text-white mt-4">Copyright © 2024, SCNZ. Powered by Shopify</p>
            </div>
        </footer>
    );
}

