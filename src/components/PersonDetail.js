import React from 'react';
import './PersonDetail.css';

const PersonDetail = (props) => {
  return( 
    <article className="container">
        {/* <div className="col1"> */}
            <img className="avatar" src={props.image} alt={props.name} />
        {/* </div> */}
        <div className="col2">
            <h4>{props.name}</h4>
            <p>{props.age}</p>
    </div>
    </article>
  )
};

export default PersonDetail;