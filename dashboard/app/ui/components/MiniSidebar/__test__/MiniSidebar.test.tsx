import { render } from '@testing-library/react';

// components
import { MiniSidebar } from '@/ui/components';

const useRouterMock = {
  push: jest.fn(),
};

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => useRouterMock,
}));

describe('MiniSidebar test case', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      ...global.matchMedia,
      writable: true,
    });
  });

  it('should render correctly', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <MiniSidebar
        isExpandSidebar
        onClose={mockFunction}
        onOpen={mockFunction}
        onSignOut={mockFunction}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
