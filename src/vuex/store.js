import { createStore } from 'vuex'; 

const store = createStore({
  state() {
    return {
      posts: [
        // {
        //   title: 'My life',
        //   body: 'Hello World',
        //   comments: [
        //     'Good',
        //     'Bad'
        //   ]
        // },
        // {
        //   title: 'Your life',
        //   body: 'My name is Daler\nGood bye',
        //   comments: [
        //     'hello',
        //     'its daler'
        //   ]
        // }
      ]
    };
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
    deletePost(state, payload) {
      state.posts.splice(payload.index, 1);
    },
    addComment(state, payload) {
      state.posts[Number(payload.index)].comments.push(payload.comment);
    }
  }
});

export default store;
