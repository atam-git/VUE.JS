<template>
  <section class="features">
    <div class="container">
      <div v-for="feature in featuresData" :key="feature.title">
        <Card :dark="false" :title="feature.title" :body="feature.body" />
      </div>
    </div>
  </section>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Features",
  components: { Card },
  data() {
    return {
      featuresData: [
        {
          title: "Zero JavaScript Runtime",
          body: " Astro renders HTML on the server and strips away any remaining, unused JavaScript.",
        },
        {
          title: "The Power of Islands",
          body: " Need interactive UI? Load individual, non-blocking component islands in parallel.",
        },
        {
          title: "Lazy-Loading Islands",
          body: "Components only hydrate when they scroll into view. If you don't see it, Astro won't load it.",
        },
      ],
    };
  },
};
</script>
<style>
.features .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0 20px;
  margin: 30px auto;
}
</style>
