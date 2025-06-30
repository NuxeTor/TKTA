import React from 'react';
import { Instagram, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-dark-900 via-dark-800 to-dark-900 border-t border-primary-600/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-bronze-gradient rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-500 rounded-full blur-2xl" />
      </div>
      
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Logo e Descrição */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left relative">
              <motion.h2 
                className="text-3xl font-bold text-white tracking-wider mb-2 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="bg-bronze-gradient bg-clip-text text-transparent relative">
                  TKTA
                  <motion.div
                    className="absolute -inset-2 bg-bronze-gradient opacity-20 blur-xl"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-300 font-light tracking-wide mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                BILHETERIA DIGITAL
              </motion.p>
            </div>
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              A TKTA é a sua conexão com o som da liberdade. 
              House e AfroHouse em todo o Brasil.
            </motion.p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4 relative">
              Links Rápidos
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-bronze-gradient" />
            </h3>
            <ul className="space-y-2">
              {['Política de Privacidade', 'Termos de Uso', 'Contato', 'Sobre Nós', 'FAQ'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-primary-500 transition-all duration-300 text-sm relative group inline-block"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative z-10">{link}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4 relative">
              Siga-nos
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-bronze-gradient" />
            </h3>
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="#" 
                className="bg-dark-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-300 relative group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-bronze-gradient opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-dark-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-300 relative group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-bronze-gradient opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                <Music size={20} />
              </motion.a>
            </div>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              @tkta_oficial
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-primary-600/30 mt-8 pt-8 text-center relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-bronze-gradient" />
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 TKTA - Bilheteria Digital. Todos os direitos reservados.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;