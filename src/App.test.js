import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders Estate Agent heading", () => {
  render(<App />);
  const headerElement = screen.getByText("Estate Agent");
  expect(headerElement).toBeInTheDocument();
});
