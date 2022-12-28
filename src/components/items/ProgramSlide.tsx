import Image from '../elements/Image';
import { Link } from 'react-router-dom';

type AppProps = {
  title: string;
  text?: string;
  link: string;
  image: string;
  duration: string;
  isCertificate: boolean;
  discountPercentage: number;
  price: number;
  enrollLink: string;
  isLive: boolean;
  viewType: string;
};

const ProgramSlide = ({
  title, 
  text, 
  link, 
  image, 
  duration, 
  isCertificate, 
  discountPercentage,  
  price, 
  enrollLink, 
  isLive,
  viewType
} : AppProps) => {
  return (
    <>
      {viewType === 'grid' &&
        <div className="item">
          <div className="card service-card">
            {(discountPercentage > 0) &&
            <span className="offer-tag">{discountPercentage + '%'} OFF</span>
            }
            <Link to={link}>
              <Image src={image} alt={title} width={'100%'} height={'100%'} effect={'blur'} classes={'card-img-top'}/>
            </Link>
            <div className="card-body">
              {isLive && 
                <span className="tag">Live Program</span>
              }
              <h4 className="card-title">
                <Link to={link}>{title}</Link>
              </h4>
              <div className="duration-block">
                <div className="row">
                  <div className="col-lg-7 col-12 pe-0">
                    {duration &&
                    <div className="duration">
                      <span className="rounded bg-red-paste"><i className="fa-regular fa-clock"></i></span>
                      <span className="duration-txt">Duration : {duration}</span>
                    </div>
                    }
                  </div>
                  <div className="col-lg-5 col-12 pe-0">
                    {isCertificate &&
                    <div className="duration Certificate">
                      <span className="rounded bg-red-paste"><i className="fa-solid fa-file-lines"></i></span>
                      <span className="duration-txt">Certificate of Completion</span>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body program-price pt-0 pb-3 fs-6 fw600 d-flex align-items-center">
              <span className="d-inline-block">{price} INR
                {discountPercentage > 0 &&
                <del className="small fw400 text-muted">{price}</del>
                }
              </span>
              {discountPercentage > 0 &&
              <span className="text-muted saving-text ps-2 fw500">
                <i className="fa fa-info"></i> you save INR {(price*discountPercentage/100)}
              </span>
              }
            </div>
            <div className="card-footer border-0 bg-transparent">
              <div className="row gx-0">
                <div className="col">
                  {enrollLink &&
                  <Link className="btn btn-dark Enroll" to={enrollLink}>Enroll</Link>
                  }
                </div>
                <div className="col">
                  {link &&
                  <Link className="btn Program-Det" to={link}>Enquire</Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {viewType === 'list' &&
        <div className="listing-block p-2 rounded shadow-sm mb-3">
          <div className="row align-items-center">
            <div className="col-md-10">
              <div className="row align-items-start">
                <div className="col-md-4">
                  <figure className="mb-0">
                    <Image src={image} alt={title} width={'100%'} height={'100%'} effect={'blur'} classes={'card-img-top rounded'}/>
                  </figure>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div className="card-text">{text}</div>
                    <div className="duration-block">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          {duration &&
                          <div className="duration">
                            <span className="rounded bg-red-paste">
                              <i className="fa-regular fa-clock"></i>
                            </span>
                            <span className="duration-txt">Duration : {duration}</span>
                          </div>
                          }
                        </div>
                        <div className="col-lg-6 col-12">
                          {isCertificate &&
                          <div className="duration Certificate">
                            <span className="rounded bg-red-paste">
                              <i className="fa-solid fa-file-lines"></i>
                            </span>
                            <span className="duration-txt">Certificate of Completion</span>
                          </div>
                          }
                        </div>
                      </div>
                    </div>
                    {isLive && 
                    <div className="tag mt-3">Live ProGram</div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {price &&
              <div className="program-fees">
                <h5>INR {price}</h5>
                <small>plus taxes</small>
              </div>
              }
              <div className="card-buttons">
                <Link className="btn btn-dark Enroll w-100 mb-2" to={enrollLink}>Enroll</Link>
                <Link className="btn Program-Det w-100" to={link}>Program Details</Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProgramSlide;