import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQW0uA4GC2nhm7liutUjJSvsvqZGimO3WOhW2FfbzCoZX5UdCi3dDVsW9u3JrkXSWE0MDHXtp3Gps4EWb5U8hY400ijFGD9s8"
);

// After making any changes to anycomponent run  command "npm run build" to make a fresh build file with latest updates then make the "firebase deploy" to deploy the app with the firebase to the web
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components loads.....

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <h1>hello cleaver programmer lets build amazon store 🚀 </h1> */}

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* THE default route has always at the bottom oke */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
