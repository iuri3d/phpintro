<?php
    session_start();
    if (!isset($_SESSION['loggedin'])) {
        header('Location: signin.php');
        exit;
    } else {
        require_once('../functions.php');
        require_once('../includes/head.php');
        $section = !empty($_GET['s']) ? $_GET['s'] : null;
        $token = !empty($_GET['token']) ? $_GET['token'] : null;


        $sql = "SELECT * FROM news WHERE token = ?";
        $stmt = conn()->prepare($sql);
        if ($stmt->execute([$token])) {
            $n = $stmt->rowCount();
            if ($n === 1) {
                $r = $stmt->fetch();
                $stmt = null;
            }
        } ?>

<body class="app">
  <?php require_once('../includes/header.php'); ?>
  <main>
    <div class="container">
      <?php require_once('../includes/menu.php'); ?>
      <div>

        <div class="section-title">
          <h1><?php echo $section; ?></h1>
        </div>
        <form action="create.php" method="post">
          <fieldset>
            <ul>
              <li>
                <label for="title">Title</label>
                <input type="text" name="title" value="<?php echo !empty($r['title']) ? $r['title'] : null ; ?>">
              </li>
              <li>
                <label for="summary">Summary</label>
                <textarea rows="3" name="summary"><?php echo !empty($r['summary']) ? $r['summary'] : null ; ?></textarea>
              </li>
              <li>
                <label for="body">Body</label>
                <textarea rows="10" name="body"><?php echo !empty($r['body']) ? $r['body'] : null ; ?></textarea>
              </li>
              <li>
                <label for="author">Author</label>
                <input type="text" name="author" value="<?php echo !empty($r['author']) ? $r['author'] : null ; ?>">
              </li>
              <?php
              if ($_SESSION['level'] >= 2) { ?>
                <li>
                  <label for="author">Status</label>
                  <select name="status">
                    <option value="0" <?php echo $r['status'] === 0 ? 'selected' : ''; ?> >Draft</option>
                    <option value="1" <?php echo $r['status'] === 1 ? 'selected' : ''; ?>>Review</option>
                    <option value="2" <?php echo $r['status'] === 2 ? 'selected' : ''; ?>>Published</option>
                    <option value="3" <?php echo $r['status'] === 3 ? 'selected' : ''; ?>>Archived</option>
                  </select>
              </li>
              <?php } ?>
            </ul>
          </fieldset>
          <fieldset>
            <input type="hidden" name="section" value="<?php echo $section; ?>">
            <input type="hidden" name="token" value="<?php echo $token; ?>">
            <input type="submit" value="Save">
          </fieldset>
        </form>
        <?php
        if (!empty($_POST)) {
            $title      = $_POST['title'];
            $summary    = $_POST['summary'];
            $body       = $_POST['body'];
            $author     = $_POST['author'];
            
            $status     = !empty($_POST['status']) ? $_POST['status'] : 0;
            $token      = !empty($_POST['token']) ? $_POST['token'] : sha1(bin2hex(date('U')));
            $timestamp  = date('Y-m-d');
            $section    = $_POST['section'];

            if (!empty($_POST['token'])) {
                if ($_SESSION['level'] >= 2) {
                    $sql = "UPDATE news SET title = ?, summary = ?, body = ?, author = ?, status = ? WHERE token = ?";
                } else {
                    $sql = "UPDATE news SET title = ?, summary = ?, body = ?, author = ? WHERE token = ?";
                }

                $stmt = conn()->prepare($sql);
                $stmt->bindValue(1, $title, PDO::PARAM_STR);
                $stmt->bindValue(2, $summary, PDO::PARAM_STR);
                $stmt->bindValue(3, $body, PDO::PARAM_STR);
                $stmt->bindValue(4, $author, PDO::PARAM_STR);


                if ($_SESSION['level'] >= 2) {
                    $stmt->bindValue(5, $status, PDO::PARAM_INT);
                    $stmt->bindValue(6, $token, PDO::PARAM_STR);
                } else {
                    $stmt->bindValue(5, $token, PDO::PARAM_STR);
                }
            } else {
                $sql = "INSERT INTO news (title, summary, body, author, status, token, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
                $stmt = conn()->prepare($sql);
                $stmt->bindValue(1, $title, PDO::PARAM_STR);
                $stmt->bindValue(2, $summary, PDO::PARAM_STR);
                $stmt->bindValue(3, $body, PDO::PARAM_STR);
                $stmt->bindValue(4, $author, PDO::PARAM_STR);
                $stmt->bindValue(5, $status, PDO::PARAM_INT);
                $stmt->bindValue(6, $token, PDO::PARAM_STR);
                $stmt->bindValue(7, $timestamp, PDO::PARAM_STR);
            }

            if ($stmt->execute()) {
                $stmt = null;
                //echo "Registo inserido";
                header("Location: ../$section/");
                exit;
            }
        } ?>
      </div>
    </div>
  </main>
  <?php require_once('../includes/footer.php'); ?>

</body>
</html>


<?php
    } ?>