
import SocialButton from "./SocialButton";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div id="contact" className="h-auto bg-secondary">
            <div className="md:flex md:items-center">
                <div className="md:flex-1">
                    <p className="text-6xl capitalize font-bold text-accent font-for-head text-center pt-10 md:pt-20 lg:pt-32 lg:pl-32 lg:text-[100px]">thank you</p>
                </div>
                <SocialButton />
            </div>
            <br/>
            <p className="text-zinc-600 pb-5 lg:pt-5">
                <aside>
                    <p className="text-center text-sm">Kiki Anunluck Copyright © {year}</p>
                </aside>
            </p>
        </div>
    )
}

export default Footer;