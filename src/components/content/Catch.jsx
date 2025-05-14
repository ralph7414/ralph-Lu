import { useEffect, useState } from 'react'
import CatchPhrase from '../../../public/catchphrase'
import { AnimatePresence, motion } from 'framer-motion'

const Catch = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * CatchPhrase.length)
            setIndex(random)
        }, 5000) // 每 5 秒更新一次

        return () => clearInterval(interval)
    }, [index])

    return (
        <>
            <section className="w-full h-[60vh] bg-indigo-950 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -60, opacity: 0 }}
                        transition={{
                            x: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }, // 相當於 CSS 的 ease
                            opacity: {
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            },
                        }}
                        className="w-full"
                    >
                        <div className="text-center text-white text-6xl pt-52">
                            {CatchPhrase[index].text}
                        </div>
                        <h2 className="text-right text-4xl pr-52 pt-20 max-xl:text-center max-xl:pr-0">
                            {CatchPhrase[index].name}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </section>
        </>
    )
}

export default Catch
