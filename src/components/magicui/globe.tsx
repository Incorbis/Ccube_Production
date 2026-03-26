import { useEffect, useRef } from "react";
import createGlobe, { GlobeInstance } from "cobe";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    let globe: GlobeInstance | null = null;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600,
        height: 600,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.1],
        markerColor: [0.1, 0.8, 1],
        glowColor: [0.3, 0.6, 1],
        markers: [
          { location: [18.5204, 73.8567], size: 0.08 }, // Pune
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "500px",
      }}
    />
  );
};

export default Globe;