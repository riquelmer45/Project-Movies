import React from "react";
import "./Footer.css";
import FooterNavItems from "../components/FooterNavItems";

function Footer() {
  const usefullLinks = [
    "Home",
    "Filmes",
    "Minha Lista",
    "Termos de uso",
    "Política de privacidade",
  ];
  const locations = [
    "Ipsum dolor",
    "Adipisicing elit",
    "Molestiae quaerat",
    "Asperiores nemo",
    "Nostrum est",
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a
                href="/"
                className="logo d-flex align-items-center
                    "
              >
                <span>CINEMA</span>
              </a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis nesciunt totam iste, ad perferendis vero praesentium,
                facere, modi facilis aperiam harum atque velit labore culpa
                maiores assumenda ducimus quod pariatur.
              </p>
              <div className="social-link mt-3">
                <a href="https://github.com/riquelmer45" className="github">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://www.instagram.com/riquelmermodesto.dev/"
                  className="instagram"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/anderson-riquelmer-modesto-0aa966220/"
                  className="linkedin"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Links Uteis</h4>
              <ul>
                {usefullLinks.map((link) => (
                  <FooterNavItems key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Nosso Cinema</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItems key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contate nós</h4>
              <p>
                Rua 1, Bairro, Cidade, Estado, CEP
                <br />
                <strong>Telefone:</strong> +55 99 9999-9999
                <br />
                <strong>Email:</strong> email@exemplo.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{""}
          <strong>
            <span>Riquelmer@Modesto</span>
          </strong>
          .All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">DStudio Technology</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
