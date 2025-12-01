"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import BraceModel from "./BraceModel";

interface SceneProps {
    text: string;
    font: "serif" | "sans";
}

export default function Scene({ text, font }: SceneProps) {
    return (
        <div className="w-full h-full bg-gray-50">
            <Canvas
                shadows
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />

                    <group position={[0, -0.5, 0]}>
                        <BraceModel text={text} font={font} />
                    </group>

                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2.5}
                        far={4}
                    />

                    <OrbitControls
                        enablePan={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.5}
                        minDistance={4}
                        maxDistance={12}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
