<template>
  <form @submit.prevent="handle">
    <textarea cols="30" rows="10" v-model="comment"></textarea><br>
    <input type="submit" value="add">
  </form>
</template>

<script>
  export default {
    props: ['comment_index'],
    data() {
      return {
        comment: ''
      };
    },
    methods: {
      handle() {
        const payload = {
          index: this.comment_index,
          comment: this.comment
        };
        this.$store.commit('addComment', payload);
        this.comment = '';
      }
    }
  };
</script>
