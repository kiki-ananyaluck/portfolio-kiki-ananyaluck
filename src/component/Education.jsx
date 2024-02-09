function Education() {
    return (
        <div className="h-auto secondary my-14 px-5 md:px-[50px] min-[1200px]:my-[100px]">
            <h3 className="text-xl font-for-head uppercase my-10 text-center font-black md:text-2xl md:my-20">Education</h3>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <i className="fa-solid fa-graduation-cap text-xl p-2"></i>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic text-sm md:text-[16px] ">Nov 2020 - Feb 2023</time>
                        <div className="text-md font-black md:text-[18px]">Junior Software Developer, cohort 6</div>
                        <p className="text-sm md:text-[18px]">Generation Thailand</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <i className="fa-solid fa-graduation-cap text-xl p-2"></i>
                    </div>
                    <div className="timeline-end my-4 mb:mb-10">
                        <time className="font-mono italic text-sm md:text-[16px]">May 2020 - Dec 2023</time>
                        <div className="text-md font-black md:text-[18px]">Bachelor of International Relations</div>
                        <p className="text-sm md:text-[18px]">Ramkhamhaeng University, Bangkok</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <i className="fa-solid fa-graduation-cap text-xl p-2"></i>
                    </div>
                    <div className="timeline-start my-4 md:text-end md:mb-10">
                        <time className="font-mono italic text-sm md:text-[16px]">Sep 2021 - Dec 2021</time>
                        <div className="text-md font-black md:text-[18px]">Coder Camp: Website developer and Chatbot career for online business</div>
                        <p className="text-sm md:text-[18px]">STEM Career Academies</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <i className="fa-solid fa-graduation-cap text-xl p-2"></i>
                    </div>
                    <div className="timeline-end my-4 md:mb-10">
                        <time className="font-mono italic text-sm md:text-[16px]">2015 - 2018</time>
                        <div className="text-md font-black md:text-[18px]">English-Japanese Program</div>
                        <p className="text-sm md:text-[18px]">Satrinonthaburi School, Nonthaburi</p>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    )
}

export default Education;