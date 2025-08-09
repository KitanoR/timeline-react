import React from "react";
import ReactDOM from "react-dom/client";
import TimeLineApp from "./TimeLineApp";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <TimeLineApp />
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);