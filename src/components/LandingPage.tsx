import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onRequestClick: () => void;
}

const LandingPage = ({ onRequestClick }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
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
  );
};

export default LandingPage;