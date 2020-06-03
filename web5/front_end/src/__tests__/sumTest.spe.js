  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });


  it('it expects 2+2=5 to work', () => {
    expect(2 + 2).toBe(5);
  });

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('two plus two multiple tests', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

/*
import Article from '../components/Article';
import React from 'react';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const getByText = render(<Article name="testname" id="1" desc="testdesc"/>);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
