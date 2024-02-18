import Layout from "../Layout";
import ArrowToTop from "./ArrowToTop";

function MamikoProject() {
    return (
        <Layout>
            <div className="w-5/6 m-auto">
                <div>
                    <h2 className="text-xl font-for-head uppercase mt-10 font-black">Mamiko</h2>
                    <div className="flex gap-4 mt-4 items-center">
                        <h3 className="text-xl font-black">Tools:</h3>
                        <p className="border rounded-full bg-secondary p-2 w-[100px] text-center text-accent">adobe xd</p>
                    </div>
                    <img className="my-6" src="/mamiko/home.png" />
                    <img className="my-6" src="/mamiko/japanese.png" />
                    <img className="my-6" src="/mamiko/blog.png" />
                    <img className="my-6" src="/mamiko/blog-hiragana.png" />
                    <img className="my-6" src="/mamiko/about.png" />
                    <img className="my-6" src="/mamiko/podcast.png" />
                </div>
                <ArrowToTop />
            </div>
        </Layout>
    )
};

export default MamikoProject;