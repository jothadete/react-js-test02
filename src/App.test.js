import React from "react";
import { render, screen } from '@testing-library/react';
import {App, addiere } from './App';


test('renders "App"', () => {
  render(<App />);
  expect(1).not.toBe(2);
});

test('function addiere', () => {
  expect(addiere(1,2)).toBe(3);
});
