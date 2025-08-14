import FrontpageLayout from "../../Layouts/FrontpageLayout";

export default function HomePage() {
    return (
        <FrontpageLayout>
            <section className="bg-white pt-20">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
                    <a
                        href="https://www.kadekwidiana.my.id"
                        target="_blank"
                        className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 hover:bg-gray-200"
                        role="alert"
                    >
                        <span className="text-xs bg-primary/70 rounded-full text-white px-4 py-1.5 mr-3">
                            Lorem
                        </span>{" "}
                        <span className="text-sm font-medium">
                            Lorem, ipsum dolor.
                        </span>
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        Nos.Project
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Explicabo nobis mollitia consectetur tenetur quam.
                        Laboriosam ipsam inventore quia accusantium labore!
                    </p>
                    <div className="flex flex-col mb-0 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://www.kadekwidiana.my.id"
                            target="_blank"
                            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white bg-primary/80 rounded-lg hover:bg-primary focus:ring-4 focus:ring-cyan-300"
                        >
                            Lihat Portofolio
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </FrontpageLayout>
    );
}
