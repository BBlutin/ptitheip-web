

function Home() {

    return (
        <div className="flex flex-col flex-grow ml-32 font-content">
            <div className="relative flex flex-col justify-start w-full h-screen">
                <div className="absolute top-0 left-0 right-0 h-screen bg-cover blur-sm bg-home-bg"></div>
                <div className="h-screen absolute top-0 left-0 right-0 bg-[#0F0F0F] bg-opacity-80"></div>
                <div className="flex items-center flex-grow">
                    <h2 className="text-gray-300 z-[2] text-5xl px-20 font-title">Le P'tit Heip Fait Peau Neuve!</h2>
                </div>
                <div className="z-[2] px-20">
                    <div className="bg-[#D03738] px-6 py-4 w-1/3">
                        <h4 className="text-xl text-white">2021-2022 c'est plein de projets : </h4>
                    </div>
                    <div className="flex flex-col px-8 py-8 bg-white bg-opacity-30">
                        <div className="flex justify-between px-20 pb-12">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                <p className="pt-2 text-lg text-gray-100">Des articles</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                                <p className="pt-2 text-lg text-gray-100">Des interviews</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                                <p className="pt-2 text-lg text-gray-100">Des podcasts</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                                <p className="pt-2 text-lg text-gray-100">Des vidéos</p>
                            </div>
                        </div>
                        
                        <p className="text-lg text-white">Et de nombreuses autres surprises... Restez connectés !</p>
                    </div>
                </div>
            </div>

            <div className="z-[2] bg-[#0F0F0F]">
                Test
            </div>
        </div>
    )
}

export default Home
