"use client";

import React, { useMemo } from "react";
import { useGLTF, Text, Float, Center } from "@react-three/drei";
import * as THREE from "three";

interface BraceModelProps {
    text: string;
}

export default function BraceModel({ text }: BraceModelProps) {
    // Load the Matrix CAD model
    // ASSUMPTION: The file '2kol1.glb' exists in the /public/models/ directory.
    const { scene } = useGLTF("/models/2kol1.glb");

    // Clone the scene to ensure we have a fresh instance for this component
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    // Programmatically apply the 14K Gold Material to the imported mesh
    useMemo(() => {
        clonedScene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.material = new THREE.MeshStandardMaterial({
                    color: "#D4AF37", // 14K Gold Color
                    metalness: 1,     // Full metal look
                    roughness: 0.15,  // Shiny polish
                    envMapIntensity: 1.5,
                });
                // Enable shadows for realism
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }
        });
    }, [clonedScene]);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Center>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    {/* Render the loaded Matrix CAD model */}
                    {/* Adjust scale/position as needed based on the model's export settings */}
                    <primitive object={clonedScene} scale={1} position={[0, -0.5, 0]} />

                    {/* 
                Engraving Text Overlay
                NOTE: These coordinates [0, 0.1, 0.5] are a starting point.
                You may need to manually adjust x, y, z to align perfectly with the
                plate surface of the '2kol1.glb' model.
            */}
                    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0.5]}>
                        <Text
                            position={[0, 0, 0]}
                            fontSize={0.2}
                            color="#781F19" // Deep Ruby for contrast/inlay look
                            anchorX="center"
                            anchorY="middle"
                            characters="abcdefghijklmnopqrstuvwxyz0123456789!"
                        >
                            {text}
                        </Text>
                    </group>
                </group>
            </Center>
        </Float>
    );
}

// Preload the model for performance
useGLTF.preload("/models/2kol1.glb");
