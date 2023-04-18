<template>
  <div>
    <!-- Flag値はimportしたcomponent名と同値 -->
    <button v-on:click="componentSwitchFlag = 'HomeWidget'">Home</button>
    <button v-on:click="componentSwitchFlag = 'AboutWidget'">About</button>

    <!-- keep-aliveでキャッシュに一時保存される -->
    <!-- keep-aliveタグを使用する場合は新しいライフサイクルとして"activated","deactivated"が適用される -->
    <keep-alive>
    <component v-bind:is="componentSwitchFlag"></component>
    </keep-alive>
  </div>
</template>

<script>
import HomeWidget from './tabs/HomeWidget.vue';
import AboutWidget from './tabs/AboutWidget.vue';

export default{
    data: function(){
      return {
        number : 100,
        componentSwitchFlag : "HomeWidget"
      }
    },
    components:{
        HomeWidget,
        AboutWidget
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid black;
  }
</style>