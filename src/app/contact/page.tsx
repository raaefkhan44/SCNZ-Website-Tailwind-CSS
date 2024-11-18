export default function Contact() {
    return (
      <div className="px-[20px] py-[40px] bg-no-repeat bg-contain" style={{ backgroundImage: "url('/images/contact-bg.jpeg')" }}>
        <div className="content ">
          <h1 className="text-4xl text-center font-extrabold font-serif text-white">Get in Touch</h1>
          <p className="text-lg text-center font-bold  mt-[3px] px-8 py-4 text-[1rem] text-white mb-5">We would love to hear from you!</p> 
        </div>
        <div className="max-w-[600px] m-[40px] p-[20px] mx-auto bg-black  rounded-lg shadow-lg ">
          <form className="flex flex-col text-center space-y-5">
            <label className="text-xl text-[#28ffd4]  mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 bg-[#333] border border-black rounded-md text-white" placeholder="Your Name" required />
  
            <label className="text-xl text-[#28ffd4]  mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-[#333] border border-black rounded-md text-white" placeholder="Your Email" required />
  
            <label className="text-xl text-[#28ffd4]  mb-1" htmlFor="message">Message</label>
            <textarea id="message" className="w-full px-4 py-2 bg-[#333] border border-black rounded-md text-gray-500 h-24 resize-y" placeholder="Your Message" required></textarea>
  
            <button type="submit" className="w-full py-3 bg-[#16a085] text-black  rounded-md hover:scale-105 transform transition-all duration-300">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
  