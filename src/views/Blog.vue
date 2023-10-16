<template>
  <Showcase heading="Astro Blog" text="A simple blog built with Astro" />
  <section class="page-content">
    <div v-for="(post, index) in postData" class="container" :key="post.id">
      <Card :dark="index % 2 === 0" :title="post.title"
        ><template #moreProps>
          <div>
            Written by <strong>{{ post.author }} </strong> on{{ " " }}
            {{ new Date(post.date).toLocaleDateString() }}
          </div>
          <p>{{ post.excerpt }}</p>
          <router-link :to="`/blog/${post.slug}`" class="btn">
            Read More
          </router-link>
        </template>
      </Card>
    </div>
  </section>
</template>

<script>
import Showcase from "../components/Showcase.vue";
import Card from "../components/Card.vue";

export default {
  name: "Blog",
  components: { Showcase, Card },
  props: {
    postData: {
      type: Array,
      required: true,
    },
  },
};
</script>
