import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import CurriculumItem from '../../items/CurriculumItem';

type AppProps = {
  curriculumData: any[];
};

const Curriculum = ({curriculumData} : AppProps) => {
  return (
    <>
      <section className="curriculum-section section-spacing-tb50 section-content section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-4">
            <h4 className="mb-1">Course Curriculum</h4>
            <div className="row">
              <p className="fs18 col-md-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur. Integer praesent tellus pellentesque semper viverra. Ut sapien dictum gravida suspendisse condimentum eu cursus tempor.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 px-5 mx-auto">
              <div className="faq-container mx-0 content-collapse mt-0">
                {curriculumData.map((item) => (
                  <CurriculumItem
                    key={item._id}
                    title={item.title}
                    topics={item.topics}
                  />
                ))}
              </div>

              <div className="text-center pt-4">
                <Link to="#" className="btn btn-dark btn-lg">
                  <span className="px-5">View More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;