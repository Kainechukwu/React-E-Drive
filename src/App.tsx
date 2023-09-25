import React, { Suspense } from "react";
// import Counter from "./features/counter/Counter";
// import UseReducerFile from "@/Tutorial/UseReducer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import Home from "./pages/Home";
import "../index.scss";
import NotFound from "./pages/NotFound";
import BaseLayout from "./layouts/BaseLayout";
import MainLayout from "./layouts/MainLayout";
import UseReducerFile from "./Tutorial/UseReducer";
import UseMemoFile from "./Tutorial/UseMemo";
import UseCallBackFile from "./Tutorial/UseCallBack";
import UseLoaderData, { dataLoader } from "./Tutorial/UseLoaderData";
import routes from "./routes";
import PreLoader from "./components/PreLoader";
import HomePage from "./pages/landing-pages/Home";
function App(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<UseReducerFile />} />
          <Route path="/usememo" element={<UseMemoFile />} />
          <Route path="/usecallback" element={<UseCallBackFile />} />
          <Route path="data" element={<UseLoaderData />} loader={dataLoader} />

          {routes.map(({ component: Component, path }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense
                  data-testid="suspense"
                  fallback={<PreLoader data-testid="pre-loader" />}
                >
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route index element={<UseReducerFile />} />
        <Route path="/usememo" element={<UseMemoFile />} />
        <Route path="/usecallback" element={<UseCallBackFile />} />
        <Route path="data" element={<UseLoaderData />} loader={dataLoader} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );
  return (
    //using createbrowserrouter
    <div className="App">
      <RouterProvider router={router} />
    </div>

    //using no  router
    // <div className="App">
    //   <div className="p-6 flex flex-col gap-4">
    //     <UseCallBackFile />
    //     <UseMemoFile />
    //     <UseReducerFile />
    //     <Counter />
    //   </div>
    // </div>
    //using browser router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<BaseLayout />}>
    //       <Route index element={<Home />} />
    //       {/* <Route path="usereducer" element={<UseReducerFile />} /> */}
    //       {/* <Route path="usememo" element={<UseMemoFile />} />
    //       <Route path="usecallback" element={<UseCallBackFile />} /> */}
    //     </Route>
    //     <Route path="/usereducer" element={<UseReducerFile />} />
    //     <Route path="/usememo" element={<UseMemoFile />} />
    //     <Route path="/usecallback" element={<UseCallBackFile />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
