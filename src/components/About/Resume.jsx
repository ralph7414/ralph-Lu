import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <>
            <section className="flex justify-center mx-40 mt-24 mb-10 max-xl:flex-col max-md:mx-8">
                <aside className=" w-1/3 max-xl:w-full ">
                    <div className="flex mx-auto justify-center flex-col">
                        <div className="userImg w-52 h-52 bg-sky-900 border-2 rounded-4xl m-auto"></div>

                        <div className="mySelf flex flex-col justify-center items-center m-8 max-xl:m-8 ">
                            <h1 className="text-4xl mb-2">羅仁甫</h1>
                            <h1 className="text-2xl mb-5">
                                中原大學商業設計系
                            </h1>

                            <h3 className="text-xl mb-2">電話 0921457678</h3>
                            <h3 className="text-xl">信箱 ralphlu26516@gmail</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-10 mx-auto">
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 m-2">
                                CodePen
                            </button>
                        </Link>
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 m-2">
                                GitHub
                            </button>
                        </Link>
                        <Link>
                            <button className="btn border-2 border-sky-100 bg-sky-900 p-4 rounded-2xl hover:bg-sky-950 m-2">
                                Behance
                            </button>
                        </Link>
                    </div>

                    <div className="block my-10">
                        <div className="flex flex-col items-start ml-12 mb-5 max-xl:items-center max-xl:ml-0 max-xl:mb-10">
                            <h2 className="text-4xl">專業技能</h2>
                            <h4 className="text-2xl">Skill</h4>
                        </div>

                        <ul className="listSkill flex flex-wrap">
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                前端網頁
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                    <div className="p270"></div>
                                </div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                後端資料
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                </div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                程式開發
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                </div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                平面設計
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                    <div className="p270"></div>
                                </div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                UI/UX
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                </div>
                            </li>
                            <li className="w-1/3 p-5 flex flex-col text-center items-center mb-5">
                                設計企劃
                                <div className="circle">
                                    <div className="p90"></div>
                                    <div className="p180"></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="block my-10">
                        <div className="flex flex-col items-start ml-12 mb-5 max-xl:items-center max-xl:ml-0 max-xl:mb-10">
                            <h2 className="text-4xl">專業工具</h2>
                            <h4 className="text-2xl">Tool</h4>
                        </div>

                        <ul className="listSkill flex flex-col max-xl:mx-20 max-md:mx-5 ">
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                Illustrate
                                <div className="bar">
                                    <div className="value w-[90%]"></div>
                                </div>
                            </li>
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                PhotoShop
                                <div className="bar">
                                    <div className="value w-[50%]"></div>
                                </div>
                            </li>
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                Python
                                <div className="bar">
                                    <div className="value w-[60%]"></div>
                                </div>
                            </li>
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                JavaScript
                                <div className="bar">
                                    <div className="value w-[90%]"></div>
                                </div>
                            </li>
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                React
                                <div className="bar">
                                    <div className="value w-[80%]"></div>
                                </div>
                            </li>
                            <li className="w-full py-2 flex justify-between ml-12 max-xl:mx-0 items-center mb-5">
                                NodeJS
                                <div className="bar">
                                    <div className="value w-[50%]"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                <article className="w-2/3 h-fit max-xl:w-full overflow-hidden ">
                    <div className="doc h-52 w-full ml-40  rounded-ss-full absolute max-xl:w-3/4 max-xl:right-0"></div>

                    <main className="mt-60 ml-40 max-xl:ml-0 max-xl:text-center ">
                        <h2 className="text-4xl">自我介紹</h2>
                        <h4 className="text-2xl mb-5 max-xl:mb-10">
                            Self Introduce
                        </h4>

                        <p className="text-[18px] tracking-wider leading-8">
                            我來自中壢，畢業於中原大學商業設計系，具備良好的設計基礎與美感素養。課餘喜歡閱讀與聽音樂，這些興趣為我的創作帶來靈感。畢業後，我曾任職於全聯超商，期間因接觸
                            YouTube 頻道「GrandmaCan -
                            我阿嬤都會」而啟發了我對程式開發的興趣。
                            <br />
                            回想大學所學的網頁課程，我重新拾起並進一步自學前端技術，包含
                            HTML5、CSS3、JavaScript 及
                            React。雖尚無相關實務經驗，但我學習動機強烈，樂於挑戰並持續成長。
                            <br />
                            我期望結合設計與開發能力，創造出兼具美感與功能性的數位產品，帶給使用者更好的體驗。未來，我希望成為能獨當一面的開發者，持續在這條路上前進。
                        </p>
                    </main>

                    <section className="mt-15 ml-40 max-xl:ml-0 ">
                        <div className="max-xl:text-center">
                            <h2 className="text-4xl">經歷&學習</h2>
                            <h4 className="text-2xl mb-10 max-xl:mb-16">
                                Experience&Learning
                            </h4>
                        </div>
                        <ul className="listExp flex flex-col max-xl:w-[48%] max-xl:mx-auto max-lg:w-fit">
                            <li className="year">
                                2017 初入大學
                                <ul>
                                    <li>初學Adobe</li>
                                </ul>
                            </li>
                            <li className="year">
                                2018 二元學習
                                <ul>
                                    <li>初學HTML</li>
                                </ul>
                            </li>
                            <li className="year">
                                2019 三思而行
                                <ul>
                                    <li>學習影片</li>
                                    <li>初次實習</li>
                                </ul>
                            </li>
                            <li className="year">
                                2020 四分各地
                                <ul>
                                    <li>畢業製作</li>
                                </ul>
                            </li>
                            <li className="year">
                                2021 五年一閃
                                <ul>
                                    <li>進入全聯</li>
                                </ul>
                            </li>
                            <li className="year">
                                2022 六定心神
                                <ul>
                                    <li>Grandma</li>
                                    <li>初學Python</li>
                                    <li>Hahow學習</li>
                                    <li>JS學習</li>
                                </ul>
                            </li>
                            <li className="year">
                                2023 七上八下
                                <ul>
                                    <li>初學Vue</li>
                                    <li>Udemy學習</li>
                                    <li>Git學習</li>
                                </ul>
                            </li>
                            <li className="year">
                                2024 八字未撇
                                <ul>
                                    <li>React學習</li>
                                    <li>NodeJs學習</li>
                                    <li>Python學習</li>
                                </ul>
                            </li>
                            <li className="year">
                                2025 九轉乾坤
                                <ul>
                                    <li>參加前端班</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </article>
            </section>
        </>
    )
}

export default Resume
