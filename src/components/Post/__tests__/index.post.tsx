import { render, screen } from '@testing-library/react';
import Post from '..'

describe('Test component Post', () => {
  test('the image is being rendered and the text is being displayed', () => {
    
    const textMessage = 'This is a beautiful beach';
    const imgUrl = 'https://www.travelzoo.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/1_BoracayIsland_WhiteBeach_Philippines_shutterstock_401484094.jpg?width=820';
    
    render(<Post children={textMessage} imageUrl={imgUrl} />)
    expect(screen.getByTestId('post-image')).toHaveAttribute('src', imgUrl)
    expect(screen.getByTestId('post-text')).toBeInTheDocument();

  });
});