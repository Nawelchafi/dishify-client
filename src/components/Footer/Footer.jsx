import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
          <footer className="footer">
              <div className="footer-container">

                  <div className="quick-links">
                      <h3>Quick Links</h3>
                      <ul>
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/privacy-policy">Privacy Policy</a></li>
                          <li><a href="/terms-of-service">Terms of Service</a></li>
                      </ul>
                  </div>

                  <div className="social-media">
                      <h3>Follow Us</h3>
                      <div className="icons">
                          <a href="https://instagram.com" target="_blank" rel="noreferrer">
                              <i className="ri-instagram-line"></i>
                          </a>
                          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                              <i className="ri-pinterest-line"></i>
                          </a>
                          <a href="https://facebook.com" target="_blank" rel="noreferrer">
                              <i className="ri-facebook-line"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}

export default Footer