<template>
  <!-- {{ userStore.user.firstName }}
  <button @click="logout">
    Logout
  </button> -->
  <div class="sticky-top p-1 bg-light">
    <div class="px-2 pt-3">
      <p>
        <b>
        </b>
      </p>
      <InputField Type="text" Placeholder="Ketik nama bank yang dicari..." />
    </div>
  </div>
  <div class="container">
    <div
      v-for="data in dataBank"
    >
      <CardPayment @click="pay(data.code)" :name="data.name"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      dataBank: []
    }
  },
  computed: {
    getRoute() {
      this.$route
    }
  },
  created(){
    this.getBank()
  },
  methods: {
    getBank(){
      axios.get('http://localhost:3001/payment/available_bank', {}).then((response)=>{
        this.dataBank = response.data
        console.log(response);
      })
    },
    pay(id){
      this.$router.push(`/pay/${id}`)
    }
  },
}
// const userStore = useUserStore()

// // const logout = async () => {
// //   await userStore.logout({})
// //   await navigateTo('/')
// // }

// const route = useRoute();
// console.log(route);

// const banks = Bank();
</script>
<style>
.test{
  background-color: rgb(249, 249, 249);
  box-shadow: 0 3px 13px rgb(0 0 0 / 0.2);
}
</style>