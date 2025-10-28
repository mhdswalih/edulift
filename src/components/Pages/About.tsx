import Navbar from "../Navbar/Navbar"
import { motion } from 'framer-motion'
import Footer from "../Footer/Footer"
import mainIMg from '../../assets/Img/entrepreneurs-meeting-office.jpg'
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
            <div className="fixed top-0 left-0 z-50 w-full">
                <div className="max-w-5xl mx-auto">
                    <Navbar />
                </div>
            </div>

            {/* Hero Section - starts right under navbar */}
            <div className="">
                {/* Hero Section */}
                <div className="relative -mt-16">
                    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden pt-16">
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
                                    className="rounded-lg w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Our mission is to deliver high-quality educational support to learners at every stage of their academic career—from coaching and tuition to degrees, post-graduation, NIOS, PhD, and MBA programs etc.
                                    By offering affordable and flexible learning options, we ensure that students of all backgrounds have the opportunity to achieve their educational goals. At EDULIFT, we are dedicated to fostering intellectual growth,
                                    critical thinking, and personal development, enabling our students to thrive in a rapidly evolving world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                            <div className="flex-1 w-full">
                                <img
                                    src={whyUs}
                                    alt="Expert teachers"
                                    className="rounded-lg w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose EduLift?</h2>
                                <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                                    We provide a nurturing environment where students thrive academically and personally through our comprehensive educational approach. Our commitment to excellence and personalized attention sets us apart.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-700 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold mt-1">✓</span>
                                        <span><strong className="text-gray-900">Expert Certified Teachers</strong> - Highly qualified educators with years of experience</span>
                                    </li>
                                    <li className="flex items-start text-gray-700 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold mt-1">✓</span>
                                        <span><strong className="text-gray-900">Creative Learning Methods</strong> - Innovative teaching techniques for better understanding</span>
                                    </li>
                                    <li className="flex items-start text-gray-700 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold mt-1">✓</span>
                                        <span><strong className="text-gray-900">Safe Learning Environment</strong> - A secure and supportive atmosphere for growth</span>
                                    </li>
                                    <li className="flex items-start text-gray-700 text-base md:text-lg">
                                        <span className="text-green-500 mr-3 text-xl font-bold mt-1">✓</span>
                                        <span><strong className="text-gray-900">Personalized Attention</strong> - Individual focus to maximize each student's potential</span>
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
                                    className="rounded-lg w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
                                <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                                    We offer comprehensive educational services designed to meet the unique needs of every student. From foundational learning to advanced programs, we provide the support needed to help them achieve their full potential and excel in their academic journey.
                                </p>
                                <div className="space-y-5">
                                    <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
                                        <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Academic Programs</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">Comprehensive curriculum covering all grade levels with a focus on conceptual clarity and practical application. Our structured approach ensures steady progress and deep understanding.</p>
                                    </div>
                                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow duration-300">
                                        <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Skill Development</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">Holistic development programs focusing on communication, critical thinking, and leadership skills. We nurture well-rounded individuals prepared for future challenges.</p>
                                    </div>
                                    <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-300">
                                        <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Career Guidance</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">Professional counseling and strategic career planning to help students make informed decisions. Our expert guidance opens doors to exciting opportunities.</p>
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