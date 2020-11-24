var h = document.getElementById('header');
var bar = document.getElementById('bar');
var u = document.getElementById('upgrade');
var sl = document.getElementById('skiplevel');

var info = document.getElementById('info')
var main = document.getElementById('main')

var ud = [{"m":0,"c":0,"l":1}]
var shop = [{"name":"click","base":1,"b_added":1,"price":25,"p_added":10}]
var max = 20;
var added = 25;

bar.max = max;

function click(){
  ud[0]["m"] += shop[0]["base"];
  ud[0]["c"] += shop[0]["base"];
  h.innerHTML = "💰 "+ud[0]["m"]+" ⭐ "+ud[0]["l"];
  bar.value = ud[0]["c"];
  sl.innerHTML = "Skip Level! (💰"+((max*2)-ud[0]["c"])+")"
  
  if (ud[0]["c"] > max-1){
    ud[0]["c"] = 0;
    ud[0]["l"] += 1
    bar.value = 0;
    max += added;
    bar.max = max;
  }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){click();}
}

function buy(item){
  if (item == 0){
    if (ud[0]["m"] > shop[item]["price"]-1){
      shop[item]["base"] += shop[item]["b_added"]
      ud[0]["m"] -= shop[item]["price"]
      shop[item]["price"] += shop[item]["p_added"]
      h.innerHTML = "💰 "+ud[0]["m"]+ " ⭐ "+ud[0]["l"];
      u.innerHTML = "Upgrade Click (💰"+shop[0]["price"]+")"
    }
  }
  if (item == 1){
    if (ud[0]["m"] > (max*2)-ud[0]["c"]){
      ud[0]["l"] += 1
      ud[0]["m"] -= (max*2)-ud[0]["c"]
      h.innerHTML = "💰 "+ud[0]["m"]+ " ⭐ "+ud[0]["l"];
      sl.innerHTML = "Skip Level! (💰"+((max*2)-ud[0]["c"])+")"
    }
  }
}

function playgame(){
  main.style.display = 'block'
  info.style.display = 'none'
}