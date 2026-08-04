const h1=document.querySelector(".timer")

setInterval(() => {
    let date=new Date()
    let hour=date.getHours()
    let min=date.getMinutes()
    let second=date.getSeconds()
    if(hour<10){
        h1.innerText=`0${hour}:${min}:${second}`
    }else{
        h1.innerText=`${hour}:${min}:${second}`
    }
    if(min<10){
        h1.innerText=`${hour}:0${min}:${second}`
    }else{
        h1.innerText=`${hour}:${min}:${second}`
    }
    if(second<10){
        h1.innerText=`${hour}:${min}:0${second}`
    }else{
        h1.innerText=`${hour}:${min}:${second}`
    }
}, 1000);
