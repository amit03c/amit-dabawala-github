import React from 'react';
import FaqItem from '../../items/FaqItem';

type AppProps = {
  data: any[];
};

const Faq = ({data} : AppProps) => {
  return (
    <>
      <section className="faqs sec-spacing">
        <div className="container customwid">
          <h3 className="all_heading text-center mb-3">Frequently Asked Questions</h3>
          <div className="faq-container">
            {data.map((item) => (
            <FaqItem
              key={item._id}
              title={item.title}
              text={item.text}
            />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;