import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import CustomLayout from "./CustomLayout";
import MemberForm from "./MemberForm";

function App() {
  return (
    <>
      <CustomLayout>
        <Switch>
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/new" component={MemberForm} />
          <Route exact path="/" component={Home} />
          <Redirect to="/404" />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
