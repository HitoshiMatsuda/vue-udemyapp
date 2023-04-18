export const mixInObj = {
    data: function(){
        return {
        title:"mixIn",
        data1: "data1",
        data2: "data2",
        data3: "data3"
        }
    },
    created(){
        console.log("created in mixin")
    }
}