import { useState } from 'react'
import Resume from '../../components/About/Resume'
// import { Link } from 'react-router-dom'

const About = () => {
    const [resumeState, setResumeState] = useState(false)

    return (
        <>
            <h1 className="mt-[6rem] mb-10 flex justify-center items-center text-6xl tracking-wide">
                關於我
            </h1>
            <nav className="text-center text-3xl mx-auto sticky top-[4rem] z-50">
                <ul className="flex justify-center bg-[#111]  py-3">
                    <button
                        // to="/about"
                        className="px-2 mx-10 cursor-pointer"
                        onClick={() => setResumeState(false)}
                    >
                        自我介紹
                    </button>
                    <button
                        // to="/about?resume"
                        className="px-2 mx-10 cursor-pointer"
                        onClick={() => setResumeState(true)}
                    >
                        履歷
                    </button>
                </ul>
            </nav>

            {!resumeState && <h1>About ME</h1>}
            {resumeState && <Resume />}
        </>
    )
}

export default About
