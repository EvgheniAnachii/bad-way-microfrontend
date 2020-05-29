import React from "react";
import { Link } from 'react-router-dom';

const HomePage = (props: any) => {
  return (<>
    <div>Select an option</div>
    <Link to={'/modules/feedback'}>
      <button>Go to Feedback</button>
    </Link>
  </>)
}

export default HomePage