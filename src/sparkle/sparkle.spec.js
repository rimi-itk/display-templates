import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { jest } from "@jest/globals";
import slides from "../slides";
import Sparkle from "./sparkle";

configure({ adapter: new Adapter() });

// Mock svg's to avoid errors.
jest.mock("./shape.svg", () => () => <span />);
jest.mock("./instagram-logo.svg", () => () => <span />);

test("Test that sparkle loads", () => {
  const slide = slides[8];
  const wrapper = shallow(
    <Sparkle run slide={slide} content={slide.content} slideDone={() => {}} />
  );
  expect(wrapper.find(".template-sparkle").exists()).toBeTruthy();
});