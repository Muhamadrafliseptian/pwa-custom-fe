<template>
    <button type="" class="btn btn-sm btn-primary">
        {{ Label }}
    </button>
</template>
<script setup>
    const props = defineProps({
        Label: {
            type: String,
            default: ''
        }
    })
</script>