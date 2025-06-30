import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Festas', href: '#festas' },
    { label: 'Festivais', href: '#festivais' },
    { label: 'Meus Ingressos', href: '#ingressos' },
    { label: 'Contato', href: '#contato' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-dark-900/98 backdrop-blur-xl border-b border-primary-500/30 shadow-2xl shadow-primary-500/10' 
            : 'bg-dark-900/95 backdrop-blur-md border-b border-primary-600/20'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left relative">
              <motion.h1 
                className="text-2xl font-bold text-white tracking-wider relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="bg-bronze-gradient bg-clip-text text-transparent relative">
                  TKTA
                  <motion.div
                    className="absolute -inset-1 bg-bronze-gradient opacity-20 blur-lg"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="text-xs text-gray-300 font-light tracking-wide -mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                BILHETERIA DIGITAL
              </motion.p>
            </div>
          </motion.div>
          
          <motion.button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-primary-500 transition-all duration-300 relative group"
            aria-label="Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-primary-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            
            <motion.nav
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 z-50 shadow-2xl border-l border-primary-500/30"
            >
              <div className="flex flex-col h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-bronze-gradient rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500 rounded-full blur-2xl" />
                </div>

                <div className="flex items-center justify-between p-6 border-b border-primary-600/30 relative z-10">
                  <motion.div 
                    className="text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-xl font-bold text-white tracking-wider relative">
                      <span className="bg-bronze-gradient bg-clip-text text-transparent">
                        TKTA
                      </span>
                      <motion.div
                        className="absolute -inset-1 bg-bronze-gradient opacity-10 blur-md"
                        animate={{ 
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </h2>
                    <p className="text-xs text-gray-300 font-light tracking-wide -mt-1">
                      BILHETERIA DIGITAL
                    </p>
                  </motion.div>
                  <motion.button
                    onClick={toggleMenu}
                    className="p-2 text-white hover:text-primary-500 transition-all duration-300 relative group"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-primary-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <X size={20} />
                  </motion.button>
                </div>
                
                <div className="flex-1 py-8 relative z-10">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                      onClick={toggleMenu}
                      className="block px-6 py-4 text-white hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300 font-medium relative group"
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-bronze-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                
                <motion.div 
                  className="p-6 border-t border-primary-600/30 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    A TKTA é a sua conexão com o som da liberdade. 
                    House e AfroHouse em todo o Brasil.
                  </p>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;