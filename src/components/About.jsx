import { motion } from 'framer-motion';
import { personalInfo, experience } from '../constants/data';
import { MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have successfully delivered multiple projects including healthcare platforms, e-commerce solutions, and content management systems. My focus is on writing clean, maintainable code and creating seamless user experiences.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-600 dark:border-primary-400"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {exp.position}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

