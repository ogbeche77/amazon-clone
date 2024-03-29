import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceorderScreen from './screens/PlaceorderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  //Display userinfo on signin screen
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="amazon" to="/">Amazon-Clone</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>)}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{"Hello " + userInfo.name}<i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                  </ul>
                </div>
              ) :
                (
                  <Link to="/signin">Sign In</Link>
                )
            }

          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceorderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Right reserved</footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
