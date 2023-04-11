  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Random Email',
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mails: [],
      }
    },
    mounted() {
            for (let i = 0; i < 10; i++) {
                axios
                .get(this.url)
                .then(result => {
                    const email = result.data.response;
                    console.log(email);
                    this.mails.push(email)
                })
            }
            // return this.getMail()
    },
  }).mount('#app')