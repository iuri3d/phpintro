/// inclue

$( document ).ready(function() {

    $('#slider').slick({
        infinite: true,
        slidesToShow: 4, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: true // Adds the dots on the bottom
      });

    $('.profile').on('click',function(){showProfile()});
    $('.icon').on('click',function(){showCart()});
    $('#cart-close').on('click',function(){
        showCart();
    });
    $('.product').on('click',function(){
        productDescription();
    });
    buildChart();
    $('#banner').attr('src', 'https://cdn.pixabay.com/photo/2015/11/02/18/34/banner-1018818_1280.jpg');

    $('.favorite-icon').on('click', function (){
        toggleFavorite();
    });
});

loadProducts();

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
    ////First Row on the left
    $('.rowOne')
        .append('<div class="balance block">Saldo:</div>')
        .append('<div class="orders block">Encomendas</div>')
        .append('<div class="upcomingOrders block">Encomendas Agendadas</div>');
    /////Second Row on the left
    $('.rowTwo')
    .append('<div class="banner"><img src="" alt="Banner" id="banner"></div>');

    //////Third Row on the left
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
        .append('<div class="chart"><canvas id="myChart" width="390" height="190"></canvas></div>');
    
    $('.rowFive')
        .append('<div class="favorites"></div>');
    
    $('.favorites')
        .append('<div class="favorites-header">Favoritos</div>')
        .append('<div class="favorites-body"></div>')
        .append('<div class="favorites-footer"></div>');
    
    $('.favorites-body')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>')
        .append('<li class="favorites-item"></li>');
    
    $('.favorites-footer')
        .append('<button class="button wipe">Limpar</button>')
        .append('<button class="button wipe">Adicionar <i class="fas fa-shopping-cart"></i></button>')
}
function loadProducts() {
    $('#products')
        .append('<div class="container"></div>');
    $('.container')
        .append('<div class="searchBar"></div>')
        .append('<div class="productGrid" id="grid"></div>');
    $('.searchBar')
        .append('<input type="text" class="search" placeholder="Pesquisar"></input>')
        .append('<div class=filter-favorites></div>')
        .append('<div class="filter-orderBy">')
        .append('<button type="button" class="filter"><i class="fas fa-filter"></i>Filtrar</button>');

    $('.filter-favorites')
        .append('<label for="favorites">Favoritos:</label>')
        .append('<input type="checkbox" name="favorites" id="">');
    $('.filter-orderBy')
        .append('<label for="orderBy">Ordenar Por:</label>')
        .append('<select id="orderBy">');
    $('#orderBy')
        .append('<option value="Asc">Preço Ascendente</option>')
        .append('<option value="Dsc">Preço Descendente</option>');

    $('.productGrid')
        .append(function(){
            var server = new Server(res);
            var res = server.getProducts();
            res.products.forEach(function (p){
                generateProduct(p.number, p.name, p.price, "grid");
            });
            // for (var i=0; i < 6; i++){
            //     var number = Math.round(Math.random());
            //     var name = "Producto" + [i];
            //     var price = Math.round(Math.random() * 15);
            //     generateProduct(number, name, price, "grid");
            //}
        });
}
function loadOrders(){
    $('#orders')
        .append('<div class="container"></div>')
    $('.container')
        .append('<div class="left"></div>')
        .append('<div class="right"></div>')

    $('.left')
        .append('<div class="ordersList"></div>')
    $('ordersList')
        .append('<input type="text"')
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
        favourite.innerHTML = '<i class="favorite-icon far fa-star"></i>';
    }else{
        favourite.innerHTML = '<i class="favorite-icon fas fa-star"></i>';
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
function showProfile(){
    $('.user-settings').toggleClass('show');
}
function buildChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Gastos Mensais',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function productDescription(){
    $('body').addClass('overflowBody');
    $('.container')
        .append('<div class="modal"></div>');
    $('.modal')
        .append('<div class="modal-container"></div>');
    $('.modal-container')
        .append('<div class="modal-close">&times</div>')
        .append('<div class="modal-body"></div>');
    $('.modal-body')
        .append('<div class="modal-col col-left"></div>')
        .append('<div class="modal-col col-right"></div>');
    $('.col-left')
        .append('<div class="modal-image"></div>')
        .append('<div class="modal-name">kjdshfs sdfjh sdjkfh asdjk</div>')
        .append('<div class="modal-price">453</div>');
    $('.col-right')
        .append('<p class="m-0">Descrição:</p>')
        .append('<div class="modal-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices purus ut enim efficitur, nec feugiat ipsum condimentum. Aliquam ullamcorper ex sapien, porta malesuada erat dignissim sit amet. Praesent vel augue at lectus varius lacinia at a lectus. Ut quis ante vitae dui ultricies molestie quis vitae nisi. In non cursus mi. Sed sem turpis, fermentum non lobortis et, fermentum et tellus. Quisque a arcu at erat fringilla euismod. Donec nec lectus tristique, lacinia magna at, dignissim elit.</div>')
        .append('<button class="button button-description">Adicionar <i class="fas fa-shopping-cart"></i></button>');
    
    
    
}
function toggleFavorite(){
    ////Get product
    if('product is favorite'){
        'far fa-star'
    }else{
        'fas fa-star'
    };
}