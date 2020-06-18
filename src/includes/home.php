<body>
    <div class="navbar">
        <div class="content">
            <div class="links">
                <div class="link" id="nav-home"><a href="/">Início</a></div>
                <div class="link" id="nav-products"><a href="/">Produtos</a></div>
                <div class="link" id="nav-orders"><a href="/">Encomendas</a></div>
            </div>
            <div class="user">
                <div class="cart">
                    <div class="icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="cart-body">
                        <div class="cart-header">
                            <p>Carrinho</p>
                            <span class="close" id="cart-close">&times</span>
                        </div>
                        <div class="cart-list">

                        </div>
                        <div class="cart-footer">
                            <button class="button wipe">Apagar</button>
                            <button class="button finish">Finalizar Encomenda</button>
                        </div>
                    </div>
                    <div class="cart-count">00</div>
                </div>
                <div class="profile">
                    <div class="profile-name">José Manuel</div>
                    <div class="profile-image"></div>
                </div>
                <div class="user-settings">
                    <div class="profile-settings"><i class="fas fa-user"></i>Perfil</div>
                    <div class="logout"><i class="fas fa-sign-out-alt"></i>Sair</div>
                </div>
            </div>
        </div>        
    </div>

    <div id="home">

    </div>
    <div id="products">

    </div>
    <div id="orders">
        
    </div>

    <?php require_once('includes/scripts.php'); ?>
</body>