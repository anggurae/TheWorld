import React from "react";

const Footer = () => {
    return (
        <footer className="bg-sky-700 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} TheWorld. All right reserved</p>
            </div>
        </footer> 
    )
}

export default Footer;