import Layout from "../Layout";
import ArrowToTop from "./ArrowToTop";

function CafeProject() {
    return (
        <Layout>
            <div className="w-5/6 m-auto">
                <h2 className="text-xl font-for-head uppercase mt-10 font-black">99 Cafe</h2>
                <div className="flex gap-4 mt-4 items-center">
                    <h3 className="text-xl font-black">Tools:</h3>
                    <p className="border rounded-full bg-secondary p-2 w-[100px] text-center text-accent">adobe xd</p>
                </div>
                <img className="my-6" src="/99cafe/Home.png" />
                <img className="my-6" src="/99cafe/About.png" />
                <img className="my-6" src="/99cafe/Product-coffee.png" />
                <img className="my-6" src="/99cafe/Single Product.png" />
                <img className="my-6" src="/99cafe/Blog.png" />
                <img className="my-6" src="/99cafe/Blog1.png" />
                <img className="my-6" src="/99cafe/Contact.png" />
                <img className="my-6" src="/99cafe/FAQs.png" />
                <ArrowToTop />
            </div>
        </Layout>
    )
};

export default CafeProject;