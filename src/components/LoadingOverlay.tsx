import React from 'react';

interface LoadingOverlayProps {
  show: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-32 h-32 border-2 border-green-400 rounded-full animate-spin duration-[3s]" />
        <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping" />
      </div>
      <div className="space-y-2 text-lg text-center">
        <p className="opacity-0 animate-fade-in [animation-delay:0.2s]">Verifying clearance...</p>
        <p className="opacity-0 animate-fade-in [animation-delay:1s]">Establishing encrypted channel...</p>
        <p className="opacity-0 animate-fade-in [animation-delay:1.8s]">Locating elite operatives near your Rendezvous Point...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
