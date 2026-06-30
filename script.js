const msgs=[
"😂 Nice try! But your wife disabled that option. ❤️",
"😜 Error 404: No option not found.",
"💕 Your destiny is YES!",
"🏃 Catch me if you can!"
];
let i=0;
function moveNo(){
 const b=document.getElementById('no');
 b.style.position='absolute';
 b.style.left=Math.random()*250+'px';
 b.style.top=Math.random()*150+'px';
 i=(i+1)%msgs.length;
 document.getElementById('funny').innerText=msgs[i];
}
function showLove(){
 document.getElementById('letter').style.display='block';
}
