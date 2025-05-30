import { motion } from 'framer-motion'
import ThemeController from './UI/ThemeController';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className='w-full h-screen flex flex-col items-center  relative gap-4'
            style={{ padding: '10px' }}
        >
            <ThemeController />
            <div className='container flex flex-col justify-center gap-4 bg-base-300 rounded-lg shadow-accent-content' style={{ padding: '20px' }}>
                <h1 className='text-2xl'>From visual concepts to functional code!</h1>
                <p className='text-md '>Specializing in frontend development with React Js and Next.js. I have a strong passion for creating dynamic and responsive web applications. In addition to my frontend skills, I have experience in backend development using Node.js, JavaScript, and Java.</p>
            </div>
            <div className='container flex flex-col justify-center gap-4 bg-base-300 rounded-lg shadow-accent-content' style={{ padding: '20px' }}>
                <p className='text-md'>Alongside my development skills, I also have experience in UI design using Figma, which allows me to create visually appealing and user-friendly interfaces.</p>
            </div>

        </motion.div>
    )
}
export default About;