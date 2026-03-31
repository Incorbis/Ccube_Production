import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import { useEffect, Suspense } from "react";
import { Group, Box3, Vector3 } from "three";

type GLTFResult = {
  scene: Group;
  animations: any[];
};

function Cube() {
  const { scene, animations } = useGLTF("/Model/Cube.glb") as GLTFResult;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // ▶️ Play animation
    if (actions) {
      const first = actions[Object.keys(actions)[0]];
      first?.play();
    }

    // ▶️ CENTER MODEL
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    // ▶️ AUTO SCALE MODEL
    const size = new Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;
    scene.scale.setScalar(scale);

    // ▶️ FORCE MATERIAL (in case model looks black)
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.color.set("#ffffff");
      }
    });

  }, [scene, actions]);

  return <primitive object={scene} />;
}

export default function CubeModel() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [100, 0, 300], fov: 1 }}>
        
        {/* 🔆 LIGHTING */}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[0, 2, 2]} intensity={2} />

        {/* ⚡ MODEL */}
        <Suspense fallback={null}>
          <Cube />
        </Suspense>

        {/* 🎮 CONTROLS */}
        <OrbitControls enableZoom={false} makeDefault={false} />

      </Canvas>
    </div>
  );
}