function SocialButton() {
    return (
        <div className="lg:flex-1 text-accent px-10 lg:pl-[200px]">
            <h3 className="text-xl font-for-head uppercase my-10 font-black lg:text-2xl lg:my-16">Contact</h3>
            <a href="tel:0644959819" className="flex items-center text-sm lg:text-[18px] pb-3">
                <i className="fas fa-phone-square text-4xl mr-5"></i>
                <p>0644959819</p>
            </a>
            <a href="mailto:kiki.ananyaluck@gmail.com" className="flex items-center text-sm lg:text-[18px] pb-3">
                <i className="fas fa-envelope-square text-4xl mr-5"></i>
                <p>kiki.ananyaluck@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/kiki-ananyaluck/" target="_blank" rel="noreferrer" className="flex items-center text-sm lg:text-[18px] pb-3">
                <i className="fab fa-linkedin text-4xl mr-5"></i>
                <p>linkedin.com/in/kiki-ananyaluck</p>
            </a>
            <a href="https://github.com/kiki-ananyaluck" target="_blank" rel="noreferrer" className="flex items-center text-sm lg:text-[18px] pb-3">
                <i className="fab fa-github-square text-4xl mr-5"></i>
                <p>github.com/Kiki-ananyaluck</p>
            </a>
        </div>
    )
}

export default SocialButton; 