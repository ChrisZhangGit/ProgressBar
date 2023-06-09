import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BarGroup from "./BarGroup";

describe("BarGroup", () => {
  test("renders correct number of bars", () => {
    render(<BarGroup />);
    const progressBars = screen.getAllByTestId(/progress-bar-\d+/);
    expect(progressBars.length).toBe(3);
  });

  test("initial progress values are set to correct values", () => {
    render(<BarGroup />);
    const progressBars = screen.getAllByTestId(/progress-bar-\d+/);
    expect(progressBars[0]).toHaveStyle("width: 25%");
    expect(progressBars[1]).toHaveStyle("width: 50%");
    expect(progressBars[2]).toHaveStyle("width: 75%");
  });

  test("updates progress value correctly on button click", () => {
    render(<BarGroup />);
    const buttons = screen.getAllByRole("button");
    const firstProgressBar = screen.getByTestId("progress-bar-0");

    fireEvent.click(buttons[2]);
    expect(firstProgressBar).toHaveStyle("width: 35%");

    fireEvent.click(buttons[3]);
    expect(firstProgressBar).toHaveStyle("width: 60%");

    fireEvent.click(buttons[1]);
    expect(firstProgressBar).toHaveStyle("width: 50%");

    fireEvent.click(buttons[0]);
    expect(firstProgressBar).toHaveStyle("width: 25%");
  });

  test("changes selected bar correctly", () => {
    render(<BarGroup />);
    const dropdown = screen.getByRole("combobox");
    const firstProgressBar = screen.getByTestId("progress-bar-0");
    const secondProgressBar = screen.getByTestId("progress-bar-1");

    fireEvent.change(dropdown, { target: { value: "1" } });
    expect(firstProgressBar).not.toHaveClass("selected-bar");
    expect(secondProgressBar).toHaveClass("selected-bar");

    fireEvent.change(dropdown, { target: { value: "0" } });
    expect(firstProgressBar).toHaveClass("selected-bar");
    expect(secondProgressBar).not.toHaveClass("selected-bar");
  });
});
