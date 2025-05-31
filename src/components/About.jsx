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
            {/* <div className='w-full container  flex flex-col border justify-center gap-4 bg-base-200 rounded-lg shadow-lg p-6' style={{ padding: '10px' }}>

                <h1 className='text-xl md:text-2xl text-base-content '>From visual concepts to functional code!</h1>
                <p className=' md:text-base text-xs leading-7'>Specializing in frontend development with React Js and Next.js. I have a strong passion for creating dynamic and responsive web applications. In addition to my frontend skills, I have experience in backend development using Node.js, JavaScript, and Java.</p>
                <p className=' md:text-base text-xs leading-7'>Alongside my development skills, I also have experience in UI design using Figma, which allows me to create visually appealing and user-friendly interfaces.</p>
            </div> */}

            <section className="w-full container text-gray-600">
                <h1 className='text-primary text-4xl lg:text-6xl underline underline-offset-8' style={{ padding: '10px', margin: "0 0 15px 0" }}>About:</h1>
                <div className="flex flex-col lg:flex-row justify-between px-2 md:px-8 py-12 gap-8">
                    <div className="lg:w-1/2 w-full flex justify-center">
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
            <br className='hidden lg:block' />
            <section class="text-gray-600 body-font overflow-hidden">
                <h1 className='text-primary text-4xl lg:text-6xl underline underline-offset-8' style={{ padding: '10px', margin: "0 0 15px 0" }}>Experience:</h1>
                <br className='hidden lg:block' />

                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-base-content leading-10 lg:leading-10">0.6 years</span>
                                <span class="mt-1 text-sm">( 1 Oct 2024 - 31 April 2025 )</span>
                            </div>
                            <div class="md:flex-grow ">
                                <h2 class="text-xl lg:text-2xl font-medium text-base-content title-font mb-2 leading-10 lg:leading-10"> Software Developer Intern</h2>
                                <h3 class="text-sm lg:text-xl font-medium  title-font mb-2">OMBASE Limited. Pune, India</h3>

                                <ul className='text-sm leading-8'>
                                    <li className='flex items-center gap-2'>
                                        <p>-</p>
                                        <p>Developed and deployed three interdependent full-stack web applications focused on product creation and configuration using MongoDB, Express.js, React.js, and Node.js.</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <p>-</p>
                                        <p>Applications were hosted and managed on a VPS server, including setup and deployment responsibilities.</p>
                                    </li>                                    <li className="flex items-center gap-2">
                                        <p>-</p>
                                        <p>Gained hands-on experience in RESTful API development, component-based front-end design, and database integration.</p>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <p>-</p>
                                        <p>Strengthened practical skills in full-stack development, problem-solving, and end-to-end project delivery.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br className="lg:block" />
                        <hr className='outline-none border-none h-[3px] bg-base-300' />
                        <br className="lg:block" />
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-base-content leading-10 lg:leading-10">1.2 years</span>
                                <span class="mt-1 text-sm">( 1 Jul 2022 - 1 Sept 2023 )</span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-xl lg:text-2xl font-medium  title-font mb-2 text-base-content leading-10 lg:leading-10">Software Developer</h2>
                                <h3 class="text-sm lg:text-xl font-medium  title-font mb-2">Sagitec Solutions Pvt. Ltd. - Pune, India</h3>
                                <ul className='text-sm leading-8'>
                                    <li className='flex items-center gap-2'>
                                        <p>-</p>
                                        <p> Worked on enterprise pension management systems using C# within a .NET environment.</p>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <p>-</p>
                                        <p>Contributed to system enhancements, debugging, and maintenance tasks in collaboration with cross-functional teams.</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <br className="lg:block" />
                        <hr className='outline-none border-none h-[3px] bg-base-300' />
                        <br className="lg:block" />
                    </div>
                </div>
            </section>
        </motion.div >
    )
}
export default About
