  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue',
        mail: null
      }
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( response => {
            console.log(response);
            this.mail = response.data.response
        })
    }
  }).mount('#app')