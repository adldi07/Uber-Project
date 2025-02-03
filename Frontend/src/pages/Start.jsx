import React from "react";
import { Link } from "react-router-dom";

function Start(){
    return (
        <div>
            <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/b7/00/d9/b700d9c907f660f45006d03517dcb3ee.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
                <img className="w-16 ml-8" src="https://imgs.search.brave.com/e3h8T3Zb69bnXXXunCAnZmdqzsZDBocnaI2fzf6PncA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy5sb2dvZnVyeS5j/b20vbG9nb19zcmMv/MmVjZjA1ZGE1ZThk/Y2ZhZjQ2ZjY4NDM2/NDY3YjRjYzYucG5n" alt="logo not found" />
                <div className="bg-white pb-7 py-4 px-4">
                    <h2 className="text-3xl font-bold">Get Started with uber </h2>
                    <Link to='/login' className=" flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start;