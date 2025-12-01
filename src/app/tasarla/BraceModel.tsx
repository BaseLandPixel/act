"use client";

import React from "react";
import { useGLTF, Text, Float } from "@react-three/drei";
import * as THREE from "three";

interface BraceModelProps {
    text: string;
}

export default function BraceModel({ text }: BraceModelProps) {
    // Load the GLB model from the public folder
    // Ensure you have a 'models' folder in public and place 'product.glb' there.
    const { scene } = useGLTF("/models/product.glb");

    // Clone the scene to avoid mutating the cached original if used multiple times
    const clonedScene = React.useMemo(() => scene.clone(), [scene]);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                {/* Render the loaded GLB model */}
                {/* Adjust scale if the model is too big/small. Example: scale={2} */}
                <primitive object={clonedScene} scale={1} />

                {/* 
            Engraving Text 
            ADJUSTMENT REQUIRED:
            You must manually tweak the position and rotation below to match
            the specific surface of your loaded 3D model.
            
            Current assumption: Text sits slightly above the center (y=0.1).
        */}
                <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
                    <Text
                        position={[0, 0, 0]}
                        fontSize={0.2}
                        color="#781F19" // Deep Ruby
                        anchorX="center"
                        anchorY="middle"
                        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
                    >
                        {text}
                    </Text>
                </group>
            </group>
        </Float>
    );
}

// Preload the model to avoid layout shift or delay
useGLTF.preload("/models/product.glb");
