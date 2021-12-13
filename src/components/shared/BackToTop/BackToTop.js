import React from 'react';
import './BackToTop.css';
const BackToTop = () => {
    let backtotop=document.getElementsByClassName('backtotop');
    window.addEventListener('scroll',function(){
        if(this.scrollY>300){
            backtotop[0].style.display='block';
        }
        else{
            backtotop[0].style.display='none';
        }
    })
    const goToTop=()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }
    return (
        <div className='backtotop' onClick={goToTop}>
            <i className="fas fa-angle-up"></i>
        </div>
    );
};

export default BackToTop;