import { assets } from "../assets/assets";

const Footer = () => {


    return (
        <div className="flex flex-col space-y-10">
            <div className=" flex flex-col md:flex-row mt-20 w-full space-y-5 md:space-x-5">
                <div className=" w-full space-y-6" >
                    <img src={assets.logo} alt="" />
                    <p className="text-md text-gray-950">Prescripto offers a seamless and efficient way to book doctor appointments, ensuring quick access to healthcare professionals. With real-time availability, users can browse doctors by specialty, location, and reviews. Features include instant booking, reminders, secure medical record storage, and telemedicine options for virtual consultations, making healthcare accessible anytime, anywhere.</p>
                </div>
                <div className=" flex flex-col space-y-8 w-full md:w-1/2">
                    <h1 className="text-2xl font-medium">Company</h1>
                    <ul className="space-y-2 text-md text-black">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact US</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="  flex flex-col   ">
                    <h1 className="text-2xl font-medium pb-10 space-y-2 ">Get In touch</h1>
                    <p >+91-07867 9876 </p>
                    <p>docSupport@prescripto.com </p>
                    
                </div>
            </div>
            <div className="text-center">
                <hr />
                <p className="pt-6 text-lg">Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;