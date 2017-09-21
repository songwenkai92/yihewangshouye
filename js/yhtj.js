$(document).ready(function () {
  $('.yhtjlist').hover(function () {
    $(this).css("background","#fff");
    $(this).find($(".yhtjpic")).css("border","2px solid #ffdb5e")
  },function () {
    $(this).css("background","none");
    $(this).find($(".yhtjpic")).css("border","2px solid #fff")
  })
})
