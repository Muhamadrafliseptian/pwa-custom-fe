<template>
  <div>
    <div class="sticky-top px-3 p-1 bg-light">
      <div class="px-2 pt-3 d-flex align-items-center">
        <img
          src="../../assets/images/bca.png"
          class="me-2 img-fluid"
          style="max-height: 25px"
        />
        <div class="mt-3">
          <p class="mb-0">
            <b>
              <!-- {{ route.params.id[1] }} -->
            </b>
          </p>
          <p class="text-secondary">
            <small>
              <!-- {{ route.params.id[0] }} -->
            </small>
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-2">
      <div class="bg-light">
        <div class="d-md-flex px-3 justify-content-between align-items-center">
          <div class="mb-2 mb-md-0">
            <p class="mb-0">VIRTUAL ACCOUNT NO.</p>
            <p>
              <small>
                <b>2716627182</b>
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="px-3">
          <p class="mb-0"><b>Cara Bayar TNOS:</b></p>
          <p class="pb-2 box">
            Biaya Admin <span class="text-primary">Rp.1.000</span> - Minimum
            <span class="text-primary">Rp.10.000</span>
          </p>
        </div>
        <!-- <div v-for="data in step">
          <v-timeline density="compact" side="end">
            <v-timeline-item dot-color="primary" size="small">
              <div class="d-flex justify-space-between flex-grow-1">
                {{ data.name }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </div> -->
      </div>
      <div class="text-center">
        <Button
          @click="createPayment"
          Label="Buat virtual account"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      bank_code: 'BCA'
    }
  },
  methods: {
    createPayment(){
      axios.post('https://api.xendit.co/callback_virtual_accounts', {
        bank_code: this.bank_code
      }).then((response)=>{
        console.log(response);
        alert(response)
      })
    }
  }
}
// const clicked = (data) => {
//   alert(data);
// };

// const route = useRoute();

// const step = computed(() => [
//   {
//     name: "Login ke M-BCA",
//   },
//   {
//     name: "Pilih M-Transfer -> Transfer BCA Virtual Account",
//   },
//   {
//     name: "Masukkan jumlah yang ingin diisi",
//   },
//   {
//     name: "Masukkan pin BCA kamu",
//   },
// ]);
</script>
<style>
.box {
  border-bottom: dotted 2px rgb(199, 199, 199);
}
</style>
