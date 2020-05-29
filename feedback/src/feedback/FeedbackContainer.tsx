import * as React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import Loadable from 'react-loadable'
import MyFeedback from "./myFeedback/MyFeedback";
import Reporting from "./reportings/Reportings";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const LazyFeedback = Loadable({
  loader: () => import('./myFeedback/MyFeedback'),
  loading() {
    return <div>Loading...</div>
  }
})

const LazyReporting = Loadable({
  loader: () => import('./reportings/Reportings'),
  loading() {
    return <div>Loading...</div>
  }
})

const MyPicker = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

const FeedbackContainer = () => {
  const match = useRouteMatch()

  return <>
    <div>
      <h2>Welcome to feedback home page</h2>
<MyPicker/>
      <ul>
        <li>
          <Link to={`${match.url}/my-feedback`}>My Feedback</Link>
        </li>
        <li>
          <Link to={`${match.url}/my-reporting`}>
            My reporting
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/my-feedback`}>
          {/*<LazyFeedback />*/}
          <MyFeedback />
        </Route>
        <Route path={`${match.path}/my-reporting`}>
          {/*<LazyReporting />*/}
          <Reporting />
        </Route>
      </Switch>
    </div>
  </>
}

export default FeedbackContainer
