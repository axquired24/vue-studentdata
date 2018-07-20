<template>
    <div class="detail-divider">
        <div class="label">{{ label }}</div>
        <div class="detail">{{ value }}</div>
    </div>
</template>

<script>
/* eslint-disable */
    export default  {
        name: "DetailBase",
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                default: "-"
            }
        }
    }
</script>

<style scoped>
    .detail-divider {
        margin: 1em 0;
        border-bottom: #CCC 1px solid;
    }
    .label {
        font-weight: bold;
        font-size: 0.8em;
    }
    .detail {
        font-size: 0.9em;
    }
</style>
