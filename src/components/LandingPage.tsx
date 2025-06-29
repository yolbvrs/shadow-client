import { Button } from '@/components/ui/button';
import { MapContainer, TileLayer } from 'react-leaflet';

interface LandingPageProps {
  onRequestClick: () => void;
}

const LandingPage = ({ onRequestClick }: LandingPageProps) => {
  return (
    <div className="relative min-h-screen">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        zoomControl={false}
        touchZoom={false}
        className="absolute inset-0 z-0 grayscale"
        attributionControl={false}
      >
        <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
      </MapContainer>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl md:text-9xl font-bold mb-4 tracking-wider">
          SHADOW
        </h1>
        <p className="text-white text-2xl md:text-3xl font-light mb-8 tracking-wide">
          The Security Marketplace
        </p>
        <Button
          onClick={onRequestClick}
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-xl font-semibold"
        >
          REQUEST
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;