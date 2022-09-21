// window.addEventListener('scroll', () => { 
//     //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
//     console.log(window.scrollX, window.scrollY);

// });
//window.scrollX, scrollY
//0 682.4000244140625 -> 전류
//0 1359.199951171875 -> 안주류
//0 2072 -> 주류

//스크롤 시 섹션 이동
//스크롤 시 섹션 이동
window.onload = function(){
    const elm = document.querySelectorAll('.group');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        // const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }