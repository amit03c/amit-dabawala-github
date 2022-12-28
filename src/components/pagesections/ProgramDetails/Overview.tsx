import React from 'react';
import FaqItem from '../../items/FaqItem';

type AppProps = {
  faqData: any[];
};

const Overview = ({faqData} : AppProps) => {
  return (
    <>
      <section className="overview-section section-spacing-tb50 section-content section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-3">
            <h4>Overview</h4>
          </div>
          <p>
            Finance for non-finance programme is designed to develop financial skills among professionals working in non-finance functions like HR, production, sales and marketing and R&D. This
            four-day programme will explain the functioning of the finance function in a corporate environment and the use of the information provided by different functions in preparing financial
            statements. It will also focus on different types of costs involved and the relevance of each while making a decision along with working capital management, variance analysis, etc.
          </p>
          <p>
            Participants will gain an understanding of the techniques and principles used to prepare financial statements, which will facilitate business decisions and smooth communication with the
            finance team.
          </p>
          
          <div className="faq-container mx-0 content-collapse">
            {faqData.map((item) => (
              <FaqItem
              key={item._id}
              title={item.title}
              text={item.text}
            />
            ))}
            {/* <div className="faq-block">
              <div className="faq-header">What will you learn as a part of this Finance course course?</div>
              <div className="faq-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum.
                  Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.
                </p>
              </div>
            </div>

            <div className="faq-block">
              <div className="faq-header">Who should go for this Finance course?</div>
              <div className="faq-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum.
                  Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.
                </p>
              </div>
            </div>

            <div className="faq-block">
              <div className="faq-header">What are the pre-requisites for this Finance Certification Course?</div>
              <div className="faq-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum.
                  Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;