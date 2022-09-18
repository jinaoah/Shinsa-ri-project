window.addEventListener('scroll', () => { 

    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
    console.log(window.scrollX, window.scrollY);

});

let firstSection = document.querySelector('.first-group');
let secondSection = document.querySelector('.second-group');
let thirdSection = document.querySelector('.third-group');

console.log(firstSection)
console.log(secondSection)
console.log(thirdSection)

$(window).on("wheel", function(e) {
    
}

//window.scrollX, scrollY
//0 682.4000244140625 -> 전류
//0 1359.199951171875 -> 안주류
//0 2072 -> 주류