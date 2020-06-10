<?php
$current = $_SERVER["REQUEST_URI"];
$utoken = $_SESSION['token'];

$pages = array(
  array(
    array('Home', 'home.php'),
    array('Profile', "profile.php?token=$utoken"),
    array('Signout','signout.php')
  ),
  array(
    array('News', 'news'),
    array('Events', 'events')
  )
);

?>
<div class="menu">
  <ul>
    <?php
    $target = '/app/home.php';
    foreach ($pages as $u) {
        echo '<ul>';
        foreach ($u as $l) {
            $target = '/app/'.$l[1];
            echo $current === $target ? "<li>$l[0]</li>" : "<li><a href='$target'>$l[0]</a></li>";
        }
        echo '</ul>';
    }
    ?>
</div>