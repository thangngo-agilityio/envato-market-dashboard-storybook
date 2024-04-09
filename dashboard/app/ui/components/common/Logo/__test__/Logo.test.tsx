import { render } from '@testing-library/react';

// component
import Logo from '..';

test('renders Logo with content', () => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});
