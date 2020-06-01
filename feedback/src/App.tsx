import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import FeedbackContainer from './feedback/FeedbackContainer'
import styled from 'styled-components'

interface Props {
  history: any
}

const AppWrapper = styled.div`
  border: dotted 3px orange;
  margin: 15px;
`

export const App = (props: Props) => {

  return <AppWrapper><Router>
    <div>
      {/*<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/modules/feedback">Feedback Module</Link>
          </li>
          <li>
            <Link to="/modules/training">Training module</Link>
          </li>
        </ul>
      </nav>*/}

      <Switch>
        <Route path="/">
          <FeedbackContainer/>
        </Route>
      </Switch>
    </div>
  </Router></AppWrapper>
}

export default hot(App)
