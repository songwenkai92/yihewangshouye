$('.hyzxcon').eq(0).show()
$('.hyzxtit ul li').eq(0).addClass('active')
var myDate = new Date();
var year = myDate.getFullYear();
var month =("0" + (myDate.getMonth() + 1)).slice(-2)
var day = myDate.getDate();
$(document).ready(function () {
  $('.year').text(year);
  $('.day').text(month+'.'+day)
  $('.hyzxtit ul li').click(function () {
    $('.hyzxtit ul li').removeClass('active').eq($(this).index()).addClass('active');
    $('.hyzxcon').hide().eq($(this).index()).show();
  })
})
