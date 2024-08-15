import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest';
import App from '@/App';

describe('something truthy and falsy', () => {
  it('should render app', () => {
    const {getByText} = render(<App />);
    expect(getByText('Vite + React')).toBeInTheDocument()

    // check if App components renders headline
  });
});