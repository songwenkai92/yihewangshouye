var sWidth = $('.hqxlist').width();
var len = $('.hqxlist').length;
var index = 0;
function move(index) {
  var nowLeft = -sWidth*index;
  $(".hqx").animate({"left":nowLeft},300)
}
$(document).ready(function () {
  $("#topbtnr").click(function () {
    index += 1;
    if(index > len-1){
      index = len-1
    };
    move(index)
  })
  $("#topbtnl").click(function () {
    index -= 1;
    if(index < 0){
      index = 0
    };
    move(index)
  })
})
