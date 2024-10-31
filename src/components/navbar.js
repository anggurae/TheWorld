import React from "react";

const Navbar = () => {
    return(
        <nav className="bg-sky-700 p-4"> 
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-3x1 font-bold">TheWorld</h1>
            <div>
                <a href="#projects" className="text-gray-300 hover:text-white mx-4 transition duration-300">Keajaiban Dunia</a>
                <a href="#contact" className="text-gray-300 hover:text-white mx-4 transition duration-300">Contact Us</a>
            </div>
            </div>
        </nav> 
    )
}

export default Navbar;