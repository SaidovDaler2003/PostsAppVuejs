<template>
  <ul v-if="posts.length !== 0">
    <li v-for="(post, i) in posts" :key="i">
      <Post :title="post.title" :index="i" :withcomments="false">
        {{ post.body }}
      </Post>
    </li>
  </ul>
  <h3 v-else>
    No Posts found
  </h3>
</template>

<script>
  import { mapState } from 'vuex';
  import Post from './Post';

  export default {
    computed: {
      ...mapState(['posts'])
    },
    components: {
      Post
    }
  }
</script>
