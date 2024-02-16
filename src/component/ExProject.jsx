function ExProject() {
    return (
        <div id="project" className="h-auto secondary my-14 px-5 md:px-[50px] md:pb-[40px] min-[1200px]:my-[100px]">
            <h3 className="text-xl font-for-head uppercase my-10 text-center font-black md:text-2xl md:my-20">Projects</h3>
            <div className="grid grid-rows-1 gap-y-10 md:gap-x-5 md:grid-cols-3 min-[1200px]:gap-x-5">

                <a href="/project/99-cafe" target="_blank" rel="noreferrer">
                    <div className="mx-auto card card-compact w-54 min-[1200px]:w-[400px] min-[1680px]:w-[450px] bg-base-100 shadow-lg hover:shadow-xl">
                        <figure>
                            <img src="/99cafe/99cafe-cover.png" alt="99cafe-cover.png"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-for-head font-black md:text-2xl selection:card-title">99 Cafe</h2>
                            <p className="text-[16px] md:text-[18px] font-black">Tools: </p>
                            <p className="text-[14px] md:text-[16px]">Adobe XD</p>
                            <div className="card-actions justify-end">
                                <a href="/project/99-cafe" target="_blank" rel="noreferrer" className="hover:underline">View more</a>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/project/mamiko" target="_blank" rel="noreferrer">
                    <div className="mx-auto card card-compact w-54 min-[1200px]:w-[400px] min-[1680px]:w-[450px] bg-base-100 shadow-lg hover:shadow-xl">
                        <figure>
                            <img src="/mamiko/mamiko-cover.png" alt="mamiko-cover.png"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-for-head font-black md:text-2xl selection:card-title">MAMIKO</h2>
                            <p className="text-[16px] md:text-[18px] font-black">Tools: </p>
                            <p className="text-[14px] md:text-[16px]">Adobe XD</p>
                            <div className="card-actions justify-end">
                                <a href="/project/mamiko" target="_blank" rel="noreferrer" className="hover:underline">View more</a>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://loglife.guru/" target="_blank" rel="noreferrer">
                    <div className="mx-auto card card-compact w-54 min-[1200px]:w-[400px] min-[1680px]:w-[450px] bg-base-100 shadow-lg hover:shadow-xl">
                        <figure>
                            <img src="/loglife/loglife-cover.png" alt="mamiko-cover.png"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-for-head font-black md:text-2xl selection:card-title">Loglife <span className="font-light text-sm lg:text-md min-[1680px]:text-lg">(with team 8)</span></h2>
                            <p className="text-[16px] md:text-[18px] font-black">Tools: </p>
                            <p className="text-[14px] md:text-[16px]">Figma, React, MERN Stack, Tailwind</p>
                            <div className="card-actions justify-end">
                                <a href="https://loglife.guru/" target="_blank" rel="noreferrer" className="hover:underline">View more</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ExProject;