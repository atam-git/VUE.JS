<template>
  <section class="showcase">
    <div class="showcase-text">
      <h1>{{ heading }}</h1>
      <p>{{ text }}</p>
    </div>
    <div v-if="showExtra">
      <div class="showcase-img">
        <img class="logos" src="../assets/framework-logos.png" alt="" />
        <img
          class="logos-small"
          src="../assets/framework-logos-small.png"
          alt=""
        />
      </div>

      <p class="showcase-demo">
        <small>
          This is a demo website used for the YouTube crash course
        </small>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Showcase",
  props: {
    showExtra: Boolean,
    heading: String,
    text: String,
  },
};
</script>
<style>
.showcase {
  height: auto;
  background-color: var(--color-secondary);
  background-image: linear-gradient(
    to bottom,
    var(--color-primary),
    rgb(15 23 42 / 0)
  );
  padding: 30px;
}

.showcase-blog {
  min-height: 300px;
}

.showcase-text {
  max-width: 500px;
  color: #fff;
  text-align: center;
  margin: 50px auto;
}

.showcase h1 {
  font-size: 50px;
  color: #fff;
  margin-bottom: 20px;
}

.showcase p {
  font-size: 24px;
  margin-bottom: 20px;
}

.showcase-img {
  text-align: center;
}

.showcase-img img {
  border-radius: 10px;
  margin: auto;
}

.showcase-demo {
  color: #fff;
  text-align: center;
  font-weight: 300;
}
</style>
