import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../public/digontha.png"
const MyCard = () => {
    return (
        <>

            <div className="card w-96 bg-[#15272F] border text-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
                <div className="mb-5 px-4">
                    <button className="btn btn-outline text-white w-full">Hire Me</button>
                </div>
                <div className="flex justify-center items-center text-4xl my-5 gap-5">
                <FaFacebook></FaFacebook>
                <FaLinkedin />
                <FaGithub />
                </div>
            </div>

        </>
    );
};

export default MyCard;