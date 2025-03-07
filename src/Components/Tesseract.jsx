import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

function Hypercube() {
    const group = useRef();
    const angle = useRef(0);

    // Define 4D Tesseract points
    const points4D = [
        [-1, -1, -1, -1], [1, -1, -1, -1], [1, 1, -1, -1], [-1, 1, -1, -1],
        [-1, -1, 1, -1], [1, -1, 1, -1], [1, 1, 1, -1], [-1, 1, 1, -1],
        [-1, -1, -1, 1], [1, -1, -1, 1], [1, 1, -1, 1], [-1, 1, -1, 1],
        [-1, -1, 1, 1], [1, -1, 1, 1], [1, 1, 1, 1], [-1, 1, 1, 1]
    ];

    // Function to rotate in 4D space (W-Z axis rotation)
    function rotate4D([x, y, z, w], angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const newW = cos * w - sin * z;
        const newZ = sin * w + cos * z;
        return [x, y, newZ];
    }

    // Animate the 4D rotation
    useFrame(() => {
        angle.current += 0.1;
    });

    const projectedPoints = points4D.map((point) => rotate4D(point, angle.current));

    // Define edges of the hypercube
    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7], [8, 9], [9, 10], [10, 11], [11, 8],
        [12, 13], [13, 14], [14, 15], [15, 12], [8, 12], [9, 13], [10, 14], [11, 15],
        [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15]
    ];

    return (
        <group ref={group}>
            {edges.map(([i, j], index) => (
                <Line key={index} points={[projectedPoints[i], projectedPoints[j]]} color="cyan" lineWidth={1.5} />
            ))}
        </group>
    );
}

export default function Tesseract() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-screen">
            <ambientLight intensity={0.5} />
            <Hypercube />
        </Canvas>
    );
}
