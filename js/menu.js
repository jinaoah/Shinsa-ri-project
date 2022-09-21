window.addEventListener('scroll', () => { 

    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
    console.log(window.scrollX, window.scrollY);

});

const logoBtn = document.querySelector('.logo');

const homeBtn = function (logoBtn) {
    
}

//window.scrollX, scrollY
//0 682.4000244140625 -> 전류
//0 1359.199951171875 -> 안주류
//0 2072 -> 주류