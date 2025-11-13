


// var userUrl = "http://192.168.2.141:57511"
// var userUrl = "http://192.168.2.160:8851"
var userUrl = "https://users.zkey.cc"
var GetImgCodeUrl = userUrl + "/api/Login/GetImgCode";

var LoginSubmit2Url = userUrl + "/api/Login/LoginSubmitCodeJsonp";

var LoginOutUrl = userUrl + "/api/Login/LoginOut";

var RegisterSMSUrl = userUrl + "/api/Login/RegisterSMS";

var RegisterSubmitUrl = userUrl + "/api/Login/RegisterSubmit";

var GetTypeList = "/api/article/category/list";

var GetPublicList = "/api/article/list";

var GetDetailsUrl = "/api/article/info";


var TypeName = GetUrlVarValue("TypeName");
var NewsID = GetUrlVarValue("NewsID");
var CGtype = GetUrlVarValue("CGtype");
var UStype = GetUrlVarValue("UStype");
var NewsId = GetUrlVarValue("NewsId");



// var tips;
// var suspensionWidth= $('.bottom_information_area').width();
// $('.suspension_1').on({
//     mouseenter:function(){
//         var that = this;
//         tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding: 15px'> <p>北京市西城区马甸桥裕民路18号北环中心A座1502</p><p>中科易研（北京）科技有限公司</p></div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
//     },
//     mouseleave:function(){
//         layer.close(tips);
//     }
// });
//
//
// $('.suspension_2').on({
//     mouseenter:function(){
//         var that = this;
//         tips =layer.tips("<div style='text-align: center;padding-top: 5px'> <img src='/images/code.jpg' alt=''/></div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
//     },
//     mouseleave:function(){
//         layer.close(tips);
//     }
// });
//
//
// $('.suspension_3').on({
//     mouseenter:function(){
//         var that = this;
//         tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding: 35px'>010-56036485</div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
//     },
//     mouseleave:function(){
//         layer.close(tips);
//     }
// });
//
//
// $('.suspension_4').on({
//     mouseenter:function(){
//         var that = this;
//         tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding: 35px'>zhl@zkey.cc</div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
//     },
//     mouseleave:function(){
//         layer.close(tips);
//     }
// });

function GetUrlRelativePath()
{
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
    return relUrl;
}


if(isMobile()){
    console.log(document.domain);
    window.location.href="https://m.zkey.cc"+GetUrlRelativePath();
}

function isMobile() {
    var mobile_flag = false;
    var screen_width = document.body.clientWidth;

    //根据屏幕分辨率判断是否是手机
    if(screen_width < 800){
        mobile_flag = true;
    }

    return mobile_flag;
}



