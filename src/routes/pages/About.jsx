import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <header className="py-5 text-center text-4xl">關於我</header>
            <nav></nav>
            <section className="flex justify-center mx-40 max-xl:flex-col max-lg:mx-8">
                <aside className=" w-1/3 max-xl:w-full ">
                    <div className="flex mx-auto max-xl:items-center justify-center max-2xl:flex-col max-xl:flex-row max-md:flex-col">
                        <div className="w-52 h-52 bg-sky-900 border-2 rounded-4xl m-auto">
                            <img
                                className="w-full rounded-4xl"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="mySelf flex flex-col justify-center items-start max-2xl:items-center m-8 max-xl:m-auto max-md:m-8  ">
                            <h1 className="text-4xl mb-2">羅仁甫</h1>
                            <h1 className="text-2xl mb-5">
                                中原大學商業設計系
                            </h1>

                            <h2 className="text-xl mb-2">電話 0921457678</h2>
                            <h2 className="text-xl">信箱 ralphLu@gmail.com</h2>
                        </div>
                    </div>

                    <div className="flex items-center justify-around my-10 mx-auto sticky top-[5rem] max-lg:justify-center">
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 max-lg:m-10 max-md:m-2 ">
                                CodePen
                            </button>
                        </Link>
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 max-lg:m-10 max-md:m-2">
                                GitHub
                            </button>
                        </Link>
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 max-lg:m-10 max-md:m-2">
                                Behance
                            </button>
                        </Link>
                    </div>

                    <div className="block">
                        <h2>專業技能</h2>
                        <h4>Skill</h4>
                        <ul className="listSkill flex flex-wrap">
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                前端網頁<div className="circle"></div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                後端資料<div className="circle"></div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                程式開發<div className="circle"></div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                平面設計<div className="circle"></div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                UI/UX<div className="circle"></div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                設計企劃<div className="circle"></div>
                            </li>
                        </ul>
                    </div>
                </aside>
                <article className="w-2/3 h-[2000px] max-xl:w-full">
                    222
                </article>
            </section>
        </>
    )
}

export default About
