

if (window.innerWidth > 767){
  var offset_headerH = 20;
} else {
  var offset_headerH = 0;
}


function setHeader() {

  const target3 = document.querySelector('.slideshow');
  var hgh = -1 *  target3.offsetHeight + 70 + offset_headerH
  
  document.documentElement.style.setProperty('--hgh', `${hgh}px`);
}

setHeader();
  
// 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
window.addEventListener('resize', setHeader);


(function() {
    
    let vh = document.documentElement.clientHeight ;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;    

    function onScroll() {
      const target = document.getElementById('header-box3');
      const target3 = document.querySelector('.slideshow');
      
      if (window.scrollY >= target3.offsetHeight - (70 + offset_headerH ) ) {
        target3.classList.add('fixed');
      } else {
        target3.classList.remove('fixed');
        if (lastPosition > offset) {
          target.classList.add('show');
        } else {

        }
        offset = lastPosition;
      }
      if (lastPosition == 0){
        target.classList.remove('show');
      }
  }
  
    window.addEventListener('scroll', function(e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();


