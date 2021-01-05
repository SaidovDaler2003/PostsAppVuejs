<template>
  <Post :title="post.title" :index="$route.params.id" :withcomments="true">
    {{ post.body }}
  </Post>
</template>

<script>
  import Post from '../Post.vue';

  export default {
    computed: {
      post() {
        return this.$store.state.posts[this.$route.params.id]
      }
    },
    components: {
      Post
    }
  };
</script>

<style>
  
</style>
