function planbar(bar,percent,sold,sell,sum) {
  var wrap = document.getElementById('wrap1')
  var planBar = document.getElementsByClassName(bar)[0];
  var percent1 = wrap.getElementsByClassName(percent)[0];
  var sold1 = wrap.getElementsByClassName(sold)[0];
  var percent2 = wrap.getElementsByClassName(percent)[1];
  var sold2 = wrap.getElementsByClassName(sold)[1];
  percent1.innerHTML = ((parseFloat(sell)/parseFloat(sum))*100).toFixed(2)  + '%'  ;
  percent2.innerHTML = percent1.innerHTML
  sold1.innerHTML = sell;
  sold2.innerHTML = sell;
  planBar.style.width = percent1.innerHTML;
}
