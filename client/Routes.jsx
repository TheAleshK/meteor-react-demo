const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory()


Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="items" component={Items}/>
        </Route>
      </Router>
    );
  }
});
