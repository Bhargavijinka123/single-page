let label=document.getElementById('in')
let button=document.getElementById('any')
let span=document.getElementById('inp')
let div=document.getElementById('ma')
const print = () => {
    if(label.value==100){
        console.log('we have chocolates on this price')
        span.innerHTML="we have chocolates on this price"
        // alert('we have chocolates on this price')
        span.style.color="white"
        div.style.backgroundImage="url(https://images.unsplash.com/photo-1614338143359-470838a54a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"
        div.style.backgroundPosition="center"
        div.style.backgroundRepeat="norepeat"
        div.style.backgroundSize="cover"



    }
    else if(label.value==200){
        console.log('we have biscuits on this price')
        span.innerHTML="we have biscuits on this price"
        // alert('we have biscuits on this price')
        span.style.color="black"
        div.style.backgroundImage="url(https://images.unsplash.com/photo-1551584277-a31a25e08fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
        div.style.backgroundPosition="center"
        div.style.backgroundRepeat="norepeat"
        div.style.backgroundSize="cover"

        
    }
    else if(label.value==300){
        console.log('we have bingo on this price')
        span.innerHTML="we have bingo on this price"
        // alert('we have bingo on this price')
        span.style.color="black"
        div.style.backgroundImage="url(https://images.unsplash.com/photo-1612773843298-44dcdd45d865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"
        div.style.backgroundPosition="center"
        div.style.backgroundRepeat="norepeat"
        div.style.backgroundSize="cover"


        
    }
    else{
        console.log('we donnot have anything on this price')
        span.innerHTML="we don't have anything on this price"

        span.style.color="red"
        div.style.backgroundImage="url()"
        div.style.backgroundPosition="center"
        div.style.backgroundRepeat="norepeat"
        div.style.backgroundSize="cover"

    }
}