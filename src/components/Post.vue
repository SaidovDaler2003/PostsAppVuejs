<template>
  <div style="margin-bottom: 20px">
    <router-link :to="`/post/${index}`">
      <h3>{{ title }}</h3>
    </router-link>
    <div class="post__body">
      <slot></slot>
    </div>
    <button @click="handle">
      Delete
    </button>
    <router-link :to="`/post/${index}`">
      <button>
        More
      </button>
    </router-link>
    <br>
    <template v-if="withcomments">
      <h4>Comments:</h4>
      <ul>
        <li class="post__comment" v-for="(comment, i) in posts[index].comments" :key="i">
          {{ comment }}
        </li>
      </ul>
      <AddComment :comment_index="index" />
    </template>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import AddComment from './CreateComment.vue';

  export default {
    props: ['title', 'index', 'withcomments'],
    methods: {
      ...mapMutations(['deletePost']),
      handle() {
        this.deletePost({ index: this.index });
        this.$router.push({ name: 'home-page' });
      },
      more() {

      }
    },
    computed: {
      ...mapState([`posts`])
    },
    components: { AddComment }
  };
</script>

<style>
  .post__body, .post__comment {
    white-space: pre;
  }

  .post__body {
    margin-left: 10px;
  }

  .post__comment {
    margin-left: 10px;
  }
</style>