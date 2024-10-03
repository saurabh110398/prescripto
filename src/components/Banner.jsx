import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";


const Banner = () => {
    let navigate = useNavigate();
       

    return (
        <div className="bg-primary rounded-lg flex justify-evenly flex-col md:flex-row items-center w-full ">
            <div className=" w-1/2 md:w-2/3 p-4  md:pl-20 font-medium space-y-7 ">
                <p className="text-2xl sm:text-3xl md:text-5xl pt-4 text-white ">Book Appointment </p>
                <p className="text-2xl sm:text-3xl md:text-5xl  text-white ">With 100+ Trusted Doctors </p>
                <button className="text-sm px-6 py-3 border rounded-full bg-white text-gray-600 hover:scale-105 transition-all duration-500"
                onClick={()=>{navigate('/login'); scrollTo(0,0)}}>Create Account</button>
            </div>
            <div className=" w-2/4 md:w-1/4">
                <img src={assets.appointment_img} alt="" />
            </div>
        </div>
    )

}
export default Banner;