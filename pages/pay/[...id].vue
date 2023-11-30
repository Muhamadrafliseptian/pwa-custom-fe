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
              {{ this.$route }}
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
            <div v-if="callbackData">
              <p class="mb-0">VIRTUAL ACCOUNT {{ callbackData.bank_code }}</p>
              <p>
                <small>
                  <b>{{ callbackData.account_number }}</b>
                </small>
              </p>
            </div>
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
      <div class="text-center" v-if="callbackData">
        <Button @click="createPayment" Label="Buat virtual account" />
      </div>
      <div class="text-center" v-else>UDAH ADA PAYMENT</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bank_code: "BNI",
      callbackData: {},
    };
  },
  methods: {
    createPayment() {
      axios
        .post(
          "https://e76b-2001-448a-2082-96cf-7936-25f1-7d60-7f75.ngrok-free.app/payment/virtualaccount",
          {
            bank_code: this.bank_code,
          }
        )
        .then((response) => {
          this.callbackData = response.data;
          alert("berhasil membuat virtual account");
        });
    },
  },
};
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
