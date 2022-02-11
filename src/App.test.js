import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the timeframes", () => {
  render(<App />);
  const daily = screen.getByText(/Daily/i);
  const weekly = screen.getByText(/Weekly/i);
  const monthly = screen.getByText(/Monthly/i);
  expect(daily).toBeInTheDocument();
  expect(weekly).toBeInTheDocument();
  expect(monthly).toBeInTheDocument();
});
