<template>
  <div v-if="type">
    <Default :type="this.type" :index="this.selectedIndex" />
  </div>

  <div v-else class="container">
    <div class="image-grid" style="margin: auto">
      <div
        class="image-container"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="getImage(image.src)" :alt="image.alt" />
        <button @click="chooseType(index)" class="hidden-button">Choose</button>
      </div>
    </div>
  </div>
</template>

<script>
import Default from "./components/Default.vue";

export default {
  data() {
    return {
      selectedIndex: null,
      type: null,
      images: [
        { src: "default.png", alt: "Default" },
        { src: "cube.png", alt: "Cube" },
        { src: "fade.png", alt: "Fade" },
        { src: "creative.png", alt: "Creative" },
        // Add more images as needed
      ],
    };
  },
  components: {
    Default,
  },
  methods: {
    chooseType(index) {
      this.selectedIndex = index;
      if (this.selectedIndex === 0) {
        this.type = "multiple";
      } else if (this.selectedIndex === 1) {
        this.type = "cube";
      } else if (this.selectedIndex === 3) {
        this.type = "creative";
      } else {
        this.type = "single";
      }
    },
    getImage(image) {
      return new URL(`./assets/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style>
body {
  background-color: #0b3144 !important;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* This makes the container take up the full viewport height */
  flex-direction: column;
  /* This ensures the content is centered vertically */
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.image-container {
  position: relative;
  display: inline-block;
  margin: 10px;
}

.image-container img {
  width: 100%;
  height: auto;
  transition: opacity 0.5s, transform 0.5s;
}

.image-container:hover img {
  opacity: 0.5;
  transform: scale(1.05);
}

.hidden-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.5s;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.image-container:hover .hidden-button {
  opacity: 1;
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