window.onload=function(){

    if(window.location.pathname=="/index.html"){
        $(".header_1").addClass("nav_center_select");
        $(".header_1").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/solve_eduInstitutions.html"){
        $(".header_3").addClass("nav_center_select");
        $(".header_3").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/solve_govDepartment.html"){
        $(".header_3").addClass("nav_center_select");
        $(".header_3").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/SuccessfulCases.html"){
        $(".header_4").addClass("nav_center_select");
        $(".header_4").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/DataFederation.html"){
        $(".header_6").addClass("nav_center_select");
        $(".header_6").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/aboutUs.html"){
        $(".header_7").addClass("nav_center_select");
        $(".header_7").siblings("li").removeClass("nav_center_select");
    }else if(window.location.pathname=="/news.html"){
      $(".header_8").addClass("nav_center_select");
      $(".header_8").siblings("li").removeClass("nav_center_select");
  }



    // 点击登录
    $(".Login").click(function () {
       var loginIndex= layer.open({
            type: 1,
            area:["872px","446px"],
            shade: false,
            closeBtn:0,
            shade:0.8,
            shadeClose:false,
            title: false, //不显示标题
            content: '<div style="width: 46px;height: 150px;position: fixed;background-image: url(\'/images/cancel.png\');z-index:  10000;right: 0;top: -150px;background-repeat:  no-repeat;"><div class="cancel" style="width: 40px;height: 40px;cursor: pointer"></div></div><div style="height: 446px;background-image: url(\'/images/loginBG.png\');background-repeat: no-repeat;position: relative">\n' +
                '        <div class="login_show" style="position: absolute;width: 315px;height: 300px;top: 37px;left: 61px;">\n' +
                '            <div style="width: 100px;letter-spacing:3px;text-align: center;margin: 0 auto">登录</div>\n' +
                '            <input class="UserName" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="账号/手机号/邮箱" type="text">\n' +
                '            <input class="Userpwd"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="密码" type="password">\n' +
                '            <div style="position: relative"><input class="ImgCode" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="验证码" type="text"><cite style="position: absolute;right: 20px;top: 22px"><img class="VCode" title="看不清，点击刷新" style="cursor: pointer;height: 30px;margin-bottom: -10px;margin-left: 30px" src="" alt=""/></cite></div>\n' +
                '            <div style="font-size: 12px;margin-top: 20px">\n' +
                '                <input class="IsCookie" type="checkbox" checked="checked">\n' +
                '                <span style="color: #666666;margin-left: 5px">记住我</span>\n' +
                '                <span style="color: #1f71ff;margin-left: 180px;cursor: pointer">忘记密码？</span>\n' +
                '            </div>\n' +
                '            <div class="loginBtn" style="width: 100%;height: 34px;text-align: center;color: #fff;line-height: 34px;background: linear-gradient(90deg, #3a59f0 20%, #9871fa 80%);margin: 20px auto;cursor: pointer;border-radius: 3px">\n' +
                '                登录\n' +
                '            </div>\n' +
                '        </div>\n' +




                '        <div class="Register_show" style="position: absolute;width: 315px;height: 300px;top: 37px;left: 61px;display: none">\n' +
                '            <div style="width: 100px;letter-spacing:3px;text-align: center;margin: 0 auto">注册</div>\n' +
                '            <input class="phoneNums" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="手机号/邮箱" type="text">\n' +
                '            <div style="position: relative"><input class="ImgCode" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="验证码" type="text"><span class="phoneSMS" style="position: absolute;right: 20px;top: 30px;font-size: 12px;color: #1f71ff;cursor: pointer">获取验证码</span></div>\n' +
                '            <input class="PassWord"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="密码" type="password">\n' +
                '            <input class="PassWord_Confirm"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="再次输入密码" type="password">\n' +
                '            <div style="font-size: 12px;margin-top: 20px">\n' +
                '                <input class="IsCookie" type="checkbox" checked="checked">\n' +
                '                <span style="color: #666666;margin-left: 5px">我已阅读并同意《用户协议》</span>\n' +
                '            </div>\n' +
                '            <div class="submitBtn" style="width: 100%;height: 34px;text-align: center;color: #fff;line-height: 34px;background: linear-gradient(90deg, #3a59f0 20%, #9871fa 80%);margin: 20px auto;cursor: pointer;border-radius: 3px">\n' +
                '                提交\n' +
                '            </div>\n' +
                '        </div>\n' +




                '        <div style="width: 200px;height: 200px;position: absolute;top: 135px;left: 62%;text-align: center">\n' +
                '            <img src="/images/logintitle.png" alt="">\n' +
                '            <div class="login_part"><div style="color: #fff;font-size: 12px;margin-top: 20px">尚未注册易研用户</div><div class="RegisterNow" style="width: 95px;height: 25px;line-height: 25px;border-radius: 20px;font-size: 14px;text-align: center;margin: 20px auto;color: #1f71ff;background: #fff;cursor: pointer">立即注册<span> > </span> </div></div><div class="Register_part" style="display: none"><div style="color: #fff;font-size: 12px;margin-top: 20px">已有账号？</div><div class="goLogin" style="width: 95px;height: 25px;line-height: 25px;border-radius: 20px;font-size: 14px;text-align: center;margin: 20px auto;color: #1f71ff;background: #fff;cursor: pointer">前往登录<span> > </span> </div></div>\n' +
                '        </div>\n' +
                '    </div>',
        });


       $("body").on("click",".cancel",function () {
           layer.close(loginIndex)
       })


        var rem = $.cookie('username');
        if(rem){
            $(".IsCookie").prop("checked",true);
            $(".UserName").val($.cookie("username"));
        }

        $(".VCode").attr("src",GetImgCodeUrl);
        $(".VCode").click(function(){
            $(".VCode").attr("src",GetImgCodeUrl+'?t='+new Date().getTime());
        })


    })



    var tips;
    var suspensionWidth= $('.bottom_information_area').width();
    $('.suspension_1').on({
        mouseenter:function(){
            var that = this;
            tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding: 15px'><p>北京市朝阳区广渠路66号院8号楼百环青创大厦三层303室</p><p>中科易研（北京）科技有限公司</p></div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
        },
        mouseleave:function(){
            layer.close(tips);
        }
    });


    $('.suspension_2').on({
        mouseenter:function(){
            var that = this;
            tips =layer.tips("<div style='text-align: center;padding-top: 5px'> <img src='/images/code.jpg' alt=''/></div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
        },
        mouseleave:function(){
            layer.close(tips);
        }
    });


    $('.suspension_3').on({
        mouseenter:function(){
            var that = this;
            tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding-top: 15px'><div style=\"margin-top: 5px\">政府事业部</div><div style=\"margin-top: 5px\">姜楠：17718588044</div><div style=\"margin-top: 5px\">教育事业部</div><div style=\"margin-top: 5px\">邵秀娟：17813169798</div><div style=\"margin-top: 5px\">全流程数据服务</div><div style=\"margin-top: 5px\">邵秀娟：17813169798</div></div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '220px'],time:0});
        },
        mouseleave:function(){
            layer.close(tips);
        }
    });


    $('.suspension_4').on({
        mouseenter:function(){
            var that = this;
            tips =layer.tips("<div style='color:#fff;text-align: center;font-size: 14px;padding: 35px'>zhl@zkey.cc</div>",that,{tips:[3,'rgb(58, 89, 240,0.9)'], area: [suspensionWidth+'px', '100px'],time:0});
        },
        mouseleave:function(){
            layer.close(tips);
        }
    });

}


$(function () {

    // if (tokenId && userId) {
    //     $(".Login").hide();
    //     $(".LoginUserName").show().css("display","inline-block");
    //     $(".LoginUserName").html(NickName);
    //     $(".loginOut").html("退出");
    // }


    function loginEvent(){
        $(".loginBtn").attr("disabled","disabled").html("登录中")
        var UserName=$(".UserName").val();
        var Userpwd=$(".Userpwd").val();
        var ImgCode=$(".ImgCode").val();
        var IsCookie="";
        if($(".IsCookie").prop("checked")){
            IsCookie=true;
            save_cookies();
        }else{
            IsCookie=false;
        }

        $.ajax({
            url:LoginSubmit2Url,
            type: 'GET',
            dataType: "jsonp",
            jsonp: 'callback',
            data:{
                "UserName":UserName,
                "PassWord":Userpwd,
                "Code":ImgCode,
                "IsCookie":IsCookie,
            },

            success: function (data) {

                console.log(data);

                if(data.status == -1) {
                    layer.msg('账号或密码错误')
                } else if(data.status == 1) {
                    layer.msg('审核未通过')
                } else if(data.status == 2) {
                    layer.confirm('您没有注册,是否进行注册', {
                        btn: ['确定', '取消']
                    }, function() {
                        window.location.href = 'https://users.zkey.cc/Register?url=https://www.zkey.cc'
                    })
                } else if(data.status == 3) {
                    layer.confirm('您没有绑定手机号,是否进行绑定', {
                        btn: ['确定', '取消']
                    }, function() {
                        window.location.href = 'https://users.zkey.cc/Login/BindingMobile?url=https://www.zkey.cc'
                    })
                } else if(data.status == 4) {
                    layer.confirm('首次登录，需修改密码', {
                        btn: ['确定', '取消']
                    }, function() {
                        window.location.href = 'https://users.zkey.cc/ForgotPwd?url=https://www.zkey.cc'
                    })
                } else if(data.status == 5) {
                    layer.msg('该平台不对外开放')
                } else if(data.status == 0) {
                    layer.msg('登录成功，正在跳转...');
                    setTimeout(function () {
                        window.location.reload();
                    },500)

                }
                $(".loginBtn").removeAttr("disabled").html("登录");
            }
        });
    }

    $("body").on("click",".loginBtn",function () {
        var a = $(this).attr("disabled");
        var UserName=$(".UserName").val();
        var Userpwd=$(".Userpwd").val();
        var ImgCode=$(".ImgCode").val();
        var reg=/^(?=^.{8,30}$)(?=.*\d)(?=.*[A-Za-z])(?!.*\n).*$/;
        if(a!="disabled"){
            if(!UserName || UserName.length<6 || UserName.length>30){
                layer.msg('用户名长度必须在6-30之间');
                return false;
            }else if(!Userpwd || reg.test(Userpwd)==false){
                layer.msg('密码长度必须在8到30之间,必须包含数字、字母（区分大小写）');
                return false;
            }else if(!ImgCode || ImgCode.length!=4){
                layer.msg('请输入4位验证码');
                return false;
            }else{
                loginEvent();
            }
        }
    })


    //登录回车时件
    $("body").keydown(function(event) {
        if (event.keyCode == "13") {//keyCode=13是回车键
            var a = $(".loginBtn").attr("disabled");
            var UserName=$(".UserName").val();
            var Userpwd=$(".Userpwd").val();
            var ImgCode=$(".ImgCode").val();
            var reg=/^(?=^.{8,30}$)(?=.*\d)(?=.*[A-Za-z])(?!.*\n).*$/;
            if(a!="disabled"){
                if(!UserName || UserName.length<6 || UserName.length>30){
                    layer.msg('用户名长度必须在6-30之间');
                    return false;
                }else if(!Userpwd || reg.test(Userpwd)==false){
                    layer.msg('密码长度必须在8到30之间,必须包含数字、字母（区分大小写）');
                    return false;
                }else if(!ImgCode || ImgCode.length!=4){
                    layer.msg('请输入4位验证码');
                    return false;
                }else{
                    loginEvent();
                }
            }
        }
    });


    function save_cookies(){
        if($(".IsCookie").prop("checked")){
            var username = $(".UserName").val();
            $.cookie("username",username,{expires:7 });
        }else{
            $.cookie("username","",{ expires:-1 });
        }
    };


    $(".loginOut").click(function () {
        if($(this).html()=="退出"){
            layer.confirm('是否确认退出用户', {
                title:"提示",
                btn: ['确认', '取消'] //按钮
            }, function () {
                $.ajax({
                    type: 'POST',
                    url: LoginOutUrl,
                    data: {
                        "TokenId": tokenId,
                        "UserId": userId
                    },
                    success: LoginOutCallBack
                })

                function LoginOutCallBack() {
                    window.location.reload();
                }

            }, function () {
                layer.msg('取消退出');
            });
        }else if($(this).html()=="注册"){
            var loginIndex= layer.open({
                type: 1,
                area:["872px","446px"],
                shade: false,
                closeBtn:0,
                shade:0.8,
                shadeClose:false,
                title: false, //不显示标题
                content: '<div style="width: 46px;height: 150px;position: fixed;background-image: url(\'/images/cancel.png\');z-index:  10000;right: 0;top: -150px;background-repeat:  no-repeat;"><div class="cancel" style="width: 40px;height: 40px;cursor: pointer"></div></div><div style="height: 446px;background-image: url(\'/images/loginBG.png\');background-repeat: no-repeat;position: relative">\n' +
                    '        <div class="login_show" style="position: absolute;width: 315px;height: 300px;top: 37px;left: 61px;display: none">\n' +
                    '            <div style="width: 100px;letter-spacing:3px;text-align: center;margin: 0 auto">登录</div>\n' +
                    '            <input class="UserName" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="账号/手机号/邮箱" type="text">\n' +
                    '            <input class="Userpwd"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="密码" type="password">\n' +
                    '            <div style="position: relative"><input class="ImgCode" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="验证码" type="text"><cite style="position: absolute;right: 20px;top: 22px"><img class="VCode" title="看不清，点击刷新" style="cursor: pointer;height: 30px;margin-bottom: -10px;margin-left: 30px" src="" alt=""/></cite></div>\n' +
                    '            <div style="font-size: 12px;margin-top: 20px">\n' +
                    '                <input class="IsCookie" type="checkbox" checked="checked">\n' +
                    '                <span style="color: #666666;margin-left: 5px">记住我</span>\n' +
                    '                <span style="color: #1f71ff;margin-left: 180px;cursor: pointer">忘记密码？</span>\n' +
                    '            </div>\n' +
                    '            <div class="loginBtn" style="width: 100%;height: 34px;text-align: center;color: #fff;line-height: 34px;background: linear-gradient(90deg, #3a59f0 20%, #9871fa 80%);margin: 20px auto;cursor: pointer;border-radius: 3px">\n' +
                    '                登录\n' +
                    '            </div>\n' +
                    '        </div>\n' +

                    '        <div class="Register_show" style="position: absolute;width: 315px;height: 300px;top: 37px;left: 61px;">\n' +
                    '            <div style="width: 100px;letter-spacing:3px;text-align: center;margin: 0 auto">注册</div>\n' +
                    '            <input class="phoneNums" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="手机号/邮箱" type="text">\n' +
                    '            <div style="position: relative"><input class="ImgCode" style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="验证码" type="text"><span class="phoneSMS" style="position: absolute;right: 20px;top: 30px;font-size: 12px;color: #1f71ff;cursor: pointer">获取验证码</span></div>\n' +
                    '            <input class="PassWord"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="密码" type="password">\n' +
                    '            <input class="PassWord_Confirm"  style="width: 100%;height: 34px;margin-top: 20px;text-indent: 1em;border-radius: 3px;border: 1px solid #DBDBDB;outline:none;" placeholder="再次输入密码" type="password">\n' +
                    '            <div style="font-size: 12px;margin-top: 20px">\n' +
                    '                <input class="IsCookie" type="checkbox" checked="checked">\n' +
                    '                <span style="color: #666666;margin-left: 5px">我已阅读并同意《用户协议》</span>\n' +
                    '            </div>\n' +
                    '            <div class="submitBtn" style="width: 100%;height: 34px;text-align: center;color: #fff;line-height: 34px;background: linear-gradient(90deg, #3a59f0 20%, #9871fa 80%);margin: 20px auto;cursor: pointer;border-radius: 3px">\n' +
                    '                提交\n' +
                    '            </div>\n' +
                    '        </div>\n' +


                    '        <div style="width: 200px;height: 200px;position: absolute;top: 135px;left: 62%;text-align: center">\n' +
                    '            <img src="/images/logintitle.png" alt="">\n' +
                    '            <div class="login_part" style="display: none"><div style="color: #fff;font-size: 12px;margin-top: 20px">尚未注册易研用户</div><div class="RegisterNow" style="width: 95px;height: 25px;line-height: 25px;border-radius: 20px;font-size: 14px;text-align: center;margin: 20px auto;color: #1f71ff;background: #fff;cursor: pointer">立即注册<span> > </span> </div></div><div class="Register_part"><div style="color: #fff;font-size: 12px;margin-top: 20px">已有账号？</div><div class="goLogin" style="width: 95px;height: 25px;line-height: 25px;border-radius: 20px;font-size: 14px;text-align: center;margin: 20px auto;color: #1f71ff;background: #fff;cursor: pointer">前往登录<span> > </span> </div></div>\n' +
                    '        </div>\n' +
                    '    </div>',
            });


            $("body").on("click",".cancel",function () {
                layer.close(loginIndex)
            })


            var rem = $.cookie('username');
            if(rem){
                $(".IsCookie").prop("checked",true);
                $(".UserName").val($.cookie("username"));
            }
            $(".VCode").attr("src",GetImgCodeUrl);
            $(".VCode").click(function(){
                $(".VCode").attr("src",GetImgCodeUrl+'?t='+new Date().getTime());
            })
        }
    })


    $(".solve_plan").on("mouseover", function(){
        $(".head-dropdown").show();
    });

    $(".solve_plan").on("mouseout", function(){
        $(".head-dropdown").hide();
    });



    $(".head-dropdown").on("click", function(e){
        e.stopPropagation();
    });



    $(".solve_plan1").on("mouseover", function(){
        $(".head-dropdown1").show();
    });

    $(".solve_plan1").on("mouseout", function(){
        $(".head-dropdown1").hide();
    });



    $(".solve_plan2").on("mouseover", function(){
        $(".head-dropdown5").show();
    });

    $(".solve_plan2").on("mouseout", function(){
        $(".head-dropdown5").hide();
    });



    $(".solve_plan4").on("mouseover", function(){
      $(".head-dropdown7").show();
  });

  $(".solve_plan4").on("mouseout", function(){
      $(".head-dropdown7").hide();
  });


    $(".otherTab").on("mouseover", function(){
        $(".head-dropdown2").show();
    });

    $(".otherTab").on("mouseout", function(){
        $(".head-dropdown2").hide();
    });

    $(".datagl").on("mouseover", function(){
        $(".head-dropdown3").show();
    });

    $(".datagl").on("mouseout", function(){
        $(".head-dropdown3").hide();
    });


    $(".dataCj").on("mouseover", function(){
        $(".head-dropdown4").show();
    });

    $(".dataCj").on("mouseout", function(){
        $(".head-dropdown4").hide();
    });



    $(".head-dropdown1").on("click", function(e){
        e.stopPropagation();
    });


    $(".wkf1").click(function () {
        layer.msg("本平台主要采用爬虫技术协助科研人员采集互联网上的各种数据，暂未公开开放注册，如有需要联系010-56036480。",{time:8000});
    })


    $(".wkf2").click(function () {
        layer.msg("利用拖拽等高效便捷的方式生成报告模块，有效满足用户批量报告产出需求。报告自动化平台的优点在于：\n" +
            "1.标准化了图表和表格的模式，同时美化了报告；\n" +
            "2.减少人为因素所产生的错误，报告生成效率提高，大大降低了成本。\n" +
            "目前该平台未开放注册，如有需要敬请联系010-56036480",{time:8000});
    })



    $("body").on("click",".RegisterNow",function () {
        $(".login_part").hide();
        $(".Register_part").show();
        $(".login_show").hide();
        $(".Register_show").show();
    })




    $("body").on("click",".goLogin",function () {
        $(".login_part").show();
        $(".Register_part").hide();
        $(".login_show").show();
        $(".Register_show").hide();
    })


    // 获取验证码（手机或邮箱）
    $("body").on("click",".phoneSMS",function () {
        var THIS=this;
        var RegistrationWay= $(this).parents(".Register_show").find(".phoneNums").val();
        // 验证满足手机号码格式还是邮箱格式
        if(/^1[34578]\d{9}$/.test(RegistrationWay)){
            var disabled = $(THIS).attr("disabled");
            if (disabled) {
                return false;
            }
            $.ajax({
                type: 'POST',
                url: RegisterSMSUrl,
                data: {
                    "TokenId": tokenId,
                    "UserId": userId,
                    "Phone": RegistrationWay,
                    "Email":""
                },
                success: function (data) {
                    if (data.status == 200) {
                        settimes()
                    }

                }
            })

        }else if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(RegistrationWay)){
            var disabled = $(THIS).attr("disabled");
            if (disabled) {
                return false;
            }
            $.ajax({
                type: 'POST',
                url: RegisterSMSUrl,
                data: {
                    "TokenId": tokenId,
                    "UserId": userId,
                    "Phone": "",
                    "Email":RegistrationWay
                },
                success: function (data) {
                    if (data.status == 200) {
                        settimes()
                    }

                }
            })
        }else{
            layer.msg("请输入正确的手机号码或邮箱");
        }
    })

    var countdowns = 60;
    function settimes() {
        if (countdowns == 0) {
            $(document).find(".phoneSMS").attr("disabled", false);
            $(document).find(".phoneSMS").css({
                "cursor": "pointer",
                "color": "#F79172",
                "border-color": "#F79172"
            })
            $(document).find(".phoneSMS").html("获取验证码");
            countdowns = 60;
            return false;
        } else {
            $(document).find(".phoneSMS").attr("disabled", true);
            $(document).find(".phoneSMS").html("重新发送(" + countdowns + ")");
            $(document).find(".phoneSMS").css({
                "cursor": "not-allowed",
                "color": "#666",
                "border-color": "#666"
            })
            countdowns--;
        }
        setTimeout(function () {
            settimes();
        }, 1000);
    }


    //注册提交
    $("body").on("click",".submitBtn",function () {

        var RegistrationWay= $(this).parents(".Register_show").find(".phoneNums").val();
        var Code=$(this).parents(".Register_show").find(".ImgCode").val();
        var PassWord=$(this).parents(".Register_show").find(".PassWord").val();
        var PassWord_Confirm=$(this).parents(".Register_show").find(".PassWord_Confirm").val();

        if(/^1[34578]\d{9}$/.test(RegistrationWay)){
            $.ajax({
                type: 'POST',
                url: RegisterSubmitUrl,
                data: {
                    "TokenId": tokenId,
                    "UserId": userId,
                    "Phone": RegistrationWay,
                    "Email":"",
                    "Code":Code,
                    "PassWord":PassWord,
                    "PassWord_Confirm":PassWord_Confirm
                },
                success: function (data) {
                    if (data.status == 200) {
                        layer.msg("注册成功！");
                        $(".login_part").show();
                        $(".Register_part").hide();
                        $(".login_show").show();
                        $(".Register_show").hide();
                    }

                }
            })
        }else if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(RegistrationWay)){
            $.ajax({
                type: 'POST',
                url: RegisterSubmitUrl,
                data: {
                    "TokenId": tokenId,
                    "UserId": userId,
                    "Phone": "",
                    "Email":RegistrationWay,
                    "Code":Code,
                    "PassWord":PassWord,
                    "PassWord_Confirm":PassWord_Confirm
                },
                success: function (data) {
                    if (data.status == 200) {
                        layer.msg("注册成功！");
                        $(".login_part").show();
                        $(".Register_part").hide();
                        $(".login_show").show();
                        $(".Register_show").hide();
                    }

                }
            })
        }


    })








})


$("body").on("mouseover",".news",function () {
    $(this).css("background","linear-gradient(rgba(255,0,0,0),rgba(58,89,240,0.16))")
})

$("body").on("mouseout",".news",function () {
    $(this).css("background","none")
})

function GetUrlVarValue(name) {
    //var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function html2text(html) {
    var text=""
    if(html){
        text=$("<div></div>").html(html).text();
    }
    return text;
}

function transformTimestamp(timestamp) {
  let a = new Date(timestamp).getTime();
  const date = new Date(a);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  const dateString = Y + M + D;
  return dateString;
}
