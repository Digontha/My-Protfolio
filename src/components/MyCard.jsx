import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import img from "../../public/digontha.png"
import { Link } from "react-router-dom";
const MyCard = () => {

    // const handleDownloadResumeClick = () => {
    //     const resumePath = '../../public/digontha-web-development-resume-PH.pdf';
    //     const link = document.createElement('a');
    //     link.href = resumePath;
    //     link.download = 'digontha-resume.pdf'; // Specify the desired filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    return (
        <>

            <div className="card lg:w-96 bg-[#15272F] border text-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body lg:text-lg lg:ml-3">
                    <div className="flex items-center lg:gap-3">
                        <MdEmail />
                        <a href="mailto:digonthadas448@gmail.com" className="text-white font-mono">
                            digonthadas448@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center lg:gap-3">
                        <MdPhone />
                        <a href="tel:+8801746309197" className="text-white  font-mono">
                            +8801746-309197
                        </a>
                    </div>
                </div>
                <div className="mb-5 px-4">
                    <button className="btn btn-outline text-white w-full">Hire Me</button>

                    <a href="https://drive.google.com/uc?export=download&id=1yCPwSiDN2ZRauQBWvpZkrjoporgASj7V" download="Resume-of-digontha-das" className='btn btn-outline text-white w-full mt-3'> Download Resume<FaDownload className=''/></a>

                </div>
                <div className="flex justify-center items-center text-4xl my-5 gap-5">
                    <Link to="https://www.facebook.com/digontha.das.7" target="blank"> <FaFacebook className="cursor-pointer" /></Link>
                    <Link to="linkedin.com/in/digontha-das-51480a2a3" target="blank"> <FaLinkedin className="cursor-pointer" /></Link>
                    <Link to="https://github.com/Digontha" target="blank"> <FaGithub className="cursor-pointer" /></Link>
                </div>
            </div>

        </>
    );
};

export default MyCard;