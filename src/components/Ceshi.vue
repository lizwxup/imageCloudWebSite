<template>
    <div>
            content
    </div>
</template>
<script>
     export default{
         data () {
             return {

             }
         },
         mounted () {
            console.log(store.getters.doneTodos)
         },
     }   
</script>