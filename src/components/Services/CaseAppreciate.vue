<template>
    <div>
        <news-list 
            typeId="caseAppreciate" 
            :mediaReportData='caseAppList'></news-list>
    </div>
</template>

<script>
    import NewsList from '../News/VerticalList.vue' 
    export default{
        data(){
            return {
                caseAppList:[
                     {
                        month: "12-22",
                        year: "2017",
                        images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/62.jpg",
                        title: "案例赏析",
                        synopsis: "激作用111，使胃痛加剧。胃炎胃溃疡导致的胃痛，达是最佳之选。",
                        essay_id: 1
                    },
                ]    
            }
        },
        components:{
            NewsList
        }
    }
</script>
<style lang="">
    
</style>