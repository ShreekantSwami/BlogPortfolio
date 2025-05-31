import { motion } from 'framer-motion'
import ThemeController from './UI/ThemeController'
import profileImage from '../assets/NormalImage.jpeg'
import { Backpack, Building2, Building2Icon, GraduationCap } from 'lucide-react'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className='w-full min-h-screen flex flex-col items-center px-4 py-8 gap-4'
            style={{ padding: "10px" }}
        >
            <ThemeController />
            <div className='w-full container  flex flex-col justify-center gap-4 bg-base-200 rounded-lg shadow-lg p-6' style={{ padding: '10px' }}>

                <h1 className='text-xl md:text-2xl text-base-content '>From visual concepts to functional code!</h1>
                <p className=' md:text-base text-xs leading-7'>Specializing in frontend development with React Js and Next.js. I have a strong passion for creating dynamic and responsive web applications. In addition to my frontend skills, I have experience in backend development using Node.js, JavaScript, and Java.</p>
                <p className=' md:text-base text-xs leading-7'>Alongside my development skills, I also have experience in UI design using Figma, which allows me to create visually appealing and user-friendly interfaces.</p>
            </div>

            <section className="w-full container text-gray-600">
                <div className="flex flex-col lg:flex-row justify-between px-2 md:px-8 py-12 gap-8">
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                        <img
                            alt="profile"
                            className="object-cover w-[80%] rounded-lg shadow-xl"
                            src={profileImage}
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 justify-center items-center gap-10 lg:w-1/2 text-center lg:text-left" style={{ padding: '5px' }}>
                        <div className="flex flex-col items-center lg:items-start gap-4 rounded-lg shadow shadow-base hover:shadow-primary bg-base-200 hover:scale-105 duration-150"
                            style={{ padding: '15px' }}>
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 shadow-md">
                                <GraduationCap />
                            </div>
                            <h2 className="text-base-content text-lg font-medium mb-2">Master in Science (Computer&nbsp;Science) </h2>
                            <p className="leading-relaxed text-base">Rajarshi Shahu Mahavidyala Autonomous, Latur</p>
                            <p className="leading-relaxed text-base">7.02 CGPA</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-4 rounded-lg shadow shadow-base hover:shadow-primary bg-base-200 hover:scale-105 duration-150"
                            style={{ padding: '15px' }}>
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 shadow-md">
                                <Building2 />
                            </div>
                            <h2 className="text-base-content text-lg font-medium mb-2">Bachelor in Science (Computer&nbsp;Science) </h2>
                            <p className="leading-relaxed text-base">Rajarshi Shahu Mahavidyala Autonomous, Latur</p>
                            <p className="leading-relaxed text-base">8.02 CGPA</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-4 rounded-lg shadow shadow-base hover:shadow-primary bg-base-200 hover:scale-105 duration-150"
                            style={{ padding: '15px' }}>
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 shadow-md">
                                {/* <GraduationCap /> */}
                                <Building2Icon />
                            </div>
                            <h2 className="text-base-content text-lg font-medium mb-2">HSC </h2>
                            <p className="leading-relaxed text-base">College Of Computer Science & Information Technology, Latur</p>
                            <p className="leading-relaxed text-base">65.23%</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-4 rounded-lg shadow shadow-base hover:shadow-primary bg-base-200 hover:scale-105 duration-150"
                            style={{ padding: '15px' }}>
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 shadow-md">
                                <Backpack />                            </div>
                            <h2 className="text-base-content text-lg font-medium mb-2">SSC </h2>
                            <p className="leading-relaxed text-base">B.Wale New English Medium School, Latur</p>
                            <p className="leading-relaxed text-base">71.80%</p>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    )
}
export default About
