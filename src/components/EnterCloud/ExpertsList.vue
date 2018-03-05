<template>
    <div class="block">
        <div class="el-title">专家团队</div>
        <div class="el-sub-title">ZHUAN JIA TUAN DUI</div>
        <div class="el-bg">
            <div class="el-sidebg">
                <div class="el-imageArrowsLeft" @click="leftRmove()"></div>
            </div>

            <div class="el-centerbg" id="el-list">
                <div class="el-centerbgA" id="el-listA">
                    <div class="el-expertsBg" v-for="(item, index) in data.items">
                        <div v-if="index%2==0">
                            <div>
                                <div class="el-expertImg" @mouseover="elOver(index)">
                                    <img src="http://img05.tooopen.com/images/20140326/sy_57640132134.jpg" width="100%"
                                         height="100%"/>
                                    <span class="imgMengBan"></span>
                                </div>
                            </div>
                            <div class="el-expertName">
                                {{item.name}} {{item.other}}
                            </div>
                        </div>
                        <div v-else>
                            <div class="el-expertName">
                                {{item.name}} {{item.other}}
                            </div>
                            <div>
                                <div class="el-expertImg" @mouseover="elOver(index)">
                                    <img src="http://img05.tooopen.com/images/20140326/sy_57640132134.jpg" width="100%"
                                         height="100%"/>
                                    <span class="imgMengBan"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="el-sidebg">
                <div class="el-imageArrowsRight" @click="rightRmove()"></div>
            </div>
        </div>
        <div class="el-content-left"><img src="../../assets/shangyinhao.png" height="40" width="40"/></div>
        <div class="el-content-center" id="el-detail">{{data.items[0].detail}}</div>
        <div class="el-content-right"><img src="../../assets/xiayinhao.png" height="40" width="40"/></div>
    </div>

</template>
<script>
    //message指接收参数为导航栏的下标
    export  default{
// 声明 props
        data (){
            return {
                data: {
                    items: [
                        {img: '../assets/ins1.png', name: '郭1涛', other: '主任医师', detail: "主任医师 西京医院主治医生1"},
                        {img: '../assets/img1.png', name: '郭2涛', other: '主任医师', detail: "主任医师 西京医院主治医生2"},
                        {img: '../assets/img1.png', name: '郭3涛', other: '主任医师', detail: "主任医师 西京医院主治医生3"},
                        {img: '../assets/img1.png', name: '郭4涛', other: '主任医师', detail: "主任医师 西京医院主治医生4"},
                        {img: '../assets/img1.png', name: '郭5涛', other: '主任医师', detail: "主任医师 西京医院主治医生5"},
                        {img: '../assets/img1.png', name: '郭6涛', other: '主任医师', detail: "主任医师 西京医院主治医生6"},
                        {img: '../assets/img1.png', name: '郭7涛', other: '主任医师', detail: "主任医师 西京医院主治医生7"},
                        {img: '../assets/img1.png', name: '郭8涛', other: '主任医师', detail: "主任医师 西京医院主治医生8"}
                    ],
                    index:0,
                    left:0,
                }
            }
        },
        methods: {
            leftRmove (){

                var ellistA  = document.getElementById("el-listA");
                var leftnum =  ellistA.style.left ;
                console.log(leftnum);
                if(leftnum&&leftnum!=(0 + "px"))
                {
                    this.data.index = ++this.data.index;
                    ellistA.style.left =  240*this.data.index + "px";
                }
            },
            rightRmove (){
                var ellistA  = document.getElementById("el-listA");
                var rightnum =  ellistA.style.left;

                console.log(rightnum);
                if (this.data.items.length>5&&rightnum!=((this.data.items.length-5)*(-240)+'px'))
                {
                    this.data.index = --this.data.index;
                    ellistA.style.left =  240*this.data.index + "px";
                }
            },
            elOver (index)
            {
                var mengBanFather = document.getElementById("el-list");
                var mengBans = mengBanFather.getElementsByTagName("span");
                var elDttail = document.getElementById('el-detail');


                elDttail.innerHTML = this.data.items[index].detail;
                for (var i = 0; i < mengBans.length; i++) {
                    var mengBan = mengBans[i];
                    if (i == index) {
                        mengBan.style.opacity = 0;
                    } else {
                        mengBan.style.opacity = 0.7;
                    }
                }
            }
        }
    }
</script>
<style>
    .block {
        float: left;
        width: 100%;
    }

    .el-title {
        font-size: 28px;
        margin-top: 16px;
    }

    .el-sub-title {
        font-size: 26px;
        font-weight: bold;
        color: #e0e0e0;
    }

    .el-bg {
        width: 1360px;
        margin-left: auto;
        margin-right: auto;
    }

    .el-sidebg {
        float: left;
        width: 80px;
        height: 500px;
        text-align: center;
    }

    .el-imageArrowsLeft {
        background-image: url("../../assets/sel_jiantouLeft.png");
        margin-top: 210px;
        width: 80px;
        height: 80px;
    }

    .el-imageArrowsLeft:hover {
        background-image: url("../../assets/jiantouLeft.png");

    }

    .el-imageArrowsRight {
        background-image: url("../../assets/sel_jiantouRight.png");
        margin-top: 210px;
        width: 80px;
        height: 80px;
    }

    .el-imageArrowsRight:hover {
        background-image: url("../../assets/jiantouRight.png");
    }

    .el-centerbg {
        float: left;
        width: 1200px;
        height: 500px;
        display: inline;
        overflow: hidden;
        position: relative;
        display: inline;
        overflow: hidden;
        position: relative;
    }

    .el-centerbgA {
        position: absolute;
        width: auto;
        height: 500px;
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
    }

    .el-expertsBg {
        float: left;
        width: 240px;
        height: 500px;
        border: solid 1px lightgray;

    }

    .el-expertImg {
        width: 240px;
        height: 400px;
        background-color: gray;
        position: relative;
    }

    .imgMengBan {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 400px;
        background-color: #000000;
        opacity: 0.7;
    }

    .el-expertName {
        width: 240px;
        height: 100px;
        background-color: white;
        color: #000000;
        text-align: center;
        line-height: 100px;
        font-size: 18px;
    }

    .el-content-left {
        clear: both;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        padding-top: 40px;
    }

    .el-content-center {
        font-size: 24px;
        line-height: 30px;
    }

    .el-content-right {
        clear: both;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: right;
        margin-bottom: 40px;
    }

</style>