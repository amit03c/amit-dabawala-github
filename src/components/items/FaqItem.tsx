import React, {useState} from 'react';

type AppProps = {
  title: string;
  text: string;
};

const FaqItem = ({title, text} : AppProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={"faq-block rounded " + (isOpen?'isOpen':'')}>
        <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>{title}</div>
        <div className="faq-content">
          <div className="faq-text">{text}</div>
        </div>
      </div>
    </>
  );
};

export default FaqItem;