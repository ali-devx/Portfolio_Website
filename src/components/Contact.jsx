import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../constants/data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 text-center group"
          >
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors">
              <Mail className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors mx-auto" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm break-all">{personalInfo.email}</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full w-16 h-16 mx-auto mb-4">
              <MapPin className="text-primary-600 dark:text-primary-400 mx-auto" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{personalInfo.location}</p>
          </motion.div>

          <motion.a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 text-center group"
          >
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors">
              <Github className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors mx-auto" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">View my projects</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={`mailto:${personalInfo.email}?subject=Portfolio Contact`}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            <span>Send me an email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
