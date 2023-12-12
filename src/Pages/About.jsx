import { FaBook, FaCalendarTimes, FaCertificate, FaSchool,} from "react-icons/fa";
import { SiCounterstrike } from "react-icons/si";



const About = () => {


    return (
        <>
            <div className="flex items-center justify-center h-[30vh]">
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white'>About</h1>
            </div>


            <div className='lg:w-3/4 w-full border p-20 rounded-full  lg:mx-auto'>
                <h1 className='lg:text-3xl text-base text-[#B3B3B3] font-mono'>  Hey, Hi from Digontha, I am a junior frontend developer, I have determination to work and at least enthusiasm. As a fresher, I have at least a desire to learn and work. I have learned React.js, JavaScript, Express, MongoDB, Node.js, HTML, and CSS, I will learn more things in the future this is one of my goals. And with this goal, I want to partner with an organization, this organization will give me courage, support, and encourage me. .And want to take this partner to the top of improvement. Finally, I want to be a reliable web developer, so that people can trust me, and I want to contribute something to this industry.</h1>
            </div>

            <div>
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white my-10'>Education</h1>
            </div>

            <div className="text-white font-mono lg:flex lg:justify-center lg:gap-40">
                <div className="lg:text-xl text-sm space-y-5">
                    <div className="flex items-center gap-3">
                        <FaCertificate></FaCertificate> Secondary School Certificate  ( SSC )
                    </div>

                    <hr />
                    <p className="flex items-center gap-3"><FaSchool></FaSchool> Shah Helal High School</p>
                    <p className="flex items-center gap-3"><FaCalendarTimes></FaCalendarTimes>2018-2020</p>
                    <p className="flex items-center gap-3"><SiCounterstrike></SiCounterstrike> Grade : 4.17</p>
                </div>

                <div className="lg:text-xl text-sm space-y-5">
                    <div className="flex items-center gap-3">
                        <FaSchool></FaSchool> Higher  Secondary School Certificate  ( HSC )
                    </div>

                    <hr />
                    <p className="flex items-center gap-3"><FaSchool></FaSchool>Rajnagar Government Collage</p>
                    <p className="flex items-center gap-3"><FaCalendarTimes></FaCalendarTimes>2020-2022</p>
                    <p className="flex items-center gap-3"><SiCounterstrike></SiCounterstrike> Grade : 3.83</p>
                </div>

                <div className="lg:text-xl text-sm space-y-5">
                    <div className="flex items-center gap-3">
                        <FaSchool></FaSchool> Higher  Secondary School Certificate  ( HSC )
                    </div>

                    <hr />
                    <p className="flex items-center gap-3"><FaSchool></FaSchool>Moulvibazar Government Collage</p>
                    <p className="flex items-center gap-3"><FaBook></FaBook> Bachelor Of Science</p>
                    <p className="flex items-center gap-3"><FaCalendarTimes></FaCalendarTimes>2023-Present</p>
                    
                </div>
            </div>
        </>
    );
};

export default About;
