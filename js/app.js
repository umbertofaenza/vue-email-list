const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmails: [],
    };
  },

  methods: {
    getRandomEmails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const responseEmail = response.data.response;
            this.randomEmails.push(responseEmail);
          });
      }
    },
  },

  created() {
    this.getRandomEmails();
  },
}).mount("#app");
