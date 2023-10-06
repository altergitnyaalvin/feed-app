import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux'; 
import AddArticle from '../src/pages/AddArticle/AddArticle';
import * as reactRedux from 'react-redux'
import jest from 'jest'

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

beforeEach(() => {
  useSelectorMock.mockClear()
  useDispatchMock.mockClear()
})

describe('AddArticle', () => { // untuk mendeskripsikan component apa yang mau ditest
  it('renders title element', () => { // scope test scenario 
    useSelectorMock.mockReturnValue({})
    render(<AddArticle />); // melakukan rendering component <App />
    const headline = screen.getByText(/Add New Article/i); // melakukan selection terhadap text di dalam component App
    expect(headline).toBeInTheDocument(); // assertiion
  });

  it('Test Product Name', () => {
    const { getByText, getByLabelText } = render(<AddArticle />)
    // Testing Label text
    const input = getByLabelText('Author')

    // Test input value
    fireEvent.change(input, { target: { value: 'Kacang' } })

    
  })
});