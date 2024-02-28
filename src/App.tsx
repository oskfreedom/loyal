import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PATH } from "consts";
import { DashboardPage, MyCardPage } from "pages";
import { store } from "store";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={1000}
      />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.MYCARD} element={<MyCardPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
