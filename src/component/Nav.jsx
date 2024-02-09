import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {
    return (
        <div className="navbar mb-10 px-5 md:px-[50px]">
            <div className="flex-1">
                <AnchorLink className="nav-link text-base md:text-xl font-medium font-for-head" href="#home">-KIKI.</AnchorLink>
            </div>
            <div className="flex-none">
                <ul className="flex flex-row first-line:text-base md:text-xl font-medium font-for-head">
                    <li className="ml-3 md:ml-5 nav-link"><AnchorLink href="#about-me">About Me</AnchorLink></li>
                    <li className="ml-3 md:ml-5 nav-link"><AnchorLink href="#project">Project</AnchorLink></li>
                    <li className="ml-3 md:ml-5 nav-link"><AnchorLink href="#contact">Contact</AnchorLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
