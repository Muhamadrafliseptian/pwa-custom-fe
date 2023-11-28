<template>
  <div v-for="(data, i) in props.payments" :key="i" class="card border-1 mb-3 card-hover">
    <div class="card-body d-flex align-items-center" @click="$router.push(`/${data.paymentName}`)">
      <Icon name="mdi:bank" color="blue" class="me-3"/>
      <div>
        <p class="mb-0">
          <b>
            {{ data.paymentName }}
          </b>
        </p>
        <div class="d-flex flex-row flex-md-row justify-content-between">
          <div class="me-md-3">
            <small class="text-primary">
              {{ data.description }}
            </small>
          </div>
            <div class="start">
              <Icon name="material-symbols:arrow-forward" color="blue"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payments: {
    type: Array,
    default: () => []
  }
});

const router = useRoute();
</script>

<style scoped>
.card-hover{
  background-color: #e4e4e4;
  box-shadow: 2px 10px 20px rgb(239, 239, 239);
}
.card-hover:hover {
  border-color: rgb(58, 120, 255); 
}
.start{
  margin-left: 120px;
}
</style>
