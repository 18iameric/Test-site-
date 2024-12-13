# Test-site-
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wanderlust Mercantile</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="logo">Wanderlust Mercantile</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <h1>Gear Up for Your Next Adventure</h1>
    <p>Your journey starts here. Discover quality outdoor gear for every explorer.</p>
    <a href="#shop" class="btn">Shop Now</a>
  </section>

  <section id="shop" class="shop">
    <h2>Featured Products</h2>
    <div class="products">
      <div class="product">
        <img src="images/tent.jpg" alt="Tent">
        <h3>Lightweight Tent</h3>
        <p>$99.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <img src="images/backpack.jpg" alt="Backpack">
        <h3>Hiking Backpack</h3>
        <p>$149.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <img src="images/boots.jpg" alt="Boots">
        <h3>Trail Boots</h3>
        <p>$129.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <h2>About Us</h2>
    <p>At Wanderlust Mercantile, we believe every adventure starts with the right tools. Our mission is to provide explorers with the highest quality gear for any journey.</p>
  </section>

  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>© 2024 Wanderlust Mercantile. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
