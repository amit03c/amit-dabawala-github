import React from "react";

type AppProps = {
  id: number;
  tag: string;
  date: string;
  isWeekend: string;
  days: string;
  time: string;
  isDisabled: boolean;
};

const BatchItem = ({ id, tag, date, isWeekend, days, time, isDisabled } : AppProps) => {
  return (
    <>
      <div className={"course-date-row " + (isDisabled?'disabled':'')}>
        {tag === 'sold' &&
        <div className="date-tag sold-out">
          <span>Sold Out</span>
        </div>
        }
        {tag === 'fillingFast' &&
        <div className="date-tag filling-fast">
          <span>Filling Fast</span>
        </div>
        }

        <div className="row gx-0 align-items-center">
          <div className="col-sm-4">
            <div className="form-check">
              {isDisabled?
              (<input className="form-check-input" type="radio" name="date" id={"date"+(id)} value={"option"+(id)} disabled/>):
              (<input className="form-check-input" type="radio" name="date" id={"date"+(id)} value={"option"+(id)}/>)
              }
              <label className="form-check-label" htmlFor={"date"+(id)}>
                <h6>{date}</h6>
                {isWeekend &&
                <span className="badge text-bg-success">Weekend</span>
                }
              </label>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <p>{days}</p>
          </div>
          <div className="col-sm-4 text-center">
            <p>{time}</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default BatchItem;
