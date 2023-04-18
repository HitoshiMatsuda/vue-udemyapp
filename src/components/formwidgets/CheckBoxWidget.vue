<template>
    <div>
        <!-- for,idは関連付けのため記載している。ラベルを押してもcheckboxへ反映される -->
        <h2>{{ checkObj.checkBoxTitle }}</h2>
        <input type="checkbox" id="checkFlag" v-model="checkObj.checkFlag">
        <label for="checkFlag">ON</label>
        <!-- <p>{{ checkObj.checkFlag }}</p> -->

        <!-- 複数のcheckboxによるデータバインディング -->
        <!-- 複数の場合はList（配列）で取得する -->
        <h2>{{ checkObj.multiCheckBoxTitle }}</h2>
        <input type="checkbox" id=checkObj.value10 v-model="checkObj.checkFlagList" value="10">
        <label for="10">{{ checkObj.value10 }}</label>
        <input type="checkbox" id=checkObj.value10 v-model="checkObj.checkFlagList" value="20">
        <label for="20">{{checkObj.value20}}</label>
        <input type="checkbox" id=checkObj.value10 v-model="checkObj.checkFlagList" value="30">
        <label for="30">{{checkObj.value30}}</label>
        <!-- <p>{{ checkObj.checkFlagList }}</p> -->
    </div>
</template>

<script>
import constant from '../../constant'

export default{
    props: ["checkTitleObj"],
    data: function(){
        return {
            checkObj: constant.formWidgetObj.checkBoxWidgetConstant
        }
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid green;
  }
</style>