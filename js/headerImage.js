(function() {
    let vh = document.documentElement.clientHeight ;
    const height     = vh-70;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;

    function onScroll() {
        const target = document.getElementById('header-box3');
        const target2 = document.getElementById('header-box1');
        if (lastPosition > height) {
          target2.style.opacity = '1';
          
        } else {
          if (lastPosition > offset) {
            target.classList.add('show');
          } else {
          }
          target2.style.opacity = '0';
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


