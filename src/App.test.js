import { render, screen, fireEvent } from "@testing-library/react";
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

test("changes the timeframe to daily", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Daily"));
  const yesterday = screen.getAllByText(/Yesterday/i);
  expect(yesterday.length).toEqual(6);
});

test("changes the timeframe to weekly", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Weekly"));
  const yesterday = screen.getAllByText(/Last Week/i);
  expect(yesterday.length).toEqual(6);
});

test("changes the timeframe to monthly", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Monthly"));
  const lastMonth = screen.getAllByText(/Last Month /i);
  expect(lastMonth.length).toEqual(6);
});
