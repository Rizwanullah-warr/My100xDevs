let ctr=0;
function callback(){    

   // document.querySelectorAll("h2")[1].innerHTML=ctr;
   const el=document.querySelectorAll("h2")[1];
   el.innerHTML=ctr


    ctr=ctr+1;
    //console.log(ctr);

}
setInterval(callback, 1000);