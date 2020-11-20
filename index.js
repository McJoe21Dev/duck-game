var h = document.getElementById('header');
var bar = document.getElementById('bar');
var u = document.getElementById('upgrade');

var info = document.getElementById('info')
var main = document.getElementById('main')

var ud = [{"m":0,"c":0,"l":1}]
var shop = [{"name":"click","base":1,"b_added":1,"price":25,"p_added":10}]
var max = 20;
var added = 25;

bar.max = max;
u.innerHTML = "Upgrade Click (💰"+shop[0]["price"]+")"

function click() {
  ud[0]["m"] += shop[0]["base"];
  ud[0]["c"] += shop[0]["base"];
  h.innerHTML = "💰 "+ud[0]["m"]+" ⭐ "+ud[0]["l"];
  bar.value = ud[0]["c"];
  
  if (ud[0]["c"] > max-1){
    ud[0]["c"] = 0;
    ud[0]["l"] += 1
    bar.value = 0;
    max += added;
    bar.max = max;
  }
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
}

function playgame(){
  main.style.display = 'block'
  info.style.display = 'none'
}