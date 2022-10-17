
// 1.関数の定義
function setHeight() {
    let vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // 2.初期化
  setHeight();
  
  // 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
  window.addEventListener('resize', setHeight);


  // 読み込み完了後にページが表示される
window.onload = function () {  

    const target = document.getElementById('wrapper');
    const target2 = document.getElementById('loader_box');
    target2.style.opacity = '0';
    setTimeout(function(){
      scrollTo(0,0);
      target.style.visibility = 'visible';
      setTimeout(function(){
        target.style.opacity = '1';
        target2.style.display = "none";
      },500);
    },500);
    
    }
