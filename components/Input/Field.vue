<template>
    <input :type="Type" :placeholder="Placeholder" class="form-control mb-3" value="">
</template>
<script setup>
    const props = defineProps({
        Type: {
            type: String,
            default: ""
        },
        Placeholder: {
            type: String,
            default: ""
        }
    })
</script>