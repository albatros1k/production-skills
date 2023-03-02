import { render, screen } from '@testing-library/react';
import { Button } from '../Button/Button';

describe('Button', () => {
  test('with only one param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
