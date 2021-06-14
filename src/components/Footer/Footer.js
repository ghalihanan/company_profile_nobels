import React from "react";
import "./footer.scss";
import logo from '../Footer/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer mt-3">
        <div className="footer-left">
          <div className="">
            <img src={logo} alt="Logo" />
            <p className="mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div>
            <div className="mb-1">
                <h3 className="font-weight-bold mt-1">Business & Patnership</h3>
                <p>Wahyu Satria Aji | 0851xxxx<br />wahyusatria@gmail.com</p>
            </div>
            <div>
                <h3 className="font-weight-bold">Business & Patnership</h3>
                <p>Wahyu Satria Aji | 0851xxxx<br />wahyusatria@gmail.com</p>
            </div>
          </div>
        </div>

        <ul className="footer-right">
          
          <li className="media mt-1">
            <h3 className="mb-1 font-weight-bold">Media</h3>
            <ul>
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Github</li>
            </ul>
          </li>
          <li className="mt-1">
            <h3 className="mb-1 font-weight-bold">Media</h3>
            <ul>
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Github</li>
            </ul>
          </li>
          <li>
            <h3 className="mb-1 mt-1 font-weight-bold">Kerja Sama</h3>
            <ul>
              <li className="kerjasama">
                <ul className="mr-1">
                  <li>Linkedin</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                  <li>Github</li>
                </ul>
                <ul className="mr-1">
                  <li>Linkedin</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                  <li>Github</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="lokasi">
            <h3 className="mb-1 mt-1 font-weight-bold">Lokasi</h3>
            <ul>
              <li className="mb-2">now use Lorem Ipsum as their default model text, and a search 12a</li>
              <li>Jakarta Selatan</li>
              <li>Indonesia</li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;