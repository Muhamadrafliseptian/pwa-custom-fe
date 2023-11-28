<template>
  <div class="container">
    <CardSaldo amount="Rp. 20.000" />
    <div class="mb-3">
      <h6>Metode Pembayaran</h6>
    </div>
    <div class="fade-up" data-aos-duration="1000">
      <CardPaymentMethod :payments="dataMethods" />
    </div>
  </div>
</template>
<script setup>
const userStore = useUserStore()

// definePageMeta({
//   middleware: ['already-auth']
// })

const signIn = async () => {
  await userStore.signIn({
    username: "kminchelle",
    password: "0lelplR"
  })

  await navigateTo("/2", {replace: true})
}

const dataMethods = computed(() => [
  {
    paymentName: "Virtual Account",
    description: "lorem ipsum dolor sit amet",
  },
  {
    paymentName: "E-Wallet",
    description: "lorem ipsum dolor sit amet",
  },
  {
    paymentName: "Credit Card",
    description: "lorem ipsum dolor sit amet",
  },
]);
</script>
