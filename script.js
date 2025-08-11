let btn=document.querySelector("#box");
let current="dark";
let p=document.querySelector("body");
btn.addEventListener("click",()=>{
    if(current==="dark")
    {
        current="light";
        p.classList.add("dark");
        p.classList.remove("light");
    }
    else{
        current="dark";
       p.classList.add("light");
       p.classList.remove("dark");
    }
    console.log(current);
})