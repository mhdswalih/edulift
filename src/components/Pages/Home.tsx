import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import mainImg from '../../assets/Img/kids-being-part-sunday-school.jpg'
import Footer from "../Footer/Footer"
import { ImWhatsapp } from 'react-icons/im'

import EducationPathwayVertical from './Roadmap'
import { useNavigate } from 'react-router-dom'
import Whatsaap from '../WhatsaapModal/Whatsaap'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    }

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    }

    return (
        <div>
            <div className="relative">
                {/* Sticky Navbar */}
                <div className="sticky top-0 left-0 z-20 w-full">
                    <div className="max-w-5xl mx-auto">
                        <Navbar />
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative flex justify-center items-center h-screen -mt-24">
                    {/* Background Image */}
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={mainImg}
                        alt="Hero"
                    />
                    
                    {/* Dark Overlay/Fog Effect */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70 z-10"
                    />
                    
                    {/* Hero Content */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
                    >
                        <motion.h1 
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            Empowering Young Minds
                        </motion.h1>
                        <motion.p 
                            variants={fadeInUp}
                            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light"
                        >
                            Quality education that inspires curiosity and builds confidence
                        </motion.p>
                        <motion.div 
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <motion.button 
                                onClick={() => setIsModalOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </motion.button>
                            <motion.button 
                                onClick={() => navigate('/about')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300"
                            >
                                About Us
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    
                    {/* Decorative Line */}
                    <motion.hr 
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "200px", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute bottom-10 max-w-[200px] left-1/2 transform -translate-x-1/2 border-t-2 border-amber-400 z-10" 
                    />
                </section>
            </div>

            {/* Content Section */}
            <section className='bg-white w-full py-20'>
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose EduLift?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide a nurturing environment where children thrive academically and personally
                        </p>
                    </motion.div>
                    
                    {/* Feature Cards */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div 
                            variants={scaleIn}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6"
                            >
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Teachers</h3>
                            <p className="text-gray-600">Qualified educators dedicated to your child's success</p>
                        </motion.div>
                        
                        <motion.div 
                            variants={scaleIn}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6"
                            >
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Learning</h3>
                            <p className="text-gray-600">Innovative methods that make learning fun and engaging</p>
                        </motion.div>
                        
                        <motion.div 
                            variants={scaleIn}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6"
                            >
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe Environment</h3>
                            <p className="text-gray-600">A secure and supportive space for every student</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
              <EducationPathwayVertical />
            {/* WhatsApp Floating Button */}
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-300"
                >
                    <ImWhatsapp className="text-3xl" />
                </motion.button>
            </motion.div>
           <Whatsaap
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}

           />
           

            <Footer />
        </div>
    )
}

export default Home