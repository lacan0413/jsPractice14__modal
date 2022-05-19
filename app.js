let imageBox = document.querySelectorAll('.image-box');
let modals = document.querySelector('.modals');
let modalsMask = document.querySelector('.modals__mask');
let modalsCover = document.querySelector('.modals img');


//imageBox Array (using forEach)
imageBox.forEach(function (element) {
    //取得每個觸發區塊內的 img src
    let coverSrc = element.querySelector('img').src;

    //增加每個觸發區塊的點擊事件
    element.addEventListener('click', function () {
        //幫彈出視窗增加active樣式
        modals.classList.toggle('active');
        //修改彈出視窗內圖片的src字串
        modalsCover.src = coverSrc;
    });
});

//增加遮罩區塊的點擊事件，讓他在點擊時刪除彈出視窗的active樣式
modalsMask.addEventListener('click', function () {
    modals.classList.toggle('active');
});