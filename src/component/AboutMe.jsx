function AboutMe() {
    return (
        <div id="about-me" className="h-auto bg-secondary text-accent my-14 px-5 py-10 md:px-[50px] md:my-20 md:py-[150px]">
            <h3 className="text-lg font-for-head capitalize md:text-3xl">welcome to my area!</h3>
            <p className="text-sm md:text-[20px] py-8 indent-10 leading-6 md:leading-8">Hello, world! I'm Kiki, a junior software developer with a passion for coding and an artistic flair. Beyond the lines of code, I incorporate creativity, integrating artistry into the world of software development. Excited to combine technological and artistic elements to produce unique and impactful solutions. </p>
            <div className="md:flex md:justify-end md:gap-4 md:mt-8">
                <p className="text-end text-sm md:text-[20px] leading-8">Have a nice day - hope you enjoy it !</p>
                <p className="text-end name-font text-lg md:text-[30px] leading-6 md:leading-9">Kiki Ananyaluck</p>
            </div>
        </div>
    )
}

export default AboutMe;