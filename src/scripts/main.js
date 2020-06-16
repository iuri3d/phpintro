$( document ).ready(function() {

    loadProducts();
    ////Slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
        });

    $('.orders').on('click', function(){
        console.log('clicked');
    });

});

function loadHome(){
    $('#home').append("<div class='container'></div>");
    $('.container')
        .append('<div class="left"></div>')
        .append('<div class="right"></div>');
    $('.left')
        .append('<div class="rowOne">')
        .append('<div class="rowTwo">')
        .append('<div class="rowThree">');
    $('.right')
        .append('<div class="rowFour"></div>')
        .append('<div class="rowFive"></div>');
    ////First Row
    $('.rowOne')
        .append('<div class="balance block"></div>')
        .append('<div class="orders block"></div>')
        .append('<div class="upcomingOrders block"></div>');
    /////Second Row
    $('.rowTwo')
    .append('<div class="banner"></div>');

    $('.rowThree')
        .append('<div class="slider"></div>');

    $('.rowFour')
        .append('<div class="chart"></div>');
    
    $('.rowFive')
        .append('<div class="favorites"></div>');
}

function loadProducts() {
    $('#products')
        .append('<div class="container"></div>');
    $('.container')
        .append('<div class="searchBar"></div>')
        .append('<div class="productGrid"></div>');
    $('.searchBar')
        .append('<input type="text" class="search" placeholder="Pesquisar"></input>')
}




function generateProduct(f, n, p, l){
    /*
    f = favourite
    n = name
    p =  price
    l = location
    */

    var product = document.createElement('div');
    product.setAttribute("class", "product");
    var favourite = document.createElement('div');
    favourite.setAttribute("class", "favourite");
    if(f != 0){
        favourite.innerHTML = '<i class="far fa-star"></i>';
    }else{
        favourite.innerHTML = '<i class="fas fa-star"></i>';
    }
    var image = document.createElement('img');
    image.setAttribute("class", "image");
    var name = document.createElement('div');
    name.setAttribute("class", "productName");
    name.innerHTML = n;
    var price = document.createElement('div');
    price.setAttribute("class", "productPrice");
    price.innerHTML = p + "€";
    var add = document.createElement('button');
    add.setAttribute("class", "add");
    add.innerHTML = 'Adicionar <i class="fas fa-shopping-cart"></i>';

    product.appendChild(favourite);
    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(add);

    document.getElementById(l).appendChild(product);


}
