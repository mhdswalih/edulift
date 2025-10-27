import React from 'react';
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { Baby, BookOpen, GraduationCap, Briefcase, Trophy } from 'lucide-react';

interface EducationStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const EducationPathway: React.FC = () => {
  const educationSteps: EducationStep[] = [
    {
      number: "5.",
      title: "REWARDING CAREER",
      description: "Launch your professional journey with confidence and the skills to excel in your chosen field.",
      icon: <Trophy className="w-8 h-8" />,
      details: [
        "Secure meaningful employment in your field of expertise",
        "Apply learned skills to real-world challenges",
        "Continuous professional development and growth opportunities",
        "Build a successful and fulfilling career path"
      ]
    },
    {
      number: "4.",
      title: "SKILL DEVELOPMENT & INTERNSHIPS",
      description: "Gain practical experience and refine your abilities through hands-on learning and professional exposure.",
      icon: <Briefcase className="w-8 h-8" />,
      details: [
        "Industry-relevant internships and apprenticeships",
        "Specialized skill training and certifications",
        "Networking with professionals and mentors",
        "Bridge the gap between education and employment"
      ]
    },
    {
      number: "3.",
      title: "VOCATIONAL & HIGHER EDUCATION",
      description: "Pursue specialized knowledge and advanced qualifications tailored to your career aspirations.",
      icon: <GraduationCap className="w-8 h-8" />,
      details: [
        "University degrees, diplomas, and professional courses",
        "Technical and vocational training programs",
        "Research opportunities and academic excellence",
        "Develop expertise in your chosen discipline"
      ]
    },
    {
      number: "2.",
      title: "PRIMARY & SECONDARY SCHOOL",
      description: "Build strong foundational knowledge and develop critical thinking skills for future success.",
      icon: <BookOpen className="w-8 h-8" />,
      details: [
        "Comprehensive curriculum covering core subjects",
        "Development of literacy, numeracy, and analytical skills",
        "Extracurricular activities and character building",
        "Preparation for higher education pathways"
      ]
    },
    {
      number: "1.",
      title: "EARLY EDUCATION",
      description: "Begin your learning journey with nurturing environments that foster curiosity and foundational development.",
      icon: <Baby className="w-8 h-8" />,
      details: [
        "Preschool and kindergarten programs",
        "Social and emotional development",
        "Basic cognitive and motor skills",
        "Introduction to structured learning environments"
      ]
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-20 bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Pathway
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your complete journey from early education to rewarding career
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-amber-400 to-orange-500 transform -translate-x-1/2 z-0"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8 relative z-10"
          >
            {educationSteps.map((step, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="flex items-start gap-6 group cursor-pointer"
              >
                {/* Number circle with icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-600 transition-all duration-300 relative"
                >
                  <span className="text-xl font-bold text-amber-600 group-hover:text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-amber-500 group-hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 flex-1">
                      {step.title}
                    </h3>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    {step.description}
                  </motion.p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPathway;