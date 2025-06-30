import { Button } from '@/components/ui/button';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingOverlay from './LoadingOverlay';

interface LandingPageProps {
  onRequestClick: () => void;
}

const LandingPage = ({ onRequestClick }: LandingPageProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      onRequestClick();
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading, onRequestClick]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="relative min-h-screen">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        className="absolute inset-0 z-0"
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <div className="absolute top-4 right-4 z-20 flex gap-4">
        <Link to="/login" className="text-white font-semibold">
          Log In
        </Link>
        <Link to="/signup" className="text-white font-semibold">
          Sign Up
        </Link>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl md:text-9xl font-bold mb-4 tracking-wider">
          SHADOW
        </h1>
        <p className="text-white text-2xl md:text-3xl font-light mb-8 tracking-wide">
          The Security Marketplace
        </p>
        <Button
          onClick={handleClick}
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-xl font-semibold"
        >
          REQUEST
        </Button>
      </div>
      <LoadingOverlay show={loading} />
    </div>
  );
};

export default LandingPage;