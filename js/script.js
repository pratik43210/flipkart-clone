let currentScroll=0;
let scrollAmt=1516;

const sItems=document.querySelector('.section-2-items');
const hScroll=document.querySelector('.horizontal-scroll');
const btnScrollLeft=document.querySelector('#btn-scroll-left-1');
const btnScrollRight=document.querySelector('#btn-scroll-right-1');


let maxScroll=-sItems.offsetWidth +hScroll.offsetWidth;

function scrollHorizontally(val){
    currentScroll+=(val*scrollAmt);

    if(currentScroll>0){
        currentScroll=0;
        btnScrollLeft.style.opacity="0";
    }else{
        btnScrollLeft.style.opacity="1";
    }

    if(currentScroll<maxScroll){
        currentScroll=maxScroll;
        btnScrollRight.style.opacity="0";
    }else{
        btnScrollRight.style.opacity="1";
    }
    
    sItems.style.left=currentScroll+ "px";
}

btnScrollLeft.addEventListener("click",()=>{scrollHorizontally(1)});
btnScrollRight.addEventListener("click",()=>{scrollHorizontally(-1)});
