const sub =()=>{
    let a=document.getElementById('inp').value
    let b=document.getElementById('c1').value
    let c=document.getElementById('c2').value
    let d=Number(b)
    let e=Number(c)
    console.log(a,b,c)
    if(b==c){
        document.getElementById('inp1').value=a
    }
    else if(b=="INR" && c=="DOLLOR"){
        document.getElementById('inp1').value=a/82.6
        
    }
    else if(b=="INR" && c=="EURO"){
        document.getElementById('inp1').value=a/87.83
        
    }
    else if(b=="INR" && c=="POUND"){
        document.getElementById('inp1').value=a/102.11
        
    }
    else if(b=="INR" && c=="YEN"){
        document.getElementById('inp1').value=a/1.64
    }
    else if(b=="DOLLOR" && c=="INR"){
        document.getElementById('inp1').value=a*82.6
        
    }
    else if(b=="DOLLOR" && c=="POUND"){
        document.getElementById('inp1').value=a/0.81
    }
    else if(b=="DOLLOR" && c=="yen"){
        document.getElementById('inp1').value = a*132.4;
        
    }
    else if(b=="POUND" && c=="INR"){
        document.getElementById('inp1').value=a*102.4
        
    }
    else if(b=="POUND" && c=="DOLLOR"){
        document.getElementById('inp1').value=a*1.24
        
    }
    else if(b=="POUND" && c=="YEN"){
        document.getElementById('inp1').value=a*167
        
    }
    else if(b=="POUND" && c=="EURO"){
        document.getElementById('inp1').value=a*1.76
        
    }
    else if(b=="EURO" && c=="INR"){
        document.getElementById('inp1').value=a*87.7
        
    }
    else if(b=="EURO" && c=="DOLLOR"){
        document.getElementById('inp1').value=a*1.06
    }
    else if(b=="EURO" && c=="POUND"){
        document.getElementById('inp1').value=a/0.86
    }
    else if(b=="EURO" && c=="YEN"){
        document.getElementById('inp1').value=a*43.8
    }
    else if(b=="YEN" && c=="INR"){
        document.getElementById('inp1').value=a/0.61
    }
    else if(b=="YEN" && c=="DOLLOR"){
        document.getElementById('inp1').value=a/0.0074
    }
    else if(b=="YEN" && c=="POUND"){
        document.getElementById('inp1').value=a*0.0064
    }
    else if(b=="YEN" && c=="EURO"){
        document.getElementById('inp1').value=a/0.0069
    }
}