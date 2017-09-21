$('.jyzcclose').eq(0).hide();
$('.jyzcopen').eq(0).show();
$(document).ready(function () {
  $('#close2').hover(function () {
    $(".jyzcclose").show();
    $('.jyzcopen').hide();
    $('#close2').hide();
    $('#open2').show()
  })
  $('#close3').hover(function () {
    $(".jyzcclose").show();
    $('.jyzcopen').hide();
    $('#close3').hide();
    $('#open3').show()
  })
  $('#close1').hover(function () {
    $(".jyzcclose").show();
    $('.jyzcopen').hide();
    $('#close1').hide();
    $('#open1').show()
  })
})
