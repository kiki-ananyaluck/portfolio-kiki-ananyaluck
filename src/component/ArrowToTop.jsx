const ArrowToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-w-full">
            <button className="btn lg:btn-lg fixed bottom-0 right-0 m-4" onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default ArrowToTop; 
