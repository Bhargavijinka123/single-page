const calc=(fun)=>{
    
   let a=document.getElementById('fn').value
   let b=document.getElementById('sn').value

   let c=Number(a)
   let d=Number(b)
console.log(c,d)
if(fun=="plus"){
    document.getElementById('to').value=c+d
}
else if(fun=="minus"){
    document.getElementById('to').value=c-d
}
else if(fun=="divide"){
    document.getElementById('to').value=c/d
}
else if(fun=="percent"){
    document.getElementById('to').value=c%d
}
else if(fun=="multiply"){
    document.getElementById('to').value=c*d
}




    console.log(a,b)
}