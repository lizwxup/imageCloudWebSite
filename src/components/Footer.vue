<template>
    <div class="block">
        <div class="footerBG">
            <div class="footer">
                <div class="leftBG">
                    <div class="leftL">
                        <div class="foot-title">关于</div>
                        <div class="subTitle">关于我们</div>
                        <div class="subTitle">加入我们</div>
                        <div class="subTitle">专家团队</div>
                    </div>
                    <div class="leftL">
                        <div class="foot-title">服务</div>
                        <div class="subTitle">服务条款</div>
                        <div class="subTitle">隐私协议</div>
                    </div>
                    <div class="leftL">
                        <div class="foot-title">产品</div>
                        <div class="subTitle">远程阅片</div>
                        <div class="subTitle">影像中心</div>
                        <div class="subTitle">FAQ</div>
                    </div>
                </div>
                <div class="centerLine"></div>
                <div class="rightBG">
                    <div style="display:flex;">
                         <div class="phoneIcon">
                            <img src="@/assets/phoneIcon.png" width="100%" height="100%">
                        </div>
                        <div class="phone">
                            400-9951120
                        </div>    
                    </div>
                    <div style="display:flex;">
                        <div class="Code">
                            <img src="@/assets/weixinCode.png" width="100%" height="100%">
                        </div>
                        <div class="IconBg">
                                <div class="icon">
                                    <img src="@/assets/wechatIcon.png" width="100%" height="100%">
                                </div>
                                <div class="iconTitle">
                                    微信
                                </div>
                        </div>
                        <div class="Code">
                            <img src="@/assets/weiboCode.png" width="100%" height="100%">
                        </div>
                        <div class="IconBg">
                            <div class="icon">
                                <img src="@/assets/weiboIcon.png" width="100%" height="100%">
                            </div>
                            <div class="iconTitle">
                                微博
                            </div>
                        </div>
                    </div>                          
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .footerBG
    {
        width: 100%;
        height: 330px;
        background-color: #29354B;
    }
    .footer
    {
        width: 70%;
        height: 330px;
        margin-left: auto;
        margin-right: auto;
    }
    .phoneIcon img{
        width:40px;
    }
    .leftBG
    {

        float: left;
        /*padding-left: 5%;*/
        /*padding-right: 5%;*/
        width: 50%;
        height: 260px;
        margin-top: 35px;
    }
    .centerLine
    {
        float: left;
        width: 1px;
        height:260px;
        margin-top: 35px;
        background-color: #8c939d;
    }
    .rightBG
    {
        float: left;
        width: 49%;
        height: 260px;
        margin-top: 35px;
    }
    .leftL
    {
        float: left;
        width: 33.333%;
        height: 260px;
    }
    .foot-title
    {
        float: left;
        width: 100%;
        height: 65px;
        line-height: 65px;
        text-align: center;
        color: white;
        font-size: 18px;
        font-weight: 800;
    }
    .subTitle
    {
        float: left;
        width: 100%;
        height: 65px;
        line-height:65px;
        text-align:center;
        color:white;
        font-size:16px;
    }
    .phoneIcon
    {
        float: left;
        padding-left: 15%;
        width: 40px;
        height: 43px;
        margin-top: 30px;
    }
    .phone
    {
        float: left;
        width: 70%;
        height: 55px;
        font-size: 48px;
        font-weight: 500;
        color: white;
        line-height: 55px;
        margin-top: 25px;
        margin-left: 65px;
        text-align: left;
    }
    .Code
    {
        float: left;
        padding-left: 10%;
        /*width: 100px;*/
        height: 100px;
        margin-top: 30px;
    }
    .IconBg
    {
        float: left;
        height: 100px;
        width: 60px;
        margin-top: 30px;
        margin-left: 10px;
    }
    .icon
    {
        float: left;
        width: 50px;
        height: 50px;
        margin: 5px 5px;
    }
    .iconTitle {
        float: left;
        width: 60px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        font-size: 16px;
    }
</style>