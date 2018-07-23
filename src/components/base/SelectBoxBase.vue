<template>
    <select :name="name" :id="id" v-model="model">
        <option v-for="o in opt" :value="o" :key="o.val">{{ o.label }}</option>
    </select>
</template>

<script>
/* eslint-disable */

export default {
    name: "SelectBoxBase",
    props: {
        name: {
            default: ""
        },
        id: {
            default: ""
        },
        model: {
            required: true
        },
        opt: {
            default: [
                {val: null, label: "Kosong"}
            ]
        }
    }
}
</script>