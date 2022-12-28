import React, {useState, useEffect, useRef} from 'react';
import Image from '../components/elements/Image';
import { Link , NavLink } from 'react-router-dom';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const DefaultHeader = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const phoneInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  useEffect(() => {
    if(phoneInput.current !== null){
      intlTelInput(phoneInput.current, {});
    }
  }, [phoneInput]);
  
  function openSearch() {
    const myOverlay = document.getElementById('myOverlay') as HTMLElement;
    myOverlay.style.display = "block";
  }
  
  function closeSearch() {
    const myOverlay = document.getElementById('myOverlay') as HTMLElement;
    myOverlay.style.display = "none";
  }	

  const menuToggle = () =>{
    const body = document.getElementById('body') as HTMLElement;
    setIsMenuOpened(!isMenuOpened);
    if(isMenuOpened){
      body.classList.add("menuIsOpened");
    }else{
      body.classList.remove("menuIsOpened");
    }
  }

  const searchToggle = () =>{
    const body = document.getElementById('body') as HTMLElement;
    setIsSearchOpened(!isSearchOpened);
    if(isSearchOpened){
      body.classList.add("searchIsOpened");
    }else{
      body.classList.remove("searchIsOpened");
    }
  }

  return (
    <>
      <div className="search-container position-absolute bg-white border-bottom">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="flex-grow-1">
              <div className="input-group input-group-lg mb-2">
                <input type="text" className="form-control" placeholder="Type to search..." aria-label="Type to search..." aria-describedby="searchbtn" />
                <button className="btn btn-outline-secondary" type="button" id="searchbtn"><i className="fa fa-search"></i></button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button type="button" className="close-search" onClick={() => searchToggle()}><i className="fa fa-close"></i></button>
            </div>
          </div>
          <div className="popular-searches">
            <h6>Hot Searches</h6>
            <NavLink className="popular-search-items" to="#">Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Faculty</NavLink>
            <NavLink className="popular-search-items" to="#">Cyber Security</NavLink>
            <NavLink className="popular-search-items" to="#">University Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Online Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Accounts Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Faculty</NavLink>
            <NavLink className="popular-search-items" to="#">Cyber Security</NavLink>
            <NavLink className="popular-search-items" to="#">University Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Online Programs</NavLink>
            <NavLink className="popular-search-items" to="#">Accounts Programs</NavLink>
          </div>
        </div>
      </div>

      <header className="header-mobile position-relative">
        <div className="container-fluid px-0">
          <div className="d-flex justify-content-between align-items-center">
            <a className="logo-mobile" href="#">
              <div className="img-fluid mobile-logo-img d-block d-sm-none">
              <Image src={'images/mobile-logo.png'} alt={'Grant Thornton'} width={'100%'} height={'100%'} effect={'blur'} classes={''}/>
              </div>
              <div className="img-fluid mobile-logo-img d-none d-sm-block">
              <Image src={'images/mobile-logo-lg.png'} alt={'Grant Thornton'} width={'100%'} height={'100%'} effect={'blur'} classes={''}/>
              </div>
            </a>
            <div className="header-link-options d-flex flex-row position-relative">
              <button className="header-link d-flex flex-column justify-content-center align-items-center h-100 search-link" type="button" onClick={() => searchToggle()}>
                <i className="fa fa-search"></i>
                <span>Search</span>
              </button>
              <a className="header-link d-flex flex-column justify-content-center align-items-center h-100" href="#">
                <i className="fa fa-shopping-cart"></i>
                <span>Cart(0)</span>
              </a>
              <a className="header-link d-flex flex-column justify-content-center align-items-center h-100" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="fa fa-user"></i>
                <span>Login</span>
              </a>
              <button className="hamburger-menu" type="button" onClick={() => menuToggle()}> 
                <span></span> 
                <span></span> 
                <span></span> 
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu-container transition">
        <div className="mobile-menu-header">
          <h4 className="mb-0">Programs</h4>
          <button className="close-menu" type="button" onClick={() => menuToggle()}><i className="fa fa-close"></i></button>
        </div>
        <div className="mobile-menu-body">
          <div className="my-mega">
            <div className="mega-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-3 py-4 categories-bg border-end pe-0">
                    <h5>Categories</h5>

                    <div className="mn-menu-block">
                      <ul className="nav nav-tabs flex-row" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> Finance</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Cyber Security</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Business Intelligence</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="blockchains-tab" data-bs-toggle="tab" data-bs-target="#blockchains-tab-pane" type="button" role="tab" aria-controls="blockchains-tab-pane" aria-selected="false">Blockchains</button>
                        </li>
                      </ul>
                      <Link to="#" className="viw-all-bt mt-3">View all</Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9">

                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                        <div className="row">
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                              <ul>
                                <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">e Learning programs</h5>
                              <ul>
                                <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                        <div className="row">
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                              <ul>
                                <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">e Learning programs</h5>
                              <ul>
                                <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt mt-3">View all</NavLink>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                        <div className="row">
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">e Learning programs</h5>
                              <ul>
                                <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                              <ul>
                                <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane fade" id="blockchains-tab-pane" role="tabpanel" aria-labelledby="blockchains-tab" tabIndex={0}>
                        <div className="row">
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                              <ul>
                                <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                              </ul>
                              <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                            </div>
                          </div>
                          <div className="col-12 py-3">
                            <div className="sub-menu-block">
                              <h5 className="purple-color">e Learning programs</h5>
                              <ul>
                                <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                              </ul>
                            </div>
                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header header-desktop">
        <div className="header-navbar">
          <nav className={"navbar navbar-expand-lg navbar-light navbar-2 " + (scroll?'isFixed':'')}>
            <div className="container-xl d-block">
              <div className="navbar-wrap d-flex align-items-center">
                <div className="navbar-left d-flex flex-shrink-0">
                  <Link to={'/'} className="navbar-brand d-inline-flex pb-0 align-items-center">
                    <Image src={'images/grant-thornton.png'} alt={'Grant Thornton'} width={'100%'} height={'100%'} effect={'blur'} classes={'img-fluid desktop-logo'}/>
                  </Link>
                  <div className="collapse navbar-collapse d-inline-block" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ps-md-4">
                      <li className="nav-item dropdown dropdown-mega position-static my-mega"> <a className="nav-link dropdown-toggle program-nav-link" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i className="fa fa-bars"></i> Programmes</a>
                        <div className="dropdown-menu border">
                          <div className="mega-content px-4">
                            <div className="container">
                              <div className="row">
                                <div className="col-12 col-sm-4 col-md-3 py-4 categories-bg border-end pe-0">
                                  <h5>Categories</h5>
                                  <div className="mn-menu-block">
                                    <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> Finance</button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Cyber Security</button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Business Intelligence</button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="blockchains-tab" data-bs-toggle="tab" data-bs-target="#blockchains-tab-pane" type="button" role="tab" aria-controls="blockchains-tab-pane" aria-selected="false">Blockchains</button>
                                      </li>
                                    </ul>
                                    <NavLink to="#" className="viw-all-bt mt-3">View all</NavLink>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-9">

                                  <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                      <div className="row">
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                                            <ul>
                                              <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                              <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                              <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">e Learning programs</h5>
                                            <ul>
                                              <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                              <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                      <div className="row">
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                                            <ul>
                                              <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                              <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                              <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">e Learning programs</h5>
                                            <ul>
                                              <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                              <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt mt-3">View all</NavLink>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                      <div className="row">
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">e Learning programs</h5>
                                            <ul>
                                              <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                              <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                                            <ul>
                                              <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                              <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                              <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                    <div className="tab-pane fade" id="blockchains-tab-pane" role="tabpanel" aria-labelledby="blockchains-tab" tabIndex={0}>
                                      <div className="row">
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">Instructor Led Online Programs <span className="badge text-bg-danger">Live</span></h5>
                                            <ul>
                                              <li><NavLink to="/listing">ACCA Qualification - Association of Chartered Certified Accountants</NavLink></li>
                                              <li><NavLink to="/listing">ACCA DipIFRS - Online Live Training</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Financial Modelling & Valuation Online Live</NavLink></li>
                                              <li><NavLink to="/listing">Certificate in Blockchain Online Live</NavLink></li>
                                            </ul>
                                            <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-md-6 border-end py-4">
                                          <div className="sub-menu-block">
                                            <h5 className="purple-color">e Learning programs</h5>
                                            <ul>
                                              <li><NavLink to="/listing">e Learning programs</NavLink></li>
                                              <li><NavLink to="/listing">Finance for Non-Finance Professionals E Learning Course</NavLink></li>
                                              <li><NavLink to="/listing">Certification in Data Analytics E - Learning</NavLink></li>
                                            </ul>
                                          </div>
                                          <NavLink to="/listing" className="viw-all-bt">View all</NavLink>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-right flex-grow-1 ms-md-4 ms-0">
                  <div className="row">
                    <div className="col-md">
                      <div className="header-search-bar">
                        <i className="fa fa-search"></i>
                        <input className="form-control" onClick={openSearch} placeholder="Type to search..." />
                        {/* <datalist id="datalistOptions">
                          <option value="ACCA">ACCA</option>
                          <option value="Accountants">Accountants</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Personal Finance">Personal Finance</option>
                          <option value="GT Courses">GT Courses</option>
                          <option value="GT Faculty">GT Faculty</option>
                        </datalist> */}
                      </div>
                    </div>
                    <div className="col-md-auto text-end">
                      <ul className="navbar-nav ms-auto me-0 right-nav">
                        <li className="nav-item cart">
                          <Link className="btn btn btn-link text-decoration-none" to="/cart"><i className="fa fa-shopping-cart"></i><span>Cart</span>(0)</Link>
                        </li>
                        <li className="nav-item login">
                          <button className="btn btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">LOGIN</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div id="myOverlay" className="overlay">
        <div className="closebtn" onClick={closeSearch} title="Close Overlay">×</div>
        <div className="overlay-content">
          <form action="">
            <input type="text" placeholder="Search.." name="search" list="datalistOptions" id="searchDataList"/>
            {/* <datalist id="datalistOptions">
              <option value="ACCA">ACCA</option>
              <option value="Accountants">Accountants</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Personal Finance">Personal Finance</option>
              <option value="GT Courses">GT Courses</option>
              <option value="GT Faculty">GT Faculty</option>
            </datalist> */}
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>

      <div className="offcanvas offcanvas-end leftside-login" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h5 id="offcanvasRightLabel" className="all_heading">Login</h5>
          <span>or</span> <a href="#" className="purple-color create-btn">Create Your Account</a>
          <form>
            <div className="input-group py-4">
              <input ref={phoneInput} type="tel" placeholder="Enter your mobile number" name="phone" id="telephone" className="form-control  w-100 rounded" required />
            </div>
          </form>
          <div className="row justify-content-between align-items-center mt-2">
            <div className="col-auto"> <Link className="btn btn btn-dark" to="#">LOGIN</Link> </div>
            <div className="col-auto"> <Link to="#" className=" create-btn">Continue With Email</Link> </div>
          </div>
          <hr className="mt-5 mb-4" />
          <div className="link-group">
            <Link className="btn-link text-decoration-none small text-muted pe-2" to="#">Forgot Password?</Link>
          </div>
          <small className="text-muted foot-text position-fixed">Having trouble? Please contact <Link to="#" className="">help@gtacademy.in</Link> for further support.</small>
        </div>
      </div>

      <div className="modal fade" id="forgotPassword" tabIndex={-1} aria-labelledby="forgotPasswordLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="forgotPasswordLabel">Forgot Password?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5">
              <form action="" className="form">
                <div className="mb-2">
                  <label htmlFor="enterEmailID" className="form-label fw600">Your Email/Mobile No.</label>
                  <input type="email" className="form-control form-control-lg" id="enterEmailID" placeholder="Enter Email ID/Mobile No."  />
                </div>
                <button type="submit" className="btn btn-dark w-100 btn-lg mb-3">Reset Password</button>
                <p className="small text-muted">
                  Enter your email address/mobile to receive OTP to reset your password in case you don't remember your password
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultHeader;