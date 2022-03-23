
import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <switch>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} exact={r.exact} >
                  <r.component />
              </Route>
            ))}
          </switch>
        </div>
      </BrowserRouter>
    </>
  );
}
