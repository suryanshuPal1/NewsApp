import React from "react";
import customLogo from "../assets/custom.png"
import othersLogo from '../assets/others.png'

const Customize =()=>{
    return(
        <div>
            <div className="mt-6">
            <h2 className="text-center text-3xl text-blue-900">Customize your Preference</h2>
            </div>
            <div className="mt-10">
            <img src={customLogo} alt="customLogo" className="ml-[200px] mt-[100px]"/>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl ml-[200px] text-blue-900 ">Others</h2>

            </div>
            <div className="mt-8">
                <img src={othersLogo} alt="other logo" className="ml-[200px]"/>
            </div>
            
        </div>
    )
}
export default Customize;