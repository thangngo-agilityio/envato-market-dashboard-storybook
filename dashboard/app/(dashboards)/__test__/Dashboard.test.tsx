import { QueryProvider } from '@/ui/providers';
import Dashboard from '../page';
import { useSearchParams } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('react-intersection-observer');

describe('Dashboard render', () => {
  beforeAll(async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(),
      forEach: jest.fn(),
    });
  });

  test('Should render match with snapshot.', async () => {
    const { container } = render(await Dashboard(), { wrapper: QueryProvider });
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
