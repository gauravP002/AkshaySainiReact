import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponenet";
import BodyComponent from "./BodyComponent";
import ReactDOM from "react-dom/client";
const App = () => {
    return (
        <div className="app">
      <HeaderComponent username ="Gaurav" />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const firstElement = <h1>this is firstElement
    <App/>
</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
