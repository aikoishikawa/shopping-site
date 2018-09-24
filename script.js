$(document).ready(function(){
    $("#sp_navi_btn").click(function(){
        $(".sp_navi_li").slideToggle();
    });
    $("#list_img img").click(function(){
        var img_src = $(this).attr("src");
        $("#display_img img").attr("src", img_src);
    });
});