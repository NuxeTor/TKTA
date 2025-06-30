import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  image, 
  title, 
  date, 
  time, 
  location, 
  price, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-dark-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:scale-105 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-300 text-sm">
            <Calendar size={16} className="mr-2 text-primary-500" />
            {date}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Clock size={16} className="mr-2 text-primary-500" />
            {time}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <MapPin size={16} className="mr-2 text-primary-500" />
            {location}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="flex-1 bg-bronze-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Comprar
          </button>
          <button className="px-4 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300">
            Detalhes
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;