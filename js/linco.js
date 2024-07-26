$(function(){

    // 滑動至頂
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 指定捲軸位置淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#goTop').stop().fadeTo('fast', 1);
        } else {
            $('#goTop').stop().fadeOut('fast');

        }
    });

    //選取加上外框 
    $('.card').click(function(){
        $(this).toggleClass('active');
    });

    

    $('.MessageTitle').click(function(){
        $('.right-panel-detail').addClass('active');
    });
    // $('.MessageTitle').click(function(){
    //     $('.right-panel-list').addClass('hidden');
    //     $('.left-panel').addClass('hidden');
    //     $('.right-panel-detail').addClass('active');
    // });

    
})

// 啟用jq smoove及共用設定(獨立放在外面)
$('.smoove').smoove({
    offset: '30%'
});

// 透視載入
$('.smoove-z').smoove({
    moveZ : '-500px',
    rotateX : '90deg',
    moveY : '100px'
});

// 打開對話窗
function showPanelDetail() {
    document.getElementById('rightPanelDetail').style.display = 'block';
}

function hidePanelDetail() {
    document.getElementById('rightPanelDetail').style.display = 'none';
}
