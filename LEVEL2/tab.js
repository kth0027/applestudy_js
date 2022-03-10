/*
버튼 누르면
- 모든 버튼에 붙은 orange 클래스명 제거
- 버튼0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 추가
*/

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// var 버튼 = $('.tab-button');
// var 컨텐트 = $('.tab-content');

// 버튼.eq(0).on('click', function(){
//     버튼.removeClass('orange');
//     버튼.eq(0).addClass('orange');
//     컨텐트.removeClass('show');
//     컨텐트.eq(0).addClass('show');
// });

// for ( let i = 0; i < 3; i++) {
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     });
// }

// for (let i = 0; i < 3; i++) {
//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i)
//     });
// }

// $('.list').click(function (e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         탭열기(0)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         탭열기(1)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2]) {
//         탭열기(2)
//     }

// })

// function 탭열기(숫자) {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(숫자).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(숫자).addClass('show');
// }

$('.list').click(function (e) {
    탭열기(e.target.dataset.id);

})

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}



