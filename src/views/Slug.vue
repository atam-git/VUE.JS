<template>
  <section class="page-content">
    <div class="container">
      <Card :title="post.title" v-if="post" :key="post.id">
        <template #moreProps>
          <router-link class="btn" to="/blog"> Go Back </router-link>
          <div>
            Written by <strong>{{ post.author }} </strong> on{{ " " }}
            {{ new Date(post.date).toLocaleDateString() }}
            <p>{{ post.body }}</p>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  name: "Slug",
  components: { Card },
  props: {
    postData: {
      type: Array,
      required: true,
    },
  },
};
</script>
