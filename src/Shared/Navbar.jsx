import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 hover:bg-red-700 text-white rounded-xl" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }
    ><li><p>Home</p></li></NavLink>


    <NavLink to="/about" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
    }><li><p>About</p></li></NavLink>

    <NavLink to="/contact" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
    }><li><p>Contact</p></li></NavLink>
</>
    return (
        <>
        <div className="navbar bg-[#2F434C] lg:px-10 py-4 fixed z-10">
            <div className="flex-1 gap-2">
                <p className="text-white font-semibold font-mono  text-xl">DIGON<span className='text-3xl text-red-300'>THA</span></p>
               
            </div>
            <div className="dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul className="menu menu-sm font-mono dropdown-content space-y-3 mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-center  hidden lg:flex">
                <ul className="menu font-mono menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>
        </div>
    </>
    );
};

export default Navbar;