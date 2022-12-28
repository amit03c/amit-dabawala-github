import React from "react";

type AppProps = {
  description: string;
  name: string;
  position: string;
  place: string;
};

const TestimonialsBlockItems = ({
  description,
  name,
  position,
  place,
}: AppProps) => {
  return (
    <div className="Testimonials_block border p-5 rounded bg-white mb-2">
      <div className="d-flex">
        <div className="flex-shrink-0">
          <img src="images/double-quotes.png" alt="icons" />
        </div>
        <div className="flex-grow-1 ms-4">
          <div className="testi_text">
            {/* {description.map((message) => (
              <p>{message}</p>
            ))} */}
            {description}
          </div>
          <div className="testi_info">
            <h6 className="mb-0">{name}</h6>
            <p className="mb-0">{position}</p>
            <small>{place}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlockItems;
