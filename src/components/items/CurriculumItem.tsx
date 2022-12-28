import React, {useState} from 'react';

type AppProps = {
  title: string;
  topics: any[];
};

const CurriculumItem = ({title, topics} : AppProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={"faq-block rounded " + (isOpen?'isOpen':'')}>
        <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>{title}
          <span className="topics fs11 text-muted">
            <i className="fa fa-align-left me-2"></i>{topics.length} Topics
          </span>
        </div>
        <div className="faq-content">
          <div className="faq-text">
            <h6 className="text-dark-purple">Topics</h6>
            {topics.length > 0 &&
            <ul>
              {topics.map((item) => (
              <li key={item._id}>{item.data}</li>
              ))}
            </ul>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumItem;