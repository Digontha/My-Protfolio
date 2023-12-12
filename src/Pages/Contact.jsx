import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_31nlyew', 'template_oissyni', form.current, 'r4Oo3Uac2lObtQXVx')
        .then((result) => {
            console.log(result.text);
            swal("Send", "You Message send successfully", "success");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
            <div className="flex items-center justify-center h-[30vh]">
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white'>Contact</h1>
            </div>

            <section className="max-w-3xl mx-auto mt-8 p-6 bg-[#22252F] text-white rounded-md shadow-md">
        
        <p className="text-white text-2xl font-mono mb-6">Let's Connect And Work</p>

        <form   ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white">Name</label>
                    <input type="text" id="name" name="from_name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" required/>
                </div>

                <div className="mb-4">
                    <label  className="block text-sm font-semibold text-white">Email</label>
                    <input type="email" id="email" name="from_email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" required/>
                </div>
            </div>

            <div className="mb-4">
                <label  className="block text-sm font-semibold text-white">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none text-black focus:border-blue-400" required></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
        </form>
    </section>
        </>
    );
};

export default Contact;