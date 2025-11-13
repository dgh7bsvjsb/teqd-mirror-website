var timer = null;
var i = 0, o = 0;

function LB1() {
    $('.partner_center .num').html("");
    $(".partner_center").find('.img li.img-clone').remove();
    for (var j = 0; j < $(".partner_center").find('.img li').length; j++) { //创建圆点
        $('.partner_center .num').append('<li></li>')
    }
    if (i == $(".partner_center").find('.img li').length) {
        $(".partner_center").find('.num li').eq(0).addClass('active'); //给第一个圆点添加样式
    } else {
        $(".partner_center").find('.num li').eq(i).addClass('active'); //给第一个圆点添加样式
    }

    var firstimg = $(".partner_center").find('.img li').first().clone(); //复制第一张图片
    $(firstimg).addClass("img-clone")
    $(".partner_center").find('.img').append(firstimg).width($(".partner_center").find('.img li').length * ($(".partner_center").find('.img li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.next').click(function () {
        i++;
        if (i == $(".partner_center").find('.img li').length) {
            i = 1; //这里不是i=0
            $(".partner_center").find('.img').css({
                left: 0
            }); //保证无缝轮播，设置left值
        }
        ;

        $(".partner_center").find('.img').stop().animate({
            left: -i * ($(".partner_center").find('.img li').width())
        }, 1000);
        if (i == $(".partner_center").find('.img li').length - 1) { //设置小圆点指示
            $(".partner_center").find('.num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $(".partner_center").find('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $(".partner_center").find('.img li').length - 2;
            $(".partner_center").find('.img').css({
                left: -($(".partner_center").find('.img li').length - 1) * ($(".partner_center").find('.img li').width())
            });
        }
        $(".partner_center").find('.img').stop().animate({
            left: -i * ($(".partner_center").find('.img li').width())
        }, 1000);
        $(".partner_center").find('.num li').eq(i).addClass('active').siblings().removeClass('active');
    })

    //设置按钮的显示和隐藏
    $('.partner_center .banner_img').hover(function () {
        $('.btn').show();
    }, function () {
        $('.btn').hide();
    })

    //鼠标划入圆点
    $('.partner_center .num li').mouseover(function () {
        var _index = $(this).index();
        $(".partner_center").find('.img').stop().animate({
            left: -_index * ($(".partner_center").find('.img li').width())
        }, 1000);
        $('.partner_center .num li').eq(_index).addClass('active').siblings().removeClass('active');
        i=_index;
        if (timer) {
            clearInterval(timer);
        }
        // setTimer();
    })
    $('.partner_center .num li').mouseout(function () {
        setTimer();
    })


    //定时器自动播放
    function setTimer(){
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            i++;
            if (i == $(".partner_center").find('.img li').length) {
                i = 1;
                $(".partner_center").find('.img').css({
                    left: 0
                });
            }
            $(".partner_center").find('.img').stop().animate({
                left: -i * ($(".partner_center").find('.img li').width())
            }, 1000);
            if (i == $(".partner_center").find('.img li').length - 1) {
                $('.partner_center .num li').eq(0).addClass('active').siblings().removeClass('active');
            } else {
                $('.partner_center .num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }, 2000)
    }
    setTimer();

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.partner_center .banner_img_div').mouseover(function () {
        clearInterval(timer);
        console.info("1",(new Date()).getTime())
    })
    $('.partner_center .banner_img_div').mouseout(function () {
        console.info("2",(new Date()).getTime())
        setTimer();
    })
}


function LB2() {

    $('.partner_center1 .num').html("");
    $(".partner_center1").find('.img li.img-clone').remove();
    for (var j = 0; j < $(".partner_center1").find('.img li').length; j++) { //创建圆点
        $('.partner_center1 .num').append('<li></li>');
    }
    // $('.partner_center1 .num li').eq(o).addClass('active'); //给第一个圆点添加样式
    if (o == $(".partner_center1").find('.img li').length) {
        $(".partner_center1").find('.num li').eq(0).addClass('active'); //给第一个圆点添加样式
    } else {
        $(".partner_center1").find('.num li').eq(o).addClass('active'); //给第一个圆点添加样式
    }
    var firstimg = $(".partner_center1").find('.img li').first().clone(); //复制第一张图片
    $(firstimg).addClass("img-clone")
    $(".partner_center1").find('.img').append(firstimg).width($(".partner_center1").find('.img li').length * ($(".partner_center1").find('.img li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度

    // 下一个按钮
    $('.next').click(function () {
        o++;
        if (o == $(".partner_center1").find('.img li').length) {
            o = 1; //这里不是i=0
            $(".partner_center1").find('.img').css({
                left: 0
            }); //保证无缝轮播，设置left值
        }
        ;

        $(".partner_center1").find('.img').stop().animate({
            left: -o * ($(".partner_center1").find('.img li').width())
        }, 1000);
        if (o == $(".partner_center1").find('.img li').length - 1) { //设置小圆点指示
            $('.partner_center1 .num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $('.partner_center1 .num li').eq(o).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prev').click(function () {
        o--;
        if (o == -1) {
            o = $(".partner_center1").find('.img li').length - 2;
            $(".partner_center1").find('.img').css({
                left: -($(".partner_center1").find('.img li').length - 1) * ($(".partner_center1").find('.img li').width())
            });
        }
        $(".partner_center1").find('.img').stop().animate({
            left: -o * ($(".partner_center1").find('.img li').width())
        }, 1000);
        $('.partner_center1 .num li').eq(o).addClass('active').siblings().removeClass('active');
    })

    //设置按钮的显示和隐藏
    $('.partner_center1  .banner_img').hover(function () {
        $('.btn').show();
    }, function () {
        $('.btn').hide();
    })

    $('.partner_center1 .num li').mouseover(function () {
        var _index = $(this).index();
        $(".partner_center1").find('.img').stop().animate({
            left: -_index * ($(".partner_center1").find('.img li').width())
        }, 1000);
        $('.partner_center1 .num li').eq(_index).addClass('active').siblings().removeClass('active');
        o=_index;
        if (timer) {
            clearInterval(timer);
        }
        // setTimer();
    })
    $('.partner_center1 .num li').mouseout(function () {
        setTimer();
    })

    //定时器自动播放
    function setTimer(){
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
           o++;
            if (o == $(".partner_center1").find('.img li').length) {
                o = 1;
                $(".partner_center1").find('.img').css({
                    left: 0
                });
            }
            $(".partner_center1").find('.img').stop().animate({
                left: -o * ($(".partner_center1").find('.img li').width())
            }, 1000);
            if (o == $(".partner_center1").find('.img li').length - 1) {
                $('.partner_center1 .num li').eq(0).addClass('active').siblings().removeClass('active');
            } else {
                $('.partner_center1 .num li').eq(o).addClass('active').siblings().removeClass('active');
            }
        }, 2000)
    }
    setTimer();

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.partner_center1 .banner_img_div').mouseover(function () {
        clearInterval(timer);
        console.info("1",(new Date()).getTime())
    })
    $('.partner_center1 .banner_img_div').mouseout(function () {
        console.info("2",(new Date()).getTime())
        setTimer();
    })


}
