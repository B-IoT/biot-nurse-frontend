import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import MapPage from './pages/MapPage/MapPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SecureRoute from './utils/SecureRoute';

const queryClient = new QueryClient();

export const SEARCH_PATH = '/';
export const LOGIN_PATH = '/login';
export const MAP_PATH = '/tracking';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <SecureRoute exact path={SEARCH_PATH} component={SearchPage} />
          <Route path={LOGIN_PATH} component={LoginPage} />
          <SecureRoute path={MAP_PATH} component={MapPage} />
          <Redirect to={SEARCH_PATH} />
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
