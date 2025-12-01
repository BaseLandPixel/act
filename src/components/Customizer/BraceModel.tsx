import React, { useRef } from "react";
import { Text, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BraceModelProps {
    text: string;
    font: "serif" | "sans";
}

export default function BraceModel({ text, font }: BraceModelProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Rotate slowly
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    // Font URL (using Google Fonts via CDN or local assets would be better, but using default for now or a reliable URL)
    // For R3F Text, we need a .woff or .ttf url.
    // I'll use a standard font URL for demo purposes.
    const fontUrl = font === "serif"
        ? "https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
        : "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff";

    return (
        <group dispose={null}>
            {/* Bracelet Placeholder: A Gold Torus (Ring/Bracelet shape) */}
            <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
                {/* TorusGeometry: radius, tube, radialSegments, tubularSegments */}
                <torusGeometry args={[2, 0.3, 16, 100]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                    envMapIntensity={1.5}
                />

                {/* Engraved Text */}
                {/* We position the text on the outer surface of the torus */}
                <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 2.1]}>
                    <Center>
                        <Text
                            font={fontUrl}
                            fontSize={0.4}
                            color="#3a2a0d" // Darker gold/brown for engraving look
                            anchorX="center"
                            anchorY="middle"
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                        >
                            {text}
                        </Text>
                    </Center>
                </group>
            </mesh>
        </group>
    );
}
