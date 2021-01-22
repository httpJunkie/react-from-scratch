import React, { useContext, lazy, Suspense } from 'react'
import { AppContext } from './context/AppContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'

const Home = lazy(() => import('./view-components/Home'))
const Events = lazy(() => import('./view-components/Events'))
const LoadingMessage = () => `loading...`

import Logo from './partial-components/Logo'
import Sidenav from './partial-components/Sidenav'
import Topnav from './partial-components/Topnav'
import Foot from './partial-components/Foot'

const Frame = () => {
  const context = useContext(AppContext)
  const isMedium = useMediaPredicate('(min-width: 600px)')
  const breakpoint = isMedium ? 'medium' : 'small'
  return (
    <BrowserRouter>
      <div className={`app-container ${breakpoint} ${context.themeMode}`}>
        <main>
          <header>
            <Logo />
            <Topnav />
          </header>
          <section>
            <Switch>
              <Suspense fallback={<LoadingMessage />}>
                <Route exact path='/' component={Home} />
                <Route exact path={['/events/:event_id', '/events/']} component={Events} />
              </Suspense>
              <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
          </section>
          <footer>
            <Foot />
          </footer>
        </main>
        <Sidenav />
      </div>
    </BrowserRouter>
  )
}

export default Frame