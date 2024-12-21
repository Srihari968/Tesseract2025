import React from "react";

export default function ComingSoonCard() {
return (
    <div className="w-full flex justify-center my-8">
        <div className="w-full sm:w-[600px] min-h-[300px] bg-gray-800/40 backdrop-blur-[12px] rounded-xl py-9 px-6 flex flex-col justify-center items-center relative">
            <div
                className="absolute w-[500px] h-[500px] top-[-150px] left-[-150px] z-0"
                style={{
                backgroundImage: "url('/Images/blue-purple.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transform: "rotate(180deg)",
                }}
            ></div>
            <div className="relative z-10 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Coming Soon
                </h1>
                <p className="text-gray-200 mt-3 text-sm sm:text-base">
                Exciting events and activities are on their way. Stay tuned for updates!
                </p>
                {/* <button
                type="button"
                className="mt-5 text-white bg-gradient-to-br from-purple-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-4 py-2 font-semibold"
                >
                Notify Me
                </button> */}
            </div>
        </div>
    </div>
);
}
