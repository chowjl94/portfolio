import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	PresentationControls,
	useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../../Loader";
import Tooltip from "../Tooltip/Tooltip";

interface BallProps {
	imgUrl: string;
}

const Ball = ({ imgUrl }: BallProps) => {
	const [decal] = useTexture([imgUrl]);
	const meshRef = useRef<THREE.Mesh>(null);
	const [snapBack, setSnapBack] = useState(false);
	const meshPosition = useRef<THREE.Vector3>(new THREE.Vector3());
	const initialRotation = new THREE.Vector3(0, 0, 2 * Math.PI);

	const handleDown = () => {
		setSnapBack(false);
	};
	const handleUp = () => {
		setSnapBack(true);
	};

	useFrame(() => {
		if (meshRef.current && snapBack) {
			const currentRotation = meshRef.current.rotation.clone(); // Clone the rotation to avoid mutation
			const initialRotationEuler = new THREE.Euler(
				initialRotation.x,
				initialRotation.y,
				initialRotation.z
			);

			if (
				currentRotation.x !== initialRotation.x ||
				currentRotation.y !== initialRotation.y ||
				currentRotation.z !== initialRotation.z
			) {
				meshRef.current.rotation.set(
					initialRotationEuler.x,
					initialRotationEuler.y,
					initialRotationEuler.z
				);
			}
		}
	});

	return (
		<Float speed={1} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh
				ref={meshRef}
				castShadow
				receiveShadow
				scale={2.75}
				onPointerDown={handleDown}
				onPointerUp={handleUp}
			>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon, name }: { icon: string; name: string }) => {
	return (
		<Tooltip message={name} position={"top-0 left-20"}>
			<Canvas // canvas to load our 3d Ball with enabled orbit Controls
				frameloop="demand" // on demand rendering as the items come to a rest
				gl={{ preserveDrawingBuffer: true }}
				style={{ cursor: "grab" }}
			>
				<Suspense fallback={<CanvasLoader />}>
					<PresentationControls
						global
						config={{ mass: 2, tension: 500 }}
						snap={{ mass: 4, tension: 1500 }}
					>
						<OrbitControls enableZoom={false} enablePan={false} />
						<Ball imgUrl={icon} />
					</PresentationControls>
				</Suspense>
				<Preload all />
			</Canvas>
		</Tooltip>
	);
};

export default BallCanvas;
