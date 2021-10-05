import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import TidyTips from "./pages/TidyTips";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/tidy-tips">
          <TidyTips />
        </Route>    
      </Switch>
    </Layout>
  );
}

export default App;
