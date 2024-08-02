import { RiReactjsLine } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import dotnet from "../assets/dotnet.png";
import codeigniter from "../assets/codeigniter.png";
import { SiDotnet } from "react-icons/si";
import sql from "../assets/sql.png";
import winforms from "../assets/winforms.png"

const Technologies = () => {

    return (
        <div className = "border-b border-neutral-800 pb-24">
            <h1 className = "my-20 text-center text-4xl font-bold"> Tech Stacks </h1>
            <div className = "flex flex-wrap items-center justify-center gap-4" >
                <div className = "rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className = "text-7xl text-cyan-400"/>
                </div>
                <div className = "rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDjango className = "text-7xl text-green-600"/>
                </div>
                <div className = "rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDotnet className = "text-7xl text-white-600"/>
                </div>
                <div className = "rounded-2xl border-4 border-neutral-800 p-4">
                    <img  src = {codeigniter} alt = "logo" className = "mx-0 w-20" />
                </div>
                <div className = "rounded-2xl border-4 border-neutral-800 p-4">
                    <img  src = {sql} alt = "logo" className = "mx-0 w-20" />
                </div>
            </div>

        </div>
    );
};

export default Technologies;