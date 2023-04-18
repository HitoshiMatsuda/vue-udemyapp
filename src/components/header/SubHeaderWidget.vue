<!-- slot nameがある場合 -->
<template>
    <div>
        <h2>{{ subHeaderObj.userInfoTitle }}</h2>
        <!-- <slot></slot> -->
        <slot name="titleSlot" v-bind:user="subHeaderObj"></slot>
        <slot name="likeSlot" v-bind:num="subHeaderObj"></slot>
    </div>
</template>

<!-- default slotしかない場合 -->
<!-- <template>
    <slot v-bind:user="userData"></slot>
</template> -->

<script>
import constant from '../../constant'

export default{
    data: function(){
        return {
            subHeaderObj: constant.commonObj
        }
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid purple;
  }
</style>