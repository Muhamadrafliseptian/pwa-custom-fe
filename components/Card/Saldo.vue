<template>
  <div class="mt-3 mb-3">
    <div :class="'card shadow border-0 ' + $style.color">
      <div class="card-body">
        <div :class="$style.box">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-0 text-dark pt-3">Sisa Saldo</h6>
                <p class="text-secondary">{{ amount }}</p>
              </div>
              <div class="pt-2">
                <div class="d-flex justify-content-center text-dark">
                  <div class="text-center me-3">
                    <button class="btn btn-primary btn-sm rounded">
                      +
                    </button>
                    <br />
                    <small class="text-center">Top Up</small>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-primary btn-sm rounded">
                      +
                    </button>
                    <br />
                    <small class="text-center">Promo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  amount: {
    type: String,
    default: "",
  },
});
</script>

<style module>
.color {
  background-color: rgb(25, 80, 198);
  color: #fff;
}

.box {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
