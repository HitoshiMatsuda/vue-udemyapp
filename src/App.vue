<template style="padding: 10rem">

  <!-- view-router -->
  <div class="naviDiv">
    <router-link to="/" class="router" active-class="active">Home</router-link>
    <router-link to="/info" class="router" active-class="active">Info</router-link>
    <router-link to="/users" class="router" active-class="active">Users</router-link>
  </div>
  <!-- router-viewの中にrouter-viewを設置しても機能しない -->
  <router-view class="rView"/>

  <!-- HeaderWidgetはLocal Component -->
  <HeaderWidget v-bind:commonObj="commonObj"></HeaderWidget>

  <!-- name slotが指定されている場合 -->
  <SubHeaderWidget>
    <!-- v-slot:"第1引数（任意に設定）" -->
    <!-- templateタグで囲まないものはdefault slotとしてまとめて表示される -->
    <!-- <h4>default slot 1</h4> -->

    <!-- v-slotの第１引数の値(likeSubHeaderUser)は子componenteのslotで指定したobjectをtemplate内で使用できるようにする -->
    <!-- <template v-slot:titleSlot="(likeSubHeaderUser)任意の変数名"> -->
    <template v-slot:titleSlot="subHeaderUser">
      <p>Name : {{ subHeaderUser.user.userFirstName }}</p>
    </template>

    <!-- <h4>default slot 2</h4> -->
    <template v-slot:likeSlot="subHeaderNum">
      <p>Age : {{ subHeaderNum.num.age }}</p>
    </template>
  </SubHeaderWidget>

  <!-- default slotしかない場合 -->
  <!-- LikeSubHeaderにv-slot:defaultを記載できる -->
  <!-- <LikeSubHeader v-slot:default="defaultSlotProps">
    <h1>default slotのみ</h1>
    <p>{{ defaultSlotProps }}</p>
    <p>defaultSlotProps</p>
  </LikeSubHeader> -->

  <TabMenuButtonWidget></TabMenuButtonWidget>

  <!-- 子componentへ送信 -->
  <!-- 子クラスで指定したpropsの変数名 = v-bindの変数名(今回だとlikeNumber) -->
  <!-- propsの変数名はキャメルケース -->
  <!-- v-on:clickNumber="number = $event" ←子componentから受け取る -->
  <BodyWidget  v-bind:likeNumber="number" v-on:click-number="number = $event"></BodyWidget>

  <FormMainWidget></FormMainWidget>
  <FooterSubWidget></FooterSubWidget>
  <FooterWidget></FooterWidget>
</template>

<script>
// Local Componentのimport
import constant from './constant'
import HeaderWidget from './components/header/HeaderWidget.vue'
import SubHeaderWidget from './components/header/SubHeaderWidget.vue'
import BodyWidget from './components/BodyWidget.vue'
import TabMenuButtonWidget from './components/TabMenuButtonWidget.vue'
import FormMainWidget from './components/FormMainWidget.vue'
import FooterWidget from './components/FooterWidget.vue'
import FooterSubWidget from './components/FooterSubWidget.vue'

export default{
  data: function(){
    return {
      number: 100,
      commonObj: constant.commonObj
   }
  },
  components:{
    HeaderWidget,
    SubHeaderWidget,
    TabMenuButtonWidget,
    BodyWidget,
    FormMainWidget,
    FooterWidget,
    FooterSubWidget
}}
</script>

<style scoped>
/* 親componentのCSSが子componentのCSSよりも優先される */
 div{
  border: 2px solid red;
 }

 .router{
  margin: 5px;
 }

 .naviDiv{
  border: 2px solid black;
 }

 .rView{
  border: 2px solid gray;
  margin: 3px;
 }

 .active{
  font-size: 20px;
 }
</style>