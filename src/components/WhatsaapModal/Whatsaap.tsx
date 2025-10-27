import { IoClose } from 'react-icons/io5'
import { motion, type Variants } from 'framer-motion'
import { ImWhatsapp } from 'react-icons/im'

interface WhatsappModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Whatsapp = ({ isOpen, onClose }: WhatsappModalProps) => {
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    }

    const handleWhatsAppClick = (phoneNumber: string) => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank')
        onClose() // Close modal after clicking
    }

    // Don't render anything if modal is not open
    if (!isOpen) return null

    return (
        <div>
            {/* WhatsApp Modal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose} // Use the onClose prop
            >
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose} // Use the onClose prop
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <IoClose className="text-2xl" />
                    </button>

                    {/* Modal Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <ImWhatsapp className="text-3xl text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Contact Us on WhatsApp
                        </h3>
                        <p className="text-gray-600">
                            Choose your preferred contact number
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="space-y-4">
                        {/* India Contact */}
                        <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleWhatsAppClick('919876543210')}
                            className="w-full p-4 bg-linear-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 text-left group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl">🇮🇳</span>
                                        <span className="font-semibold text-gray-900">India</span>
                                    </div>
                                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                                </div>
                                <ImWhatsapp className="text-2xl text-green-600 group-hover:scale-110 transition-transform" />
                            </div>
                        </motion.button>

                        {/* UAE Contact */}
                        <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleWhatsAppClick('971501234567')}
                            className="w-full p-4 bg-linear-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 text-left group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl">🇦🇪</span>
                                        <span className="font-semibold text-gray-900">UAE</span>
                                    </div>
                                    <p className="text-sm text-gray-600">+971 50 123 4567</p>
                                </div>
                                <ImWhatsapp className="text-2xl text-green-600 group-hover:scale-110 transition-transform" />
                            </div>
                        </motion.button>
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        Click on a number to start chatting on WhatsApp
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Whatsapp