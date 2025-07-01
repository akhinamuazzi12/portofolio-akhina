import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

         window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, []);
  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-violet-600 text-black py-1 px-3 border border-zinc-500 bg-blue-600 rounded-md md:bg-blue-800 md:text-white">Portofolio</h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
         md:opacity-100 bg-black-50 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
         ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li><a href="#beranda" className="sm:text-lg text-white text-base font-bold">Home</a></li>
            <li><a href="#tentang" className="sm:text-lg text-white text-base font-bold">About</a></li>
            <li><a href="#proyek" className="sm:text-lg text-white text-base font-bold">Project</a></li>
            <li><a href="#kontak" className="sm:text-lg text-white text-base font-bold">Contact</a></li>
            <li><a href="#database" className="sm:text-lg text-white text-base font-bold">Riwayat</a></li>
        </ul>
    </div>
  )
}
export default Navbar