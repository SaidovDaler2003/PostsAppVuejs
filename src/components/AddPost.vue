<template>
  <form @submit.prevent="() => {addPost({ title, body, comments: [] }), clean()}">
    <input v-model="title" placeholder="title"><br>
    <textarea cols="30" rows="10" v-model="body" placeholder="body"></textarea><br>
    <button type="submit" id="add-post">
      Add Post
    </button>
  </form>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        title: '',
        body: ''
      };
    },
    computed: {
      test() {
        return 'Daler';
      }
    },
    methods: {
      ...mapMutations(['addPost']),
      clean() {
        this.title = this.body = '';
      }
    }
  };
</script>

<style>
  textarea, input, button#add-post {
    width: 250px;
  }  
</style>
