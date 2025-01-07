import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import {  FaLocationDot, FaYoutube} from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2 text-center">Contact <span className="text-red-700">Us</span></h3>
            <p className='italic text-center'>Get in touch with us</p>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 col-span-1">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is FlickNest?</div>
                        <div className="collapse-content">
                            <p>FlickNest is a movie web app for enjoying films with friends, featuring curated selections, progress tracking, and social interactions. Its designed for cozy movie nights or group viewings with tools like watchlists and recommendations</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Where Can I Watch?</div>
                        <div className="collapse-content">
                            <p>Watch anywhere, anytime. sign-up or login and enjoy movies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How much does FlickNest Cost?</div>
                        <div className="collapse-content">
                            <p>It has two plans. One is basic and another one is premium</p>
                        </div>
                    </div>
                </div>

                <div>
                <div className='space-y-8 p-8 pr-0 border-b-2 border-l-2 border-gray-900 mr-10 mt-5 shadow-2xl'>
                    <div className='flex items-center gap-3'>
                        <BiLogoGmail className='text-3xl text-red-700' />
                        <p>flickNest@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaPhoneAlt className='text-2xl text-green-700' />
                        <p>+88 01705890000</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaLocationDot className='text-3xl text-red-600' />
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaYoutube className='text-3xl text-red-600' />
                        <p>Dhaka, Bangladesh</p>
                    </div>

                </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;