import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyFirstComponent } from './my-first-component.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicMyFirstComponent />);
  const rendered = getByText('hello');
  expect(rendered).toBeTruthy();
});
