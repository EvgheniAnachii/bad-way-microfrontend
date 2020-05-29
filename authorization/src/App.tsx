import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import useEffectOnce from './authorization/hooks/use-effect-once'
import { authService } from './authorization/AuthService'
import { Authorization, Logout } from './authorization/Authorization'
import {useState} from 'react'
import { extractParamsFromUrl } from './authorization/utils/oauth'
import styled from 'styled-components'

interface Props {
   history: any
}

const AppWrapper = styled.div`
  border: dotted 3px blue;
  margin: 15px;
`

export const App = (props: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

  useEffectOnce(() => {
    if (!isAuthorized) {
      const { token } = extractParamsFromUrl()

      if (token) {
        window.history.replaceState(null, '', ' ')

        authService.setAuthToken(token)
      }
    }

    setIsAuthorized(authService.validateToken())
  })

  return <AppWrapper><Router>
    <div>
      <Switch>
        <Route path="/">
          {!isAuthorized
            ? <Authorization
                onUserAuthorized={setIsAuthorized}
              />
            : <Logout onUserAuthorized={setIsAuthorized}/>}
        </Route>
      </Switch>
    </div>
  </Router></AppWrapper>
}

export default hot(App)
