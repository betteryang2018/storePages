$(document).ready(function(){
  
/*弹出层效果*/
function popupDiv(div_id) {
    var div_obj = $("#" + div_id);
    //添加并显示遮罩层
    $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
    //fadeIn() 方法使用淡入效果来显示被选元素
    div_obj.css({ "top": 0, "left": 0 }).fadeIn();
}

function hideDiv(div_id) {
    $("#mask").remove();
    //fadeOut() 方法使用淡出效果来隐藏被选元素
    $("#" + div_id).fadeOut();

}   

// 当li被点击,>=1024px弹出层叠轮播图 
var ww=$(window).width();
    console.log(ww);

    // 当窗口宽度>=1024,显示pop-div1
    if(ww>=1024){
        $('.popUpBtnWrap ul li').click(function() {
            popupDiv('pop-div1');
        });
    }

    // 当窗口宽度<1024,显示pop-div2
    if(ww<1024){
        $('.popUpBtnWrap ul li').click(function() {
            var popDiv2Content=$(this).children('img');
            popupDiv('pop-div2');
        });
    }

// 当退出按钮被点击，退出弹出层

$('.pop-top .loginOut').click(function() {
    hideDiv('pop-div1');
    hideDiv('pop-div2');
});


});