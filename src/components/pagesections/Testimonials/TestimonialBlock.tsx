import React from "react";
import TestimonialsBlockItems from "../../items/TestimonialsBlockItems";

type AppProps = {
  testimonialsData: any[];
};

const TestimonialBlock = ({ testimonialsData }: AppProps) => {
  return (
    <div className="Testimonials_page  sec-spacing light-bg">
      <div className="container customwid">
        {testimonialsData.map((blocks) => (
          <TestimonialsBlockItems
            key={blocks.encrypted_id}
            description={blocks.description}
            name={blocks.title}
            position={blocks.position}
            place={blocks.place}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialBlock;
