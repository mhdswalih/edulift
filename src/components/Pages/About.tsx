import Navbar from "../Navbar/Navbar"
import { motion } from 'framer-motion'
import Footer from "../Footer/Footer"
import mainIMg from '../../assets/Img/kids-being-part-sunday-school.jpg'
import ourMission from '../../assets/Img/na_feb_25.jpg'
import whyUs from '../../assets/Img/13237.jpg'
import ourServices from '../../assets/Img/21421.jpg'
import { ImWhatsapp } from "react-icons/im"
import { useState } from "react"
import Whatsapp from "../WhatsaapModal/Whatsaap"
function About() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            {/* Navbar - Fixed Position */}
            <div className="fixed top-0 left-0 z-50 w-full  ">
                <div className="max-w-5xl mx-auto">
                    <Navbar />
                </div>
            </div>

            {/* Hero Section - starts right under navbar */}
            <div className=""> {/* Adjust this value based on your navbar height */}
                {/* Hero Section */}
                <div className="relative -mt-16"> {/* Negative margin to pull image up */}
                    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden pt-16"> {/* Added pt-16 here */}
                        <img
                            src={mainIMg}
                            alt="EduLift Hero"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute top-0 inset-0 bg-opacity-40"></div>

                        {/* Text overlay on image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white px-4">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">About EduLift</h1>
                                <p className="text-lg md:text-xl drop-shadow-md">Empowering students through quality education</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 w-full">
                                <img
                                    src={ourMission}
                                    alt="Students learning"
                                    className="rounded-lg  w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                  Our mission is to deliver high-quality educational support to learners at every stage of their academic career—from coaching and tuition to degrees, post-graduation, NIOS, PhD, and MBA programs etc .
                                   By offering affordable and flexible learning options, we ensure that students of all backgrounds have the opportunity to achieve their educational goals. At EDULIFT, we are dedicated to fostering intellectual growth,
                                    critical thinking, and personal development, enabling our students to thrive in a rapidly evolving world.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                            <div className="flex-1 w-full">
                                <img
                                    src={whyUs}
                                    alt="Expert teachers"
                                    className="rounded-lg  w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose EduLift?</h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                    We provide a nurturing environment where children thrive academically and personally
                                    with our comprehensive educational approach.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                                        Expert Certified Teachers
                                    </li>
                                    <li className="flex items-center text-gray-600 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                                        Creative Learning Methods
                                    </li>
                                    <li className="flex items-center text-gray-600 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                                        Safe Learning Environment
                                    </li>
                                    <li className="flex items-center text-gray-600 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                                        Personalized Attention
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 w-full">
                                <img
                                    src={ourServices}
                                    alt="Our services"
                                    className="rounded-lg  w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                    We offer comprehensive educational services designed to meet the unique needs
                                    of every student and help them achieve their full potential.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Academic Programs</h3>
                                        <p className="text-gray-600 text-sm md:text-base">Comprehensive curriculum for all grade levels</p>
                                    </div>
                                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Skill Development</h3>
                                        <p className="text-gray-600 text-sm md:text-base">Focus on overall personality development</p>
                                    </div>
                                    <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Career Guidance</h3>
                                        <p className="text-gray-600 text-sm md:text-base">Professional counseling and career planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <Whatsapp
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About