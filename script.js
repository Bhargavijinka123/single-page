let AC=prompt('air conditioners')


if(AC==10000){
    document.getElementById('price').innerHTML="This is a normal ac"
    document.getElementById('ab').style.display="block"
}
else if(AC==20000){
    document.getElementById('price').innerHTML="This is a mid level  ac"
    document.getElementById('cd').style.display="block"
}
else if(AC==50000){
    document.getElementById('price').innerHTML="This is a exellent  ac"
    document.getElementById('ef').style.display="block"

}

else{
    document.getElementById('price').innerHTML="we do not have anything on this price"
    document.getElementById('pq').style.display="block"

}