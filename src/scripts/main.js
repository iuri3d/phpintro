$( document ).ready(function() {

    $('#slider').slick({
        infinite: true,
        slidesToShow: 4, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: true // Adds the dots on the bottom
      });

    $('.icon').on('click',function(){showCart()});
    $('#cart-close').on('click',function(){
        showCart();
    });
});

loadHome();

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
        .append('<div class="slider" id="slider"></div>');
    
    $('.slider')
    .append(function(){
        for (var i=0; i < 5; i++){
            var number = Math.round(Math.random());
            var name = "Producto" + [i];
            var price = Math.round(Math.random() * 15);
            generateProduct(number, name, price, "slider");
        }
    });
    
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
        .append('<div class="productGrid" id="grid"></div>');
    $('.searchBar')
        .append('<input type="text" class="search" placeholder="Pesquisar"></input>')
        .append('<label for="favorites">Favoritos</label>')
        .append('<input type="checkbox" name="favorites" id="">')
        .append('<label for="orderBy">Ordenar Por:</label>')
        .append('<select id="orderBy">')
        .append('<button type="button" class="filter"><i class="fas fa-filter"></i>Filtrar</button>');
    $('#orderBy')
        .append('<option value="Asc">Preço Ascendente</option>')
        .append('<option value="Dsc">Preço Descendente</option>')

    $('.productGrid')
        .append(function(){
            for (var i=0; i < 6; i++){
                var number = Math.round(Math.random());
                var name = "Producto" + [i];
                var price = Math.round(Math.random() * 15);
                generateProduct(number, name, price, "grid");
            }
        });
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

function showCart(){
    $('.cart-body').toggleClass('show');
}