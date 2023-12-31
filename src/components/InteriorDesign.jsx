import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/interior/modalhome.css';
import './css/interior/swiper.min.css';
import './css/interior/animate.css';
import './css/interior/styleimagepage.css';
import classnames from 'classnames';

function InteriorDesign() {

  const [tag, setTag] = useState("home");
  const [selectedModalImage, setSelectedModalImage] = useState(null);
  const [clicked, setClicked] = useState(false)
  const handleImageClick = (modalImage) => {
    setSelectedModalImage(modalImage);
    setClicked(true);
    document.body.classList.add('modal-open');

  };


  const gridContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }

  const imgHolderSyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gridAutoRows: 'minmax(50%, auto)',
    height: '80vh',
    gap: '10px'
  };

  const [imggall, setImggall] = useState([])
  const importAll = (r) => {
    const images = {};
    r.keys().forEach((key) => {
      images[key] = r(key);
    });
    return images;
  };
  const images = importAll(require.context("../../public/img/sample_photos/home/", false, /\.(png|jpe?g|svg)$/));
  return (
    <>
      <Navbar />

      <br />

      <div style={{margin: '160px 0px'}}></div>
      <div className="container-fluid" style={{ overflowY: 'scroll' }}>
        <div className="row" style={{}}>

          <div className='grid-container' style={gridStyle} >

            {Object.keys(images).map((key) => (
              <div className="grid" >
                <div className="imgholder" style={imgHolderSyle} >
                  <a data-toggle="modal" data-target=".bd-example-modal-lg">
                    <img className="zoom img-fluid"
                      src={images[key]}
                      key={key}
                      alt="Home" width="100%"
                      onClick={() => handleImageClick(images[key])} />
                  </a>
                </div>
              </div>

            ))}

          </div>

          <div className={`modal fade bd-example-modal-lg ${clicked ? 'show' : ''} `} role="dialog" aria-labelledby="myLargeModalLabel"
            tabindex="-1" style={{ display: `${clicked ? 'block' : 'none'}` }}>
            <div className="modal-dialog modal-lg">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img className="specialcross" src="/img/cross.png" onClick={() => { setClicked(false) }} />
              </button>
              <div className="modal-content">


                <div className="col-12">
                  <div className="image_post">
                    <ul align="center">



                      {Object.keys(images).map((key) => (

                        <li className={`row ${selectedModalImage == images[key] ? 'activepostimg' : ''}`} style={{ margin: 'auto' }}>

                          <span className>
                            <a className="buttons_prev" href="#">
                              <i>
                                <img className="n_evimg"
                                  src="/img/left_arrow.png" />
                              </i>
                            </a>
                          </span>

                          <span className>
                            <img className="img-fluid mx-auto d-block"
                              src={images[key]}
                              key={key}
                            />
                          </span>

                          <span className>
                            <a className="buttons_next" href="#">
                              <i><img className="n_evimg"
                                src="/img/right_arrow.png" />
                              </i>
                            </a>
                          </span>

                          <div className="col-12 col-lg-12" align="center">

                            <div align="center" className="slide_image_counter text-center">
                              <a> </a>
                            </div>

                            <h3 className="text-center">
                              Interior |
                              <span>FileName</span>
                            </h3>
                          </div>

                          <div className="col-lg-8 offset-lg-2">
                            <p className="text-center">
                              <span className="more modalsmalltext">
                                Description of the Image
                              </span>
                            </p>
                          </div>
                        </li>
                      ))}


                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      <br />
      <Footer />
    </>
  );
}
export default InteriorDesign;
