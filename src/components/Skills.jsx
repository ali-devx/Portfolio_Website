import { motion } from 'framer-motion';
import { 
  FileCode, 
  Palette, 
  Box, 
  Code2, 
  Atom, 
  Sparkles, 
  Database, 
  Server, 
  CircleDot, 
  GitBranch, 
  Github 
} from 'lucide-react';
import { skills } from '../constants/data';

// Icon mapping
const iconMap = {
  FileCode,
  Palette,
  Box,
  Code2,
  Atom,
  Sparkles,
  Database,
  Server,
  CircleDot,
  GitBranch,
  Github,
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -8, rotate: 2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group cursor-pointer"
            >
              <motion.div 
                className="mb-4 text-center flex justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {(() => {
                  const IconComponent = iconMap[skill.icon];
                  return IconComponent ? (
                    <IconComponent 
                      size={48} 
                      className="text-primary-600 dark:text-primary-400"
                    />
                  ) : null;
                })()}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 text-center mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden shadow-inner">
                <motion.div
                  className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 h-3 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                />
              </div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 text-center">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

