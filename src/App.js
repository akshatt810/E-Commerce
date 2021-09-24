import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomePage from './Components/HomePage';
import Cart from './Components/Cart';
import Mobiles from './Components/Mobiles';
import Books from './Components/Books';
import Electronics from './Components/Electronics';
import Gift from './Components/Gift';
import Fashion from './Components/Fashion';
import { useState } from "react";
import Products from './Components/Products.js';

export default function App() {
  const [state, setState] = useState(Products);
  const [total, setTotal] = useState(0);

  function handleClick(i) {
    let temp_state = [...state];

    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[i] };

    // 3. Update the property you're interested in
    if (temp_element.count > 0) {
      temp_element.count = temp_element.count - 1;
      temp_element.pay = temp_element.pay - temp_element.price;
    }

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[i] = temp_element;
    setTotal(total - temp_element.price);

    // 5. Set the state to our new copy
    setState(temp_state);
  }

  function handleClicksum(i) {
    let temp_state = [...state];

    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[i] };

    // 3. Update the property you're interested in
    temp_element.count = temp_element.count + 1;
    temp_element.pay = temp_element.pay + temp_element.price;

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[i] = temp_element;
    setTotal(total + temp_element.price)
    // 5. Set the state to our new copy
    setState(temp_state);
  }

  function count(i) {
    let temp_state = [...state];
    let temp_element = { ...temp_state[i] };
    return (
      <div>{temp_element.count}</div>
    );
  }

  function pay(i) {
    let temp_state = [...state];
    let temp_element = { ...temp_state[i] };
    return (
      <div>{temp_element.pay}</div>
    );
  }

  function count1(i) {
    let temp_state = [...state];
    let temp_element = { ...temp_state[i] };
    return (
      temp_element.count
    );
  }

  function total1() {
    return (
      <div>{total}</div>
    );
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Cart" component={Cart} >
          <Cart count1={count1} count={count} pay={pay} total={total1} />
        </Route>
        <Route exact path="/Mobiles" component={Mobiles} >
          <Mobiles add={handleClicksum} sub={handleClick} count={count} />
        </Route>
        <Route exact path="/Electronics" component={Electronics}>
          <Electronics add={handleClicksum} sub={handleClick} count={count} />
        </Route>
        <Route exact path="/Books" component={Books} >
          <Books add={handleClicksum} sub={handleClick} count={count} />
        </Route>
        <Route exact path="/Fashion" component={Fashion} >
          <Fashion add={handleClicksum} sub={handleClick} count={count} />
        </Route>
        <Route exact path="/Gift" component={Gift} >
          <Gift add={handleClicksum} sub={handleClick} count={count} />
        </Route>
      </div>
    </BrowserRouter>

  )
}

// export default App

