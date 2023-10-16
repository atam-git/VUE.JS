<template>
  <div class="card" :class="{ dark: dark }">
    <h3>{{ title }}</h3>
    <slot name="moreProps"></slot>
    <p>{{ body }}</p>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    dark: Boolean,
    title: String,
    body: String,
  },
};
</script>
<style>
.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.dark {
  background: var(--color-primary);
  color: #fff;
}
</style>
