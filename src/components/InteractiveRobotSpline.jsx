'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
      <svg className="animate-spin h-5 w-5 text-white mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4" />
        <path className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0
                     C5.373 0 0 5.373 0 12h4
                     zm2 5.291A7.962 7.962 0 014 12H0
                     c0 3.042 1.135 5.824 3 7.938
                     l2-2.647z" />
      </svg>
    </div>
  ),
});

export function InteractiveRobotSpline({ scene, className }) {
  return (
    <div className={`${className} relative`}>
      <Spline scene={scene} className="w-full h-full" />
      {/* Spline Badge Hider */}
      <div className="absolute bottom-2 right-8 w-36 h-12 bg-gray-950 z-50 pointer-events-none" />
    </div>
  );
}
