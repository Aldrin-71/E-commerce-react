import React from 'react';
import CardList from './components/cardlist';
import '../../../components/ui/card.css';

export default function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-logo">SKATE.SHOP</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Pages</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="nav-icons">
          <span className="nav-icon">🔍</span>
          <span className="nav-icon">👤</span>
          <span className="nav-icon">❤️</span>
          <span className="nav-icon">🛒</span>
          <span className="nav-icon">☰</span>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-trend">NEW TREND</div>
          <h1>PRO SKATEBOARD <br /> COLLECTIONS</h1>
          <img src="https://images.vexels.com/media/users/3/132153/isolated/preview/2b07e0f940d92cdf0b02e0256417d93b-skating-circle-icon.png" alt="Skateboard Icon" />
          <p>Discover the best boards and parts for your next ride. Engineered for performance and style.</p>
          <a href="/" className="hero-btn">Shop Now</a>
        </div>
        <div className="hero-image">
        </div>
      </section>

      <section className="collections-section">
        <div className="collections-grid">
          <div className="collection-item large">
            <h3>PRO DECKS</h3>
            <img src="https://phillewisart.com/cdn/shop/products/IMG_0894_1200x.jpg?v=1646926505" alt="Pro Decks" />
            <div className="collection-link"></div>
            <a href="/" className="collection-btn">Shop Now</a>
          </div>
          <div className="collection-item">
            <h3>WHEELS</h3>
            <img src="https://www.tactics.com/a/fdsq/r/wheels-product-shot.jpg" alt="Wheels" />
            <div className="collection-link"></div>
            <a href="/" className="collection-btn">Explore</a>
          </div>
          <div className="collection-item">
            <h3>TRUCKS</h3>
             <img src="https://ghostboards.com/wp-content/uploads/2024/05/longboard-vs-skate-trucks-thumbnail.jpg" alt="Trucks" />
            <div className="collection-link"></div>
            <a href="/" className="collection-btn">Explore</a>
          </div>
          <div className="collection-item">
            <h3>KIDS GEAR</h3>
            <img src="https://contents.mediadecathlon.com/p2584768/k$9ba7043ee199d5649e0b798a8c1e5846/kids-2-x-3-piece-inline-skating-scooter-skateboard-protective-gear-play-blue-oxelo-8784953.jpg?f=1920x0&format=auto" alt="Kids Gear" />
            <div className="collection-link"></div>
            <a href="/" className="collection-btn">Shop Now</a>
          </div>
          <div className="collection-item">
            <h3>ACCESSORIES</h3>
            <img src="https://www.skatewarehouse.co.uk/cdn/shop/collections/VNM-Tool-kit-21_1200x1200.jpg?v=1750928385" alt="Accessories" />
            <div className="collection-link"></div>
            <a href="/" className="collection-btn">Explore</a>
          </div>
        </div>
      </section>

      <CardList />

      <section className="deal-section">
        <div className="deal-content">
          <div className="deal-label">DEAL OF THE WEEK</div>
          <h2 className="deal-title">UP TO 50% OFF ON <br /> PREMIUM COMPLETES</h2>
          <img src="https://i.pinimg.com/736x/0f/97/cd/0f97cd7a014bbc8cf5663df981bef7b0.jpg" alt="Deal of the Week" />
          <a href="/" className="hero-btn">View Offer</a>
        </div>
        <div className="deal-image">

        </div>
      </section>

      <section className="features-section">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <h4 className="feature-title">FREE SHIPPING</h4>
          <p>On all orders over $100</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🛡️</span>
          <h4 className="feature-title">SECURE PAYMENT</h4>
          <p>100% secure payment methods</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">↩️</span>
          <h4 className="feature-title">EASY RETURNS</h4>
          <p>30 days return policy</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-about">
            <span className="footer-logo">SKATE.SHOP</span>
            <p>Your one-stop shop for all things skateboarding. We provide quality gear for riders of all levels.</p>
            <div className="footer-social">
              <span className="social-dot"></span>
              <span className="social-dot"></span>
              <span className="social-dot"></span>
              <span className="social-dot"></span>
            </div>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/">New Arrivals</a></li>
              <li><a href="/">Best Sellers</a></li>
              <li><a href="/">Deals</a></li>
              <li><a href="/">Store Locator</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>NEWSLETTER</h4>
            <p>Subscribe to get updates on new products and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 SKATE.SHOP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
