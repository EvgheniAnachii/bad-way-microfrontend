import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MicroFrontend from './MicroFrontend'
import AppHeader from './AppHeader'
import HomePage from './Home'
import styled from 'styled-components'

const {
  AUTHORIZATION_HOST: authorization,
  FEEDBACK_HOST: feedbackHost,
} = process.env

const Authorization = ({history}: any) => (
  <div>
    <MicroFrontend history={history} name="Authorization" host={authorization}/>
  </div>
)

const Feedback = ({history}: any) => (
  <MicroFrontend history={history} name="Feedback" host={feedbackHost}/>
)

const AppWrapper = styled.div`
  border: solid 3px green;
  margin: 15px;
`

const App = () => {
  return (<AppWrapper>
    <BrowserRouter>
      <React.Fragment>
        <AppHeader/>
        <Switch>
          <Route exact path="/" component={Authorization}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/modules/feedback" component={Feedback}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </AppWrapper>)
}

export default App
