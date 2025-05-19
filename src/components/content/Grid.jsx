import { motion } from 'motion/react'

import GridContent from '../../../public/grid'

const Grid = () => {
    return (
        <>
            <div className="wrapper h-lvh bg-blue-900 max-xl:h-full pb-4">
                {GridContent.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`item item${item.id} group relative`}
                        variants={{
                            rest: {},
                            hover: {
                                backgroundColor: '#0a1d97',
                                scale: 0.95,
                            },
                        }}
                        exit={{ x: -10 }}
                        transition={5}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        onMouseEnter={() => {
                            console.log(item.hoverText)
                        }}
                        // transition={{ duration: 0.3 }}
                        // whileTap={{ backgroundColor: '#eee' }}
                        // onHoverStart={() => setIsHover(item.id)}
                        // onHoverEnd={() => setIsHover(null)}
                    >
                        {/* {item.defaultText} */}

                        <div
                            className={`inset-0 flex items-center justify-center ${item.class} opacity-100 group-hover:opacity-0 transition-opacity duration-500`}
                        >
                            {item.defaultText}
                        </div>
                        <motion.p
                            variants={{
                                rest: { opacity: 0 },
                                hover: { opacity: 1 },
                            }}
                            initial="rest"
                            animate="rest"
                            whileHover="hover"
                            exit={{ opacity: 0 }} // 在元素離開 hover 時不需要延遲
                            transition={{
                                opacity: {
                                    duration: 0.5, // 進入動畫時間
                                    ease: 'easeInOut',
                                },
                                when: 'beforeChildren',
                            }}
                            className="absolute inset-0 flex items-center justify-center z-50 p-3 text-3xl max-xl:text-2xl max-md:text-[1.5rem] "
                        >
                            {item.hoverText.split('\n').map((line, index) => (
                                <motion.span
                                    key={index}
                                    className="block mb-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        delay: 0.5 * index,
                                        opacity: { duration: 0.5 }, // entrance
                                        y: { duration: 0.3 },
                                    }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </motion.p>

                        {/* {isHover == item.id ? item.hoverText : item.defaultText} */}
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Grid

{
    /* <div
                    key={'01'}
                    className="item item01 text-[6vw] max-xl:text-[12vw] max-md:text-[12vw]"
                    
                >
                    illustrator
                </div>
                <div className="item item02 text-[14vw] max-xl:text-[7vw] max-md:text-[7vw]">
                    羅仁甫
                </div>
                <div className="item item03 text-[3vw] max-xl:text-[5vw] max-md:text-[6vw]">
                    初音未來
                </div>
                <div className="item item04 text-[6vw] max-xl:text-[15vw] max-md:text-[20vw]">
                    程式
                </div>
                <div className="item item05 text-[4vw] max-xl:text-[7vw] max-md:text-[9vw]">
                    寶可夢
                </div>
                <div className="item item06 text-[4vw] max-xl:text-[7vw] max-md:text-[9vw]">
                    遊戲王
                </div>
                <div className="item item07 text-[11vw] max-xl:text-[8vw] max-md:text-[12vw]">
                    動漫
                </div>
                <div className="item item08 text-[5vw] max-xl:text-[8vw] max-md:text-[10vw]">
                    音樂
                </div>
                <div className="item item09 text-[5vw] max-xl:text-[23vh] max-md:text-[10vw]">
                    設計
                </div>
                <div className="item item10 text-[5vw] max-xl:text-[8vw] max-md:text-[12vw]">
                    遊戲
                </div>
                <div className="item item11 text-[5vw] max-xl:text-[8vw] max-md:text-[9vw]">
                    小說
                </div>
                <div className="item item12 text-[3vw] max-xl:text-[5vw] max-md:text-[6vw]">
                    TWITCH
                </div>
                <div className="item item13 text-[7vw] max-xl:text-[12vw] max-md:text-[12vw]">
                    魔物獵人
                </div>
                <div className="item item14 text-[3vw] max-xl:text-[6vw] max-md:text-[8vw]">
                    react
                </div>
                <div className="item item15 text-[2.5vw] max-xl:text-[6vw] max-md:text-[5vw]">
                    Python
                </div>
                <div className="item item16 text-[2.5vw] max-xl:text-[6vw] max-md:text-[5vw]">
                    Premiere
                </div>
                <div className="item item17 text-[2.5vw] max-xl:text-[4vw] max-md:text-[10vw]">
                    Photoshop
                </div>
                <div className="item item18 text-[2.5vw] max-xl:text-[12vw] max-md:text-[10vw]">
                    JavaScript
                </div> */
}
