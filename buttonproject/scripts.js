btn1 = document.getElementById('btn1')
btn2 = document.getElementById('btn2')
text = document.getElementById('h1')


count = 0

btn1.addEventListener('click', ()=>{
    if(count < 10){
        count += 1
        text.innerHTML = count
    }
})

btn2.addEventListener('click', ()=>{
    if (count > 0){
        count -= 1
        text.innerHTML = count 
    }
})