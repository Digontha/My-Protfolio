import moment from 'moment';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-[#2F434C] text-white text-xl rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.facebook.com/digontha.das.7" target="blank"> <FaFacebook className="cursor-pointer" /></Link>
                    <Link to="linkedin.com/in/digontha-das-51480a2a3" target="blank"> <FaLinkedin className="cursor-pointer" /></Link>
                    <Link to="https://github.com/Digontha" target="blank"> <FaGithub className="cursor-pointer" /></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {moment().format('YYYY')} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;