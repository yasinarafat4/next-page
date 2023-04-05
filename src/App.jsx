import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  // loading spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
