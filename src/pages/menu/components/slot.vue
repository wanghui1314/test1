<template>
<div>
    我是slot 要使用作用于插槽
    <slot :data='data'></slot>
</div>
</template>
<script>
export default {
components:{
 },
data () {
 return {
     data:'aaabbbb1111'
 }
},
methods:{
},
mounted(){
}
}
</script>
<style scoped>
</style>