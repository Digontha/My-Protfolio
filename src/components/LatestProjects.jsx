
import img1 from "../../public/project1.png"
import img2 from "../../public/project2.png"
import img3 from "../../public/project3.png"

const LatestProjects = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white mb-5 mt-5'>Latest Project</h1>
            </div>
            
           <div className="grid grid-cols-2 w-[1000px] mx-auto gap-20 my-10 text-white font-mono">
           <div className="card  bg-[#0E142D] shadow-xl p-5">
                <figure className="w-full h-60"><img src={img1} className="w-[100%] " alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">TechBD</h2>
                    <p>It's a tech website. There are many types Tech devices will be available...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-outline">Preview</button>
                        <button className="btn btn-primary btn-outline">Github Repo</button>
                    </div>
                </div>
            </div>
           <div className="card   bg-[#0E142D] shadow-xl p-5">
                <figure className="w-full h-60"><img src={img2} className="w-[100%]" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">HotelBD</h2>
                    <p>The project I created is a Hotel Service website. A hotel that carries a variety of rooms...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-outline">Preview</button>
                        <button className="btn btn-primary btn-outline">Github Repo</button>
                    </div>
                </div>
            </div>
           <div className="card   bg-[#0E142D] shadow-xl p-5">
                <figure className="w-full h-60"><img src={img3} className="w-[100%]" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">GadgetBD</h2>
                    <p>It's a tech website. There are many types Tech devices will be available...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-outline">Preview</button>
                        <button className="btn btn-primary btn-outline">Github Repo</button>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default LatestProjects;