import { Switch, Route } from 'react-router-dom';
import { Register } from './pages/Register/register';
import { Leads } from './pages/Leads/leads';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/leads" component={Leads} />
    </Switch>
  );
};