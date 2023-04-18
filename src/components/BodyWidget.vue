<template>
  <div>
    <p>Total {{ likeNumber }}</p>
    <p>いいね {{ likeNumber / 2 }}</p>
    <button v-on:click="add">+1</button>
  </div>

  <div>
    <h2>Filter</h2>
    <pre>
      computedは対象のデータごとに関数を作成する必要がある。
      name,smallText,smallText2すべてにtoUpperCase();を適用する場合。3つcomputedを作成しなければならない。
      ※filterはvue3から廃止された。computedまたはmethodで代替する
    </pre>
    <h3>TextFormat</h3>
    <h4>computedを使用した場合↓</h4>
    <p>{{ upperCaseName }}</p>
    <h4>Filterを使用した場合↓</h4>
    <p>{{ datas.smallText }}</p>
    <p>{{ datas.smallText2 }}</p>
  </div>
</template>
  
<script>
export default{
  // 親componentからデータを受け取る
  props: {
    likeNumber:{
      type: Number
    }
  },
  data: function(){
    return {
      datas: {
        name: "hogehogehoge",
        smallText: "aaaaaaaaaa",
        smallText2: "Shahahahahahah"
      }
    }
  },
  computed:{
    upperCaseName(){
      return this.datas.name.toUpperCase();
    }
  },
  methods:{
    add:function(){
      // $emit("親componentへ送信する変数名（任意）","送信する値")
      // $emitは子component側で親componentのeventを実行させることができる（$emit実行時）
      this.$emit("click-number",this.likeNumber + 1);
    }
  }
  }
</script>

<style scoped>
  div{
    padding: 3rem;
    margin: 10px;
    border: 4px solid red;
  }
</style>

<!-- memo -->
<!-- * Vue3では複数のルート要素を指定できる -->