function Nav() {
    return (
        <div className="navbar mb-10 px-5 md:px-[50px]">
            <div className="flex-1">
                <a className="nav-link text-base md:text-xl font-medium font-for-head" href="/#home">-KIKI.</a>
            </div>
            <div className="flex-none">
                <ul className="flex flex-row first-line:text-base md:text-xl font-medium font-for-head">
                    <li className="ml-3 md:ml-5 nav-link"><a href="/#about-me">About Me</a></li>
                    <li className="ml-3 md:ml-5 nav-link"><a href="/#project">Project</a></li>
                    <li className="ml-3 md:ml-5 nav-link"><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
