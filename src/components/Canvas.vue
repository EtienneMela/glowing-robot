<template>
  <div id="container"></div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "ThreeTest",
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
      hlight: null,
      shoes: null,
    };
  },
  methods: {
    init: function () {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(geometry, material);
      // this.scene.add(this.cube);

      // this.camera.rotation.y = 5;

      this.camera.position.z = 5;

      this.hlight = new THREE.AmbientLight(0x404040, 100);
      this.scene.add(this.hlight);

      const loader = new GLTFLoader();

      loader.load(
        "./3d-assets/scene.gltf",
        (gltf) => {
          this.shoes = gltf.scene.children[0];
          this.shoes.rotation.x = 100;
          this.shoes.rotation.y = 100;
          this.shoes.rotation.z = 100;
          /* eslint-disable */
          console.log("loader", loader);
          this.scene.add(gltf.scene);
        },
        undefined,
        function (error) {
          /* eslint-disable */
          console.error(error);
        }
      );
    },
    animate: function () {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      // this.shoes.rotation.x += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>