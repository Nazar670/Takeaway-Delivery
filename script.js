$(document).ready(function(){
    $('ul.menu-list a').each(function () {
    if (this.href == location.href) $(this).parent().addClass('act');
    });
    });
    

    var header = $("header");
    var scrollChange = 50;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= scrollChange) {
            header.addClass('header-fixed');
        } else {
            header.removeClass("header-fixed");
        }
    });

    $(document).ready(function() {
        $('.header-burger').click(function(event) {
            $('.header-burger,.header-menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });
console.log('nazar');

$('.modal_open').click(function (e) {
    e.preventDefault();
    var popup_show = $('#modal');
    $(popup_show).addClass('show');
    $('body').addClass('body-lock');
    
    $('#modal .popup_close').click(function (e) {
        e.preventDefault();
        $(popup_show).removeClass('show');
        $('body').removeClass('body-lock');
    });
    
    
});

const cartWrapper = document.querySelector('.cart-wrapper');
//Add products to basket//
window.addEventListener('click', function (event) { 
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.product-card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.burger1-img').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            price: card.querySelector('.card-price').innerText,
            count: card.querySelector('[data-counter]').innerText,
        }
        
        
        
        
        

        const cartItemHTML = `<div class="product-card" data-id="01">
        <div class="product-flex">
            <div class="product-img">
                <img src="img/burger-dreams.svg" alt="" class="burger1-img">
            </div>
            <div class="product-details">
                <div class="product-content1">
                    <div class="card-title card-title-margin1">${productInfo.title}</div>
                        <div class="card-price">$ 9.20 USD</div>
                </div>
                <div class="product-content2">
                    <div class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
                <div class="product-content3">
                    <div data-counter class="product-count">1</div>
                    <button data-cart-remove class="product-button-delete">Delete</button>
                </div>
            </div>
        </div>
        </div> `;

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        const cardsIn = document.querySelector('.cart-wrapper');
        
        
        const cartnumber = document.querySelector('.item-count');
        cartnumber.innerHTML = cardsIn.children.length;
        
        window.addEventListener('click', function (event) {
            if (event.target.hasAttribute('data-cart-remove')) {
                event.target.closest('.cart-wrapper');
                event.target.closest('.product-card').remove();
                
            }
            const cartnumber = document.querySelector('.item-count');
            cartnumber.innerHTML = cardsIn.children.length;
            console.log(cardsIn.children.length);
            if (cardsIn.children.length == 0) {
                const button_pay = document.querySelector('.product-button-pay');
                button_pay.style.display = 'none';
            }
        })
        if (cardsIn.children.length > 0) {
            const button_pay = document.querySelector('.product-button-pay');
            button_pay.style.display = 'block';
            button_pay.style.margin = '0 auto';
        }
        
    }
})
