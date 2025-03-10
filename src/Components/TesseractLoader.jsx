// TesseractLoader.jsx - Updated version
import React, { useEffect, useRef } from 'react';

const TesseractLoader = ({ size = 200, color = "#3498db", bgColor = "transparent", thickness = 2 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Vertices of a 4D hypercube (tesseract)
    const vertices4D = [
      [-1, -1, -1, -1], [1, -1, -1, -1], [1, 1, -1, -1], [-1, 1, -1, -1],
      [-1, -1, 1, -1], [1, -1, 1, -1], [1, 1, 1, -1], [-1, 1, 1, -1],
      [-1, -1, -1, 1], [1, -1, -1, 1], [1, 1, -1, 1], [-1, 1, -1, 1],
      [-1, -1, 1, 1], [1, -1, 1, 1], [1, 1, 1, 1], [-1, 1, 1, 1]
    ];
    
    // Edges - which vertices are connected
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // outer cube bottom face
      [4, 5], [5, 6], [6, 7], [7, 4], // outer cube top face
      [0, 4], [1, 5], [2, 6], [3, 7], // outer cube vertices
      
      [8, 9], [9, 10], [10, 11], [11, 8], // inner cube bottom face
      [12, 13], [13, 14], [14, 15], [15, 12], // inner cube top face
      [8, 12], [9, 13], [10, 14], [11, 15], // inner cube vertices
      
      [0, 8], [1, 9], [2, 10], [3, 11], // connect outer to inner (bottom)
      [4, 12], [5, 13], [6, 14], [7, 15]  // connect outer to inner (top)
    ];
    
    // Animation
    let angle = 0;
    let angle2 = 0;
    let angle3 = 0;
    let angle4 = 0;
    let animationId;
    
    const project = (point) => {
      // Reduce scale to ensure all edges are visible within the canvas
      const scale = size / 4; // Adjusted scale factor
      let p = [...point];
      
      // Rotate in various 4D planes
      const rotateXY = (point, angle) => {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = point[0] * cosA - point[1] * sinA;
        const y = point[0] * sinA + point[1] * cosA;
        return [x, y, point[2], point[3]];
      };
      
      const rotateXZ = (point, angle) => {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = point[0] * cosA - point[2] * sinA;
        const z = point[0] * sinA + point[2] * cosA;
        return [x, point[1], z, point[3]];
      };
      
      const rotateXW = (point, angle) => {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = point[0] * cosA - point[3] * sinA;
        const w = point[0] * sinA + point[3] * cosA;
        return [x, point[1], point[2], w];
      };
      
      const rotateYZ = (point, angle) => {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const y = point[1] * cosA - point[2] * sinA;
        const z = point[1] * sinA + point[2] * cosA;
        return [point[0], y, z, point[3]];
      };
      
      // Apply rotations
      p = rotateXY(p, angle);
      p = rotateXZ(p, angle2);
      p = rotateXW(p, angle3);
      p = rotateYZ(p, angle4);
      
      // 4D to 3D stereographic projection with adjusted distance
      const w = 3 / (5 + p[3]); // Adjusted w factor
      const projX = p[0] * w;
      const projY = p[1] * w;
      const projZ = p[2] * w;
      
      // 3D to 2D projection with center offset
      const distance = 5; // Increased distance
      const z = 1 / (distance - projZ);
      return {
        x: projX * z * scale + size / 2,
        y: projY * z * scale + size / 2
      };
    };
    
    const draw = () => {
      // Clear canvas with full dimensions
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw edges
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      
      for (const [a, b] of edges) {
        const vertexA = project(vertices4D[a]);
        const vertexB = project(vertices4D[b]);
        
        ctx.beginPath();
        ctx.moveTo(vertexA.x, vertexA.y);
        ctx.lineTo(vertexB.x, vertexB.y);
        ctx.stroke();
      }
      
      // Update angles
      angle += 0.01;
      angle2 += 0.013;
      angle3 += 0.007;
      angle4 += 0.009;
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, color, thickness]);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas 
        ref={canvasRef} 
        width={size} 
        height={size} 
        style={{ 
          background: bgColor,
          display: 'block' // Ensures canvas renders properly
        }} 
      />
    </div>
  );
};

export default TesseractLoader;