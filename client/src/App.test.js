import { render, screen, fireEvent } from "@testing-library/react";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleWare from "redux-saga";
import { reducer } from "./redux/restaurantRedux.js";
import watcherSaga from "./redux/saga.js";

import App from "./App.js";
import Restaurants from "./screens/Restaurants/Restaurants";

test("renders home page", () => {
  render(<App />);
  const app = screen.getByText(/Welcome/);
  expect(app).toBeInTheDocument();
});

test("Restaurants List displayed via saga", async () => {
  const sagaMiddleWare = createSagaMiddleWare("saga");
  let store = createStore(reducer, applyMiddleware(sagaMiddleWare));
  sagaMiddleWare.run(watcherSaga);
  render(
    <Provider store={store}>
      <Restaurants />
    </Provider>
  );
  const discoverButton = screen.getByText(/Discover Food Joints/);
  fireEvent(discoverButton, new MouseEvent("click"));
  setTimeout(() => {
    const table = screen.getByText(/Name/);
    expect(table).toBeInTheDocument();
  }, 5000);
  expect(discoverButton).toBeInTheDocument();
});
