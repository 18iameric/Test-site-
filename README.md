<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartHome Automation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="logo">
      <img src="images/logo.png" alt="SmartHome Automation Logo" style="height: 50px;">
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Packages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <h1>Transform Your House Into a Smart Home</h1>
    <p>We specialize in integrating your devices with the Home Assistant system for seamless automation.</p>
    <a href="#pricing" class="btn">Explore Packages</a>
  </section>

  <section id="services" class="services">
    <h2>Our Services</h2>
    <div class="service">
      <img src="images/integration.jpg" alt="Device Integration">
      <h3>Device Integration</h3>
      <p>Already have smart devices? We’ll connect and optimize them with Home Assistant.</p>
    </div>
    <div class="service">
      <img src="images/full-automation.jpg" alt="Full Automation">
      <h3>Full Automation Setup</h3>
      <p>From device installation to a fully customized automation system tailored to your needs.</p>
    </div>
    <div class="service">
      <img src="images/ai-integration.jpg" alt="AI Integration">
      <h3>AI Integration with Ollama</h3>
      <p>Enhance your smart home with Ollama’s AI plugin for personalized automation, voice control, and intelligent responses.</p>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <h2>Our Packages</h2>
    <div class="package">
      <h3>Integration Package</h3>
      <p>Perfect for customers who already own smart devices.</p>
      <ul>
        <li>Connect existing devices</li>
        <li>Home Assistant configuration</li>
        <li>Custom automation scripts</li>
      </ul>
      <p class="price">$499</p>
      <a href="#contact" class="btn">Get Started</a>
    </div>
    <div class="package">
      <h3>Complete Automation Package</h3>
      <p>End-to-end service for creating a smart home from scratch.</p>
      <ul>
        <li>Device consultation and purchase</li>
        <li>Full system installation</li>
        <li>Comprehensive training</li>
      </ul>
      <p class="price">$2499</p>
      <a href="#contact" class="btn">Get Started</a>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>Ready to automate your home? Contact us for a consultation.</p>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>© 2024 SmartHome Automation. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

Here’s the complete code for your SmartHome Automation website, ready to copy and paste into GitHub. Make sure to upload the images folder containing the logo, hero image, and other referenced images.

index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartHome Automation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="logo">
      <img src="images/logo.png" alt="SmartHome Automation Logo" style="height: 50px;">
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Packages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <h1>Transform Your House Into a Smart Home</h1>
    <p>We specialize in integrating your devices with the Home Assistant system for seamless automation.</p>
    <a href="#pricing" class="btn">Explore Packages</a>
  </section>

  <section id="services" class="services">
    <h2>Our Services</h2>
    <div class="service">
      <img src="images/integration.jpg" alt="Device Integration">
      <h3>Device Integration</h3>
      <p>Already have smart devices? We’ll connect and optimize them with Home Assistant.</p>
    </div>
    <div class="service">
      <img src="images/full-automation.jpg" alt="Full Automation">
      <h3>Full Automation Setup</h3>
      <p>From device installation to a fully customized automation system tailored to your needs.</p>
    </div>
    <div class="service">
      <img src="images/ai-integration.jpg" alt="AI Integration">
      <h3>AI Integration with Ollama</h3>
      <p>Enhance your smart home with Ollama’s AI plugin for personalized automation, voice control, and intelligent responses.</p>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <h2>Our Packages</h2>
    <div class="package">
      <h3>Integration Package</h3>
      <p>Perfect for customers who already own smart devices.</p>
      <ul>
        <li>Connect existing devices</li>
        <li>Home Assistant configuration</li>
        <li>Custom automation scripts</li>
      </ul>
      <p class="price">$499</p>
      <a href="#contact" class="btn">Get Started</a>
    </div>
    <div class="package">
      <h3>Complete Automation Package</h3>
      <p>End-to-end service for creating a smart home from scratch.</p>
      <ul>
        <li>Device consultation and purchase</li>
        <li>Full system installation</li>
        <li>Comprehensive training</li>
      </ul>
      <p class="price">$2499</p>
      <a href="#contact" class="btn">Get Started</a>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>Ready to automate your home? Contact us for a consultation.</p>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>© 2024 SmartHome Automation. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

style.css

/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: #333;
  color: #fff;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
}

header .logo img {
  max-height: 50px;
}

header nav ul {
  list-style: none;
  display: flex;
}

header nav ul li {
  margin-left: 1rem;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.hero {
  background: url('images/home-hero.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 4rem 2rem;
}

.hero .btn {
  background: #ff5733;
  color: #fff;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
}

.services, .pricing, .contact {
  padding: 2rem 5%;
}

.services h2, .pricing h2, .contact h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.service, .package {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
}

.service img, .package img {
  max-width: 100%;
  height: auto;
}

.package .price {
  font-size: 1.5rem;
  color: #ff5733;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.contact form input, .contact form textarea {
  margin: 0.5rem 0;
  padding: 0.7rem;
  font-size: 1rem;
}

.contact form button {
  background: #333;
  color: #fff;
  padding: 0.7rem;
  border: none;
  cursor: pointer;
}

script.js

// Add interactivity if needed (e.g., form validation or dynamic package selection).
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
