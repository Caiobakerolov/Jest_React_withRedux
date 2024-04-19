/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostComments from '..';
import { act } from 'react-dom/test-utils';

describe('Test components PostComments', () => {
  test('should test rendering post comments correctly', async () => {
    render(<PostComments />);

    const input = screen.getByTestId('postText');
    const button = screen.getByTestId('postButton');    
    
    await act(async () => {
      await userEvent.type(input, 'New comments 1');
    });

    
    await act(async () => {
      fireEvent.click(button);
    });

    expect(screen.getByTestId('postComments')).toBeInTheDocument();
    expect(screen.getByText('New comments 1')).toBeInTheDocument();
  })
})
