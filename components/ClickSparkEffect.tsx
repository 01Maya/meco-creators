'use client';

import { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
}

export function ClickSparkEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdRef = { current: 0 };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = sparkIdRef.current++;
      const newSpark: Spark = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setSparks((prev) => [...prev, newSpark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed pointer-events-none inset-0 z-50">
      {sparks.map((spark) => (
        <div key={spark.id} className="spark-container" style={{ left: spark.x, top: spark.y }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="spark"
              style={{
                '--angle': `${(i * 360) / 8}deg`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
