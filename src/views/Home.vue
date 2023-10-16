<template>
  <Showcase
    :showExtra="true"
    heading="Welcome To The Astro Crash Course!"
    text="Build super fast HTML-first websites using your favorite JavaScript frameworks"
  />
  <Features />
</template>
<script>
import Showcase from "../components/Showcase";
import Features from "../components/Features";

export default {
  name: "Home",
  components: { Showcase, Features },
};
</script>

;
