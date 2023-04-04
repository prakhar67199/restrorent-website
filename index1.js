 const navIconEl=document.querySelector('.nav-icon');
 const navCloseEl= document.querySelector('.nav-close');
 const navList=document.querySelector('.nav-list');
 const navBgOverlayEl=document.querySelector('.nav-bgOverlay');
 
const navOpen = () =>
{
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    // to stop scroll feature
    document.body.style='visibility: visible; height:100vh; width:100vw; overflow: hidden;'
}

const navClose =()=>
{
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    // to unstop scroll feature
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;'
}

navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);
navBgOverlayEl.addEventListener('click',navClose);

// aos
AOS.init(
    {
        offset:200,
        delay:100,
        duration:400,
        easing:'ease',
        once:false,
        mirror:false,
        anchorPlacement:'top-bottom'
    }
);