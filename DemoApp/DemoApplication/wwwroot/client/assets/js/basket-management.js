


let addBtns = document.querySelectorAll(".add-product-to-basket-btn");

addBtns.forEach(a => a.addEventListener("click", function (e) {
    e.preventDefault();
    fetch(e.target.href)
        .then(response => response.text())
        .then(data => {
            $('.cart-block').html(data);
        })
}));




let deleteBtns = document.querySelectorAll(".remove-product-to-basket-btn")

deleteBtns.forEach(d => d.addEventListener("click", function (e) {
    e.preventDefault();
    fetch(e.target.href)
        .then(response => response.text())
        .then(data => {
            $('.cart-block').html(data);
        })
    
}))



//$(document).on("click", ".single-btn", function (e) {
//    e.preventDefault();

//    fetch(e.target.href)
//        .then(response => response.text())
//        .then(data => {
//            $('.cart-block').html(data);
//        })

//});
