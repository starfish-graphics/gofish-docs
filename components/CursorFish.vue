<template>
  <div class="cursor-fish-container">
    <div
      v-for="(fish, index) in fishPositions"
      :key="index"
      class="fish"
      :style="{
        left: fish.x + 'px',
        top: fish.y + 'px',
        transform: `rotate(${fish.rotation}deg) scale(${fish.scale})`,
        opacity: fish.opacity,
        transition: fish.transition,
      }"
    >
      <img src="/gofish-logo.png" :alt="`Fish ${index + 1}`" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const fishPositions = ref([]);
const cursorPosition = ref({ x: 0, y: 0 });
const isMouseMoving = ref(false);
const mouseStopTimeout = ref(null);

// Initialize fish positions
const initializeFish = () => {
  const fishCount = 5;
  const fish = [];

  for (let i = 0; i < fishCount; i++) {
    fish.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.4, // 0.6 to 1.0
      opacity: 0.3,
      transition: "all 0.3s ease-out",
      delay: i * 200, // Stagger the movement
    });
  }

  fishPositions.value = fish;
};

// Update fish positions to follow cursor
const updateFishPositions = () => {
  if (!isMouseMoving.value) return;

  fishPositions.value.forEach((fish, index) => {
    // Calculate offset from cursor for each fish
    const offsetDistance = 80 + index * 30; // 80px to 200px offset
    const angle = index * 72 + Date.now() * 0.001; // Spread fish in circle, rotate over time
    const offsetX = Math.cos(angle) * offsetDistance;
    const offsetY = Math.sin(angle) * offsetDistance;

    fish.targetX = cursorPosition.value.x + offsetX;
    fish.targetY = cursorPosition.value.y + offsetY;

    // Smooth movement with delay
    setTimeout(() => {
      fish.x = fish.targetX;
      fish.y = fish.targetY;
      fish.rotation = angle * (180 / Math.PI) + 90; // Convert to degrees and orient fish
    }, fish.delay);
  });
};

// Handle mouse movement
const handleMouseMove = (event) => {
  cursorPosition.value = {
    x: event.clientX,
    y: event.clientY,
  };

  isMouseMoving.value = true;

  // Clear existing timeout
  if (mouseStopTimeout.value) {
    clearTimeout(mouseStopTimeout.value);
  }

  // Set timeout to stop following after mouse stops moving
  mouseStopTimeout.value = setTimeout(() => {
    isMouseMoving.value = false;
    // Gradually fade out fish when mouse stops
    fishPositions.value.forEach((fish) => {
      fish.opacity = 0.1;
    });
  }, 1000);

  // Show fish when mouse moves
  fishPositions.value.forEach((fish) => {
    fish.opacity = 0.3;
  });

  updateFishPositions();
};

// Handle window resize
const handleResize = () => {
  fishPositions.value.forEach((fish) => {
    fish.x = Math.min(fish.x, window.innerWidth - 50);
    fish.y = Math.min(fish.y, window.innerHeight - 50);
  });
};

onMounted(() => {
  initializeFish();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
  if (mouseStopTimeout.value) {
    clearTimeout(mouseStopTimeout.value);
  }
});
</script>

<style scoped>
.cursor-fish-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1000;
}

.fish {
  position: absolute;
  width: 60px;
  height: 60px;
  pointer-events: none;
}

.fish img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Hide fish on mobile devices */
@media (max-width: 768px) {
  .cursor-fish-container {
    display: none;
  }
}
</style>
