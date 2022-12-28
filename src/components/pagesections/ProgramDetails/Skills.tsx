import React from 'react';
import SkillItem from '../../items/SkillItem';

type AppProps = {
  skillData: any[];
};

const Skills = ({skillData} : AppProps) => {
  return (
    <>
      <section className="overview-section section-spacing-tb50 section-content section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-4">
            <h4 className="mb-1">Skills Covered</h4>
            <p className="fs18">What will be Covered with Finance for Non Finance Online Live Course</p>
          </div>

          <div className="row pt-2">
            {skillData.map((item) => (
              <div className="col-md-6" key={item._id}>
                <SkillItem
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;