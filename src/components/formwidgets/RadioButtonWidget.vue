<template>
    <div>
        <!-- ラジオボタンはv-modelでの参照先が同じであれば複数選択されなくなる -->
        <h2>{{ radioObj.radioButtonTile }}</h2>
        <input type="radio" id="free" v-model="eventData.radioFlag" value="無料">
        <label for="free">{{ radioObj.freeText }}</label>
        <input type="radio" id="fee" v-model="eventData.radioFlag" value="有料">
        <label for="fee">{{ radioObj.feeText }}</label>
        <p>{{ eventData.radioFlag }}</p>
    </div>
</template>

<script>
import constant from '../../constant'

export default{
    props: ["radioTitleObj"],
    data: function(){
        return {
            eventData:{
                radioFlag: "無料",
            },
            radioObj: constant.formWidgetObj.radioButtonWidgetConstant
        }
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid orange;
  }
</style>