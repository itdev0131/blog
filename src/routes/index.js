import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppLayout from 'components/AppLayout'
import ArticleList from 'pages/ArticleList'
import ArticleShow from 'pages/ArticleShow'

const Routes = () => (
  <BrowserRouter>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/articles" component={ArticleList} />
        <Route exact path="/articles/:id" component={ArticleShow} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
)

export default Routes
