const sub =()=>{
let a=document.getElementById('fl').value
let b=document.getElementById('ln').value
let c=document.getElementById('em').value
let d=document.getElementById('la').value
let e=document.getElementById('qu').value
let f=document.getElementById('ay').value
console.log(a,b,c,d,e,f);

if(a==''&& b==''&& c==''&&d==''&&e==''&&f==''){
    alert('fill the form')
}
else{
    alert('submitted successfully')
}

}