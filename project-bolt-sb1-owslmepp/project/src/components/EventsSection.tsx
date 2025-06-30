import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const EventsSection: React.FC = () => {
  const mockEvents = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Deep House Sessions',
      date: '15 de Fevereiro, 2025',
      time: '22:00',
      location: 'Club Atmosphere, São Paulo',
      price: 'R$ 80'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Afro House Festival',
      date: '22 de Fevereiro, 2025',
      time: '20:00',
      location: 'Arena Cultural, Rio de Janeiro',
      price: 'R$ 120'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Underground Night',
      date: '01 de Março, 2025',
      time: '23:00',
      location: 'Warehouse Club, Belo Horizonte',
      price: 'R$ 60'
    }
  ];

  return (
    <section className="py-20 px-4 bg-texture-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Próximos <span className="text-primary-500">Eventos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubra os melhores eventos de House e Afro House. 
            Experiências únicas que conectam música, cultura e energia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event, index) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              price={event.price}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105">
            Ver Todos os Eventos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;