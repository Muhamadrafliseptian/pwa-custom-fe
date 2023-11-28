<template>
    <div class="card mb-3 warna">
        <div class="card-body d-flex align-items-center">
            <img
              :src="imageUrl"
              width="50"
              height="50"
              class="img-fluid me-3"
              alt=""
            />
            <div class="card-text mt-3">
              <p>
                {{ name }}
              </p>
            </div>
          </div>
    </div>
</template>
<script setup>
import Image from "@/assets/images/bca.png"
    const props = defineProps({
        name: {
            type: String,
            default: ""
        },
        imageUrl: {
            type: String,
            default: Image
        }
    })
</script>
<style>
.warna{
  box-shadow: 2px 10px 20px rgb(239, 239, 239);
  background-color: #ffffff;
}
.warna:hover{
  border-color: rgb(58, 143, 255); 
}
</style>