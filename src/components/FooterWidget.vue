<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ data1 }}</p>
        <p>{{ data2 }}</p>
        <p>{{ data3 }}</p>
    </div>
</template>

<script>
import {mixInObj} from '@/mixInObj'

export default{
    mixins: [mixInObj],
    created(){
        console.log("created in component")
    }
}
</script>

<style scoped>
div{
    padding: 3rem;
    margin: 10px;
    background-color: greenyellow;
}
</style>