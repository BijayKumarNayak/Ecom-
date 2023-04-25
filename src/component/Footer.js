import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="about-company">
        <h3>About Company</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod
          inventore laboriosam laudantium quasi eos culpa dolores accusantium
          quis maiores, vel fugit eveniet libero commodi hic, eligendi quisquam
          obcaecati odio sit ex voluptatibus veniam incidunt voluptates?
          
        </p>
      </div>
      <div className="social-link">
        <h3>Keep Connected</h3>
        <ul>
          <li>
            <i class="fa-brands fa-facebook"></i>Like us on Facebook
          </li>{" "}
          <li>
            <i class="fa-brands fa-instagram"></i>Follow us on Instagram
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>Follow us on Twitter
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact US</h3>
        <ul>
          <li><i class="fa-solid fa-phone"></i> 123456789</li>
          <li><i class="fa-regular fa-envelope"></i>abc@gmail.com</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Footer;
