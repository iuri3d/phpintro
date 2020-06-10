<?php
    session_start();
    if (!isset($_SESSION['loggedin'])) {
        header('Location: signin.php');
        exit;
    } else {
        //'<br>Session: '.session_id().'<br><br><a href=signout.php>Sair</a>';
        require_once('includes/head.php'); ?>


<body class="app">
  <?php require_once('includes/header.php'); ?>
  <main>
    <div class="container">
      <?php require_once('includes/menu.php'); ?>
      <div>Content</div>
    </div>
  </main>
  <?php require_once('includes/footer.php'); ?>
</body>
</html>



    <?php
    } ?>
