<template>
    <div>
        <!-- セレクトタグ -->
        <h2>{{ selectObj.selectButtonTitle }}</h2>
        <select v-model="selectObj.prefecture">
            <!-- v-for構文のためtemplate内で使用する -->
            <template v-for="prefecture in selectObj.prefectures" v-bind:key="prefecture">
                <option>{{ prefecture }}</option>
            </template>
        </select>
        <p>{{ selectObj.prefecture }}</p>
    </div>
</template>

<script>
import constant from '../../constant'

export default{
    data: function(){
        return {
            selectObj: constant.formWidgetObj.selectButtonWidgetConstant
        }
    }
}
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid pink;
  }
</style>