<template>
    <el-row :gutter="0" style="width:1208px;margin:0 auto;">
        <el-col :span="24">
            <span class="title weight">影像设备</span>
            <div class="split clearfix"></div>
            <span class="subtitle weight">YING XIANG SHE BEI</span>
            <div class="bottom clearfix"></div>
        </el-col>
        <el-col :span="6" v-for="(o, index) in list" :key="index" :offset="(index+1) % 3 ==1 ? 2 : 1" style="margin-bottom:30px;" >
            <el-card :body-style="{ padding: '0px'}" >
                <img :src="o.imgUrl" class="image">
                <div style="padding: 14px; background-color:#f6f6f6 ">
                    <span class="name">{{ o.name }}</span>
                    <div class="bottom clearfix">
                    <time class="type">{{ o.type }}</time>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    import src from '@/assets/eq1.png'
    export default {
        data() {
            return {
                list: [
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src},
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src},
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src},
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src},
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src},
                    {name: "UCT 760",type: "联影时空 128CT",imgUrl:src}
            ]};
        }
    }
</script>
<style>
    .title{
        font-size: 28px;
        color: #243a61 !important;
    }
    .subtitle{
        font-size: 26px;
        color: #999;
    }
    .name {
        font-size: 16px;
        color: #999;
    }
    .type {
        font-size: 16px;
        color: #999;
    }

    .split {
        margin-top: 5px;
        line-height: 5px;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .image {
        width: 100%;
        display: block;
    }

    .vl-item-date:before,
    .vl-item-date:after {
        display: table;
        content: "";
    }

    .vl-item-date:after {
        clear: both
    }
</style>
