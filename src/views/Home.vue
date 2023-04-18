<template>
    <div>
        <h1>Home</h1>
        <button v-on:click="toUsers">Usersを開く</button>
    </div>
</template>

<script>
export default {
    methods:{
        toUsers(){
            // $router: navigationで使用
            this.$router.push("users")
        }
    }
}
</script>