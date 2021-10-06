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
      renderer: null,
      scene: null,
      camera: null,
      hlight: null,
      hlight2: null,
      hlight3: null,
      hlight4: null,
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
      this.scene.background = new THREE.Color( "#EEEDED");

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);
  

      this.camera.position.z = 5;

      this.hlight = new THREE.PointLight(0xffffff, 1);
      this.hlight.position.set(0,300,500)
      this.scene.add(this.hlight);

      this.hlight2 = new THREE.PointLight(0xffffff, 1);
      this.hlight2.position.set(500,100,0)
      this.scene.add(this.hlight2);

      this.hlight3 = new THREE.PointLight(0xffffff, 1);
      this.hlight3.position.set(0,100,500)
      this.scene.add(this.hlight3);

      this.hlight4 = new THREE.PointLight(0xffffff, 1);
      this.hlight4.position.set(0,300,500)
      this.scene.add(this.hlight4);

      const loader = new GLTFLoader();


      loader.load(
        "./3d-assets/electronica/scene.gltf",
        (gltf) => {
          gltf.scene.scale.set(10,10,10)
          this.shoes = gltf.scene.children[0];
          this.shoes.rotation.x = 300;
          this.shoes.rotation.y = 0;
          this.shoes.rotation.z = -200;
          this.shoes.name = "lagrosse3D"
          
          //let model = gltf.scene.children[0];
          //let part = model.getObjectByName( 'lagrosse3D' )
          /*
          const textureLoader = new THREE.TextureLoader();
          textureLoader.crossOrigin = true;
          const texture = textureLoader.load( './3d-assets/textures/NikeShoe_baseColor.jpeg' )
          part.material = new THREE.MeshPhongMaterial( { map: texture } );   
*/

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
      //this.shoes.rotation.x += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>