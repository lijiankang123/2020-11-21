// tab切换

function tabCtrl(ele) {
  $(ele + '>.tabContents .tabContent').hide().eq(0).show();
  $(ele + ' >.tabs .tab').eq(0).addClass('active');
  $(ele + ' >.tabs .tab').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass('active')) {
          return;
      }
      $(this).addClass('active').siblings().removeClass('active');
      var me = $(this);
      var index = 0;
      $(ele + ' .tabs .tab').each(function (i) {
          if (me.get(0) === $(this).get(0)) {
              index = i;
          }
      });
      $(ele + ' >.tabContents >.tabContent').hide().eq(index).fadeIn();
  });
}
/* 首页 */
tabCtrl('.part1');
tabCtrl('.part2');

/* 个人主页 */
//tabCtrl('.article');

// tab切换
function tabCtrl1(ele) {
    $(ele + '>.tabContents .tabContent').hide().eq(0).show();
    $(ele + ' >.tabs .tab').eq(0).addClass('active');
    $(ele + ' >.tabs .tab').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        var me = $(this);
        var index = 0;
        $(ele + ' .tabs .tab').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' >.tabContents >.tabContent').hide().eq(index).fadeIn();
        /* if($(ele + ' >.tabs .tab').eq(0).hasClass('active')){
            $('.fly_show').css('height','440px');
        }else{
            $('.fly_show').css('height','520px');
        } */
    });
  }
  tabCtrl1('.fly_show');

  $("img").error(function(){
    $(this).attr('src','http://static.madisonboom.com/nopic.jpg');
    return true;
  })

$(function(){

  $("#loginaction").click(function(){
    $.get($(this).attr('data-url'),function(res){
      $('body').append(res);
    });
    
    return false;
  })

  $("button.fabu").click(function(){
    
    $.post('/index/user/quick_news_run',$("#quick_news_run").serialize(),function(res){
      layer.msg(res.msg)
      if(res.code>0){
        $("#quick_news_run")[0].reset();
      }
      console.log(res);
    },'json')
  })

})




function needlogin(){
  $.get('/index/user/login',function(res){
    $('body').append(res);
  });  
  return false;
}

  