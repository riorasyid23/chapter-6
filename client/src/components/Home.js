import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import Input from "react-validation/build/input";
import UserService from "../services/user.service";
import car1 from "../img/car1.png"
import happier from "../img/happier.png"
import testi1 from "../img/testi1.png"
import { Link } from "react-router-dom";

const Home = () => {
  const [content, setContent] = useState("");
  let url = "";

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>{content}</h3>
    //   </header>
    // </div>
    <React.Fragment>
    {/* <!-- Navbar --> */}
    <nav className="s.navbar s.navbar-expand-lg s.navbar-light" style={{boxShadow: "none",backgroundColor: "#F1F3FF"}}>
        <div className="container">
          <div style={{width: "100px", height: "34px", backgroundColor: "#0D28A6"}}></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-6 fw-normal">
              <li className="nav-item ms-3">
                <a className="nav-link active" aria-current="page" href="#ourservices">Our Services</a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#whyus">Why Us</a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#faq1">FAQ</a>
              </li>
              <button type="button" className="btn btn-success ms-3 rounded-1" style={{backgroundColor: "#5CB85F",border: "none"}}>Register</button>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Akhir Navbar --> */}

    {/* <!-- Jumbotron --> */}
    <section id="home">
        <div className="jumbotron row justify-content-center" style={{backgroundColor: "#F1F3FF"}}>
          <div className="col-6" style={{padding: "4rem 0rem"}}>
              <h1 className="display-4 fs-2 lh-base intro">Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
              <p className="lead fs-6 lh-base mb-0 mt-3" style={{width: "468px"}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <a className="btn btn-primary btn-lg rounded-1 cus-btn mt-3" href={url} role="button">Mulai Sewa Mobil</a>
          </div>
          <div className="col-6">
              <img src={car1} alt="Car 1" width="654" />
          </div>
        </div>
    </section>
    {/* <!-- Akhir Jumbotron --> */}
    
    {/* <!-- Our Service --> */}
    <section style={{backgroundColor: "white"}} id="ourservices">
        <div className="service">
          <div className="face col-6">
              <div className="circle" id="c1"></div>
              <div className="circle" id="c2"></div>
              <div className="circle" id="c3"></div>
              <div className="circle" id="c4"></div>
              <img className="hap" src={happier} alt="" />
          </div>
          <div className="desc col-6">
              <h1 style={{width: "468px",fontSize: "24px", lineHeight: "36px"}}>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <h2 style={{width: "468px",height: "60px",fontSize: "14px",fontWeight: "300",lineHeight: "20px",marginTop: "24px"}}>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</h2>
              <div className="cont">
                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                      <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className="det">Sewa Mobil Dengan Supir di Bali 12 Jam</div>

                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                      <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className="det">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>

                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                      <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className="det">Sewa Mobil Jangka Panjang Bulanan</div>

                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                      <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className="det">Gratis Antar - Jemput Mobil di Bandara</div>

                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                      <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className="det">Layanan Airport Transfer / Drop In Out</div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- /OurService --> */}

    {/* <!-- Why Us --> */}
    <section id="whyus">
        <div className="container" style={{marginTop: "6rem"}}>
          <h3 className="fs-2">Why Us ?</h3>
          <h5 className="fs-6 fw-normal">Mengapa harus pilih Binar Car Rental ?</h5>

          {/* <!-- Card --> */}
          <div className="row justify-content-center" style={{marginTop: "40px"}}>
            <div className="card rounded-2" style={{width: "16rem"}}>
              <div className="card-body">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#F9CC00"/>
                  <path d="M11.8334 24.3333H9.33335C8.89133 24.3333 8.4674 24.1577 8.15484 23.8452C7.84228 23.5326 7.66669 23.1087 7.66669 22.6667V16.8333C7.66669 16.3913 7.84228 15.9674 8.15484 15.6548C8.4674 15.3423 8.89133 15.1667 9.33335 15.1667H11.8334M17.6667 13.5V10.1667C17.6667 9.50362 17.4033 8.86773 16.9345 8.39889C16.4656 7.93005 15.8297 7.66666 15.1667 7.66666L11.8334 15.1667V24.3333H21.2334C21.6353 24.3379 22.0253 24.197 22.3316 23.9367C22.6379 23.6763 22.8398 23.3141 22.9 22.9167L24.05 15.4167C24.0863 15.1778 24.0702 14.9339 24.0028 14.7019C23.9354 14.4698 23.8184 14.2552 23.6599 14.0729C23.5014 13.8906 23.3051 13.7449 23.0847 13.646C22.8642 13.5471 22.6249 13.4973 22.3834 13.5H17.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h6 className="card-subtitle mb-2 mt-3 fw-bold">Mobil Lengkap</h6>
                <p className="card-text" style={{fontSize: "0.9rem"}}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
              </div>
            </div>

            <div className="card rounded-2 ms-4" style={{width: "16rem"}}>
              <div className="card-body">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#FA2C5A"/>
                  <path d="M23.1583 17.175L17.1833 23.15C17.0286 23.305 16.8447 23.4279 16.6424 23.5118C16.4401 23.5956 16.2232 23.6388 16.0042 23.6388C15.7851 23.6388 15.5683 23.5956 15.3659 23.5118C15.1636 23.4279 14.9798 23.305 14.825 23.15L7.66667 16V7.66666H16L23.1583 14.825C23.4688 15.1373 23.643 15.5597 23.643 16C23.643 16.4403 23.4688 16.8627 23.1583 17.175V17.175Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.8333 11.8333H11.8417" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h6 className="card-subtitle mb-2 mt-3 fw-bold">Harga Murah</h6>
                <p className="card-text" style={{fontSize: "0.9rem"}}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
              </div>
            </div>

            <div className="card rounded-2 ms-4" style={{width: "16rem"}}>
              <div className="card-body">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                  <path d="M16 24.3333C20.6024 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6024 7.66666 16 7.66666C11.3976 7.66666 7.66667 11.3976 7.66667 16C7.66667 20.6024 11.3976 24.3333 16 24.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 11V16L19.3333 17.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h6 className="card-subtitle mb-2 mt-3 fw-bold">Layanan 24 Jam</h6>
                <p className="card-text" style={{fontSize: "0.9rem"}}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
              </div>
            </div>

            <div className="card rounded-2 ms-4" style={{width: "16rem"}}>
              <div className="card-body">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#5CB85F"/>
                  <path d="M16 18.5C19.2217 18.5 21.8333 15.8883 21.8333 12.6667C21.8333 9.44502 19.2217 6.83334 16 6.83334C12.7783 6.83334 10.1667 9.44502 10.1667 12.6667C10.1667 15.8883 12.7783 18.5 16 18.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.8417 17.575L11.8333 25.1667L16 22.6667L20.1667 25.1667L19.1583 17.5667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h6 className="card-subtitle mb-2 mt-3 fw-bold">Sopir Murah</h6>
                <p className="card-text" style={{fontSize: "0.9rem"}}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</p>
              </div>
            </div>
          </div>
          {/* <!-- /Card --> */}
        </div>
    </section>
    {/* <!-- /Why Us --> */}

    {/* <!-- Testimonial --> */}
    <section id="testimonial">
      <div className="text-center" style={{marginTop: "100px"}}>
        <h3>Testimonial</h3>
        <h6 className="fw-normal mt-3">Berbagai review positif dari para pelanggan kami</h6>
      </div>

      <div className="main-carousel row">
        <div className="cell"><img src={testi1} alt="" /></div>
        <div className="cell"><img src={testi1} alt="" /></div>
        <div className="cell"><img src={testi1} alt="" /></div>
      </div>
    </section>
    {/* <!-- /Testimonial --> */}

    {/* <!-- Banner --> */}
    <section id="banner">
      <div className="container">
        <div className="banner">
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <button style={{fontSize: "14px",fontWeight: "700"}}>Mulai Sewa Mobil</button>
        </div>
      </div>
    </section>
    {/* <!-- /Banner --> */}

    {/* <!-- FAQ --> */}
    <section id="faq1">
      <div className="container">
        <div className="faq">
          <div className="faqtext">
              <h1 style={{fontSize: "24px",fontWeight: "700",marginBottom: "0"}}>Frequently Asked Question</h1>
              <h2 style={{fontSize: "14px",fontWeight: "300",marginBottom: "0",marginTop: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          </div>
          <div className="accordion w-100" id="basicAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false"
                    aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="basicAccordionCollapseOne" className="accordion-collapse collapse"
                  aria-labelledby="headingOne" data-mdb-parent="#basicAccordion">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" style={{borderTop: "1px solid rgba(0,0,0,.125)"}}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse"
                  aria-labelledby="headingTwo" data-mdb-parent="#basicAccordion">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" style={{borderTop: "1px solid rgba(0,0,0,.125)"}}>
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#basicAccordion">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" style={{borderTop: "1px solid rgba(0,0,0,.125)"}}>
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseFour" aria-expanded="false"
                    aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="basicAccordionCollapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-mdb-parent="#basicAccordion">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" style={{borderTop: "1px solid rgba(0,0,0,.125)"}}>
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="basicAccordionCollapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-mdb-parent="#basicAccordion">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classNamees that we use to style each
                    element. These classNamees control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>
      
    </section>
    {/* <!-- /FAQ --> */}

    {/* <!-- FOOTER --> */}
    <div className="container foot">
      <div className="alamat">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="navfoot">
        <a href="#ourservices"><p style={{textDecoration: "none"}}>Our Service</p></a>
        <a href="#whyus"><p style={{textDecoration: "none"}}>Why Us</p></a>
        <a href="#testimonial"><p style={{textDecoration: "none"}}>Testimonial</p></a>
        <a href="#faq1"><p style={{textDecoration: "none"}}>FAQ</p></a>
      </div>
      <div className="sosmed">
        <p>Connect with us</p>
        <div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            <path d="M21 7.66663H18.5C17.395 7.66663 16.3352 8.10561 15.5538 8.88701C14.7724 9.66842 14.3334 10.7282 14.3334 11.8333V14.3333H11.8334V17.6666H14.3334V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9108 11.244C18.0671 11.0878 18.279 11 18.5 11H21V7.66663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg className="icon-padding" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            <path d="M20.1666 7.66663H11.8333C9.53211 7.66663 7.66663 9.53211 7.66663 11.8333V20.1666C7.66663 22.4678 9.53211 24.3333 11.8333 24.3333H20.1666C22.4678 24.3333 24.3333 22.4678 24.3333 20.1666V11.8333C24.3333 9.53211 22.4678 7.66663 20.1666 7.66663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.3334 15.475C19.4362 16.1685 19.3178 16.8769 18.9948 17.4992C18.6719 18.1215 18.161 18.6262 17.5347 18.9414C16.9085 19.2566 16.1987 19.3663 15.5065 19.2549C14.8143 19.1436 14.1748 18.8167 13.6791 18.321C13.1833 17.8252 12.8565 17.1857 12.7451 16.4935C12.6337 15.8013 12.7434 15.0916 13.0586 14.4653C13.3739 13.8391 13.8785 13.3281 14.5009 13.0052C15.1232 12.6823 15.8315 12.5638 16.525 12.6667C17.2325 12.7716 17.8874 13.1012 18.3931 13.6069C18.8988 14.1126 19.2285 14.7676 19.3334 15.475Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.5834 11.4166H20.5917" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg className="icon-padding" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            <path d="M25.1667 8.49996C24.3687 9.06285 23.4851 9.49338 22.55 9.77496C22.0482 9.19788 21.3812 8.78887 20.6392 8.60323C19.8973 8.41759 19.1163 8.46429 18.4018 8.737C17.6873 9.00972 17.0737 9.49529 16.6442 10.1281C16.2146 10.7608 15.9898 11.5102 16 12.275V13.1083C14.5356 13.1463 13.0844 12.8215 11.7759 12.1628C10.4673 11.5042 9.34197 10.5322 8.50004 9.33329C8.50004 9.33329 5.16671 16.8333 12.6667 20.1666C10.9505 21.3316 8.906 21.9157 6.83337 21.8333C14.3334 26 23.5 21.8333 23.5 12.25C23.4993 12.0178 23.477 11.7863 23.4334 11.5583C24.2839 10.7195 24.8841 9.66055 25.1667 8.49996V8.49996Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg className="icon-padding" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            <path d="M9.33329 9.33337H22.6666C23.5833 9.33337 24.3333 10.0834 24.3333 11V21C24.3333 21.9167 23.5833 22.6667 22.6666 22.6667H9.33329C8.41663 22.6667 7.66663 21.9167 7.66663 21V11C7.66663 10.0834 8.41663 9.33337 9.33329 9.33337Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.3333 11L16 16.8333L7.66663 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg className="icon-padding" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            <path d="M19.3333 15.1666V11.8333M23.5 7.66663H8.5V21H12.6667V24.3333L16 21H20.1667L23.5 17.6666V7.66663ZM15.1667 15.1666V11.8333V15.1666Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright Binar 2022</p>
        <div style={{width: "100px",height: "34px",backgroundColor: "#0D28A6"}}></div>
      </div>
    </div>
    <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      {/* <script>
        $('.main-carousel').flickity({
          // options
          cellAlign: 'center',
          wrapAround: true,
          freeScroll: true
        });
    </script> */}
    </Helmet>
    </React.Fragment>
  );
};

export default Home;
