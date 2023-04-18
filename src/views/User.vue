<template>
    <div>
        <h1>User情報</h1>
        <router-link to="/user/1" class="router" active-class="active">User1</router-link> |
        <router-link to="/user/2" class="router" active-class="active">User2</router-link> |
        <router-link to="/user/3" class="router" active-class="active">User3</router-link>
        <hr>
        <!-- $route: routeの状態に関するObject（情報） -->
        <p>User No.{{ id }}</p>
        <router-link :to="'/user/' + (Number(id)+1) + '/profile'">次のユーザー(Profile)</router-link> |
        <router-link :to="{name: 'Post', params: {id: (Number(id)+1)}}">name-次のユーザーへ(Post)</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    // route/index.jsで指定した変数名とそろえる
    props:["id"]
}
</script>