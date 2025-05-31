import { motion } from 'framer-motion'
import profileImage from '../assets/profile.png'
import ThemeController from './UI/ThemeController'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className='w-full h-screen flex flex-col items-center justify-center p-10 relative'
        >

            <ThemeController />
            <div className="w-[90%] lg:h-1/2 text-center flex flex-col lg:flex-row justify-center items-center">
                <div className='w-2/3 h-full flex justify-center items-center'>
                    <p className='w-full text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 mx-5 lg:leading-20'>
                        Passionate developer dedicated to turning ideas&nbsp;<span className='animate-pulse glow'>💡</span>&nbsp;into stunning digital experiences.
                    </p>
                </div>
                <div className='w-1/3 h-full flex flex-col justify-center items-center gap-4'>
                    <img
                        src={profileImage}
                        alt="Profile"
                        className='size-64 md:size-80 lg:h-full lg:w-full object-cover object-top profileGlow hover:scale-105 transition-all duration-300'
                    />
                    <h1 className='text-base-content text-2xl lg:flex justify-end items-center font-light flex gap-2 hover:scale-105 lg:hover:scale-100 duration-150 hover:text-primary'>
                        <span className='underline underline-offset-8 dancing-script'>Shreekant</span>
                        <span className='underline underline-offset-8 dancing-script'>Deepak</span>
                        <span className='underline underline-offset-8 dancing-script'>Swami</span>
                    </h1>
                </div>
            </div>
            <br />
            <br className='hidden lg:block' />
            <div className='relative'>

                <small className="text-base-content block mb-8 lg:text-xl hover:scale-105 duration-150">
                    Ready to make magic happen with you!
                </small>
                <div className="absolute -bottom-10  w-full  flex  justify-center gap-3 container">
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blogs</Link>
                </div>

            </div>
        </motion.section>
    )
}

export default Home
