<template>
    <div>
        <h2>{{ inputObj.inputFormTitle }}</h2>
        <label>{{inputObj.inputFormLabel0}}</label>
        <!-- lazy修飾子はinputフォームからフォーカスが外れた時に発動する。
            DOMイベントのchangeが発火する（メールアドレスの入力チェックなどに適任） -->
        <input type="text" v-model.lazy="inputObj.inputFormLabel1">
        <h2>{{ inputObj.inputFormLabel2 }}</h2>
        <textarea cols="30" rows="10" v-model.lazy="inputObj.inputDetailForm"></textarea>
    </div>
</template>

<script>
import constant from '../../constant'

export default{
    props: ["inputTitleObj"],
    data: function(){
        return {
            inputObj:constant.formWidgetObj.inputFormWidgetConstant
        }
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid blue;
  }
</style>