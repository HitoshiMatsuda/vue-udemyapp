<template>
    <div>
        <!-- mixinの変数名とlocal変数が被った場合はcomponentの値が優先される -->
        <!-- ライフサイクルはmergeして表示される -->
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
    data: function(){
        return {
            title: "componentで指定"
        }
    },
    created(){
        console.log("created in component")
    }
}
</script>

<style scoped>
div{
    padding: 3rem;
    margin: 10px;
    background-color: gray;
}
</style>