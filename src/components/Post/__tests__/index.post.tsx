import { render, screen } from '@testing-library/react';
import Post from '..'

describe('Test component Post', () => {
  test('You must insert it correctly', () => {
    
    const textMessage = 'This is a beautiful beach';
    const imgUrl = 'https://www.travelzoo.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/1_BoracayIsland_WhiteBeach_Philippines_shutterstock_401484094.jpg?width=820';
    
    render(<Post children={textMessage} imageUrl={imgUrl} />)
    expect(screen.getByTestId('post-image')).toHaveAttribute('src', imgUrl)
    expect(screen.getByTestId('post-text')).toBeInTheDocument();

  });
});