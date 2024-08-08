const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=='clear'){
            display.innerText='';
        }
        else if(item.id=='backspace'){
            let st=display.innerText.toString();
            display.innerText=st.substr(0,st.length-1)
        }
        else if(display.innerText!='' && item.id=='equal'){
            let s=eval(display.innerText).toString();
            if(display.innerText.includes('/')){
                display.innerText=eval(display.innerText).toFixed(11);
            }
            else if(s.length>13){
                display.innerText=eval(display.innerText).toFixed(11);
            }
            else{
            display.innerText=eval(display.innerText)
            }
        }
        else if(display.innerText=='' && item.id=='equal'){
            display.innerText='Empty!';
            setTimeout(()=>(display.innerText=' '),2000);
        }
        else{
            display.innerText+=item.id;
        }
    }
})
const themebtn=document.querySelector('.theme-toggler');
const calc=document.querySelector('.calculator');
const togicon=document.querySelector('.toggler-icon');
let isdark=true;
themebtn.onclick=()=>{
    calc.classList.toggle('dark');//for background
    themebtn.classList.toggle('active');//for icon switch
    isdark=!isdark;
}