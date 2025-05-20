import { easeInOut, motion, useAnimation } from 'framer-motion'
const Video = () => {
    const controls = useAnimation()

    return (
        <>
            <section className="flex flex-col items-center gap-16 justify-center py-20">
                <div
                    className="w-[60%] h-[30vh] rounded-full bg-blue-700 relative overflow-hidden"
                    onMouseEnter={() => controls.start('hover')}
                    onMouseLeave={() => controls.start('rest')}
                >
                    <motion.img
                        src="/img/IMG_002.jpg"
                        alt=""
                        className="absolute h-full w-[40%] rounded-full border-l-0 z-10"
                        initial="rest"
                        animate={controls}
                        variants={{
                            rest: { x: 0 },
                            hover: { x: '150%' }, // 往右移動整個寬度
                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                    />
                    <motion.div
                        className="absolute bg-blue-950 rounded-full h-full w-[100%]"
                        initial="rest"
                        animate={controls}
                        variants={{
                            rest: { x: '-60%' },
                            hover: { x: '0%' }, // 往右移動整個寬度
                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                    >
                        123
                    </motion.div>
                    <h1>123</h1>
                </div>

                <div className=" w-[60%] h-[30vh] border-4 rounded-full">
                    <img
                        src="/img/IMG_004.jpg"
                        className="h-full w-[40%] rounded-full border-4 border-l-0 bg-contain"
                        alt=""
                    />
                </div>
            </section>
        </>
    )
}

export default Video
