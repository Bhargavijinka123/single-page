let label=document.getElementById('in')
let button=document.getElementById('any')
let span=document.getElementById('inp')
const print = () => {
    if(label.value==100){
        console.log('we have chocolates on this price')
        span.innerHTML="we have chocolates on this price"
        // alert('we have chocolates on this price')
        span.style.color="green"

    }
    else if(label.value==200){
        console.log('we have biscuits on this price')
        span.innerHTML="we have biscuits on this price"
        // alert('we have biscuits on this price')
        span.style.color="green"

        
    }
    else if(label.value==300){
        console.log('we have bingo on this price')
        span.innerHTML="we have bingo on this price"
        // alert('we have bingo on this price')
        span.style.color="green"


        
    }
    else{
        console.log('we donnot have anything on this price')
        span.innerHTML="we don't have anything on this price"

        span.style.color="red"

    }
}