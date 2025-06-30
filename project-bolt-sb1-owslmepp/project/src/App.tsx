import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <HeroBanner />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;