var h = document.getElementById('header');
var bar = document.getElementById('bar');
var u = document.getElementById('upgrade');

var info = document.getElementById('info')
var main = document.getElementById('main')

var money = 0;
var count = 0;
var level = 1;
var shop = [{"name":"click","base":1,"b_added":1,"price":25,"p_added":10}]
var max = 20;
var added = 25;

bar.max = max;
u.innerHTML = "Upgrade Click (💰"+shop[0]["price"]+")"

function click() {
  money += shop[0]["base"];
  count += shop[0]["base"];
  h.innerHTML = "💰 "+money+ " ⭐ "+level;
  bar.value = count;
  
  if (count > max-1){
    count = 0;
    level += 1
    bar.value = 0;
    max += added;
    bar.max = max;
  }
}

function buy(item){
  if (item == 0){
    if (money > shop[item]["price"]-1){
      shop[item]["base"] += shop[item]["b_added"]
      money -= shop[item]["price"]
      shop[item]["price"] += shop[item]["p_added"]
      h.innerHTML = "💰 "+money+ " ⭐ "+level;
      u.innerHTML = "Upgrade Click (💰"+shop[0]["price"]+")"
    }
  }
}

function toggleDiv(){
  main.style.display = 'block'
  info.style.display = 'none'
}