import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByTestId, getByPlaceholderText, findByTestId, getByText, queryAllByText, waitForElement } from "@testing-library/react";
import App from "./App";

const createTestPost = (getByText, getByPlaceholderText, post) => {
    const inputText = getByPlaceholderText(/novo post/i)
    const addButton = getByText(/adicionar/i);
    fireEvent.change(inputText, {target: {value: post }});
    fireEvent.click(addButton);

}

test('Checa se um novo item é adicionado à lista de posts no clique em Adicionar', () => {
    const { getByText, getByPlaceholderText } = render(<App/>);
    
    createTestPost(getByText, getByPlaceholderText, 'Texto do post.');
    
    expect(findByTestId('post'));
})

test('Checa se o botão do post tem o texto trocado ao clicar em curtir', () => {
    const { getByText, getByPlaceholderText } = render(<App/>);

    createTestPost(getByText, getByPlaceholderText, 'Texto do post.');

    const likeButton = getByText('Curtir')
    fireEvent.click(likeButton)

    expect(likeButton).toHaveTextContent('Descurtir')
    
    })
    
test('Checa se o botão apagar deleta o post', () => {
    const { getByText, getByPlaceholderText, queryAllByTestId } = render(<App/>);

    createTestPost(getByText, getByPlaceholderText, 'Texto do post.');

    expect(queryAllByTestId('post').length).toEqual(1);

    const deleteButton = getByText(/apagar/i);
    fireEvent.click(deleteButton);    

    expect(queryAllByTestId('post')).toEqual([]);
})

test('Checa se o input é limpo após o clique em postar', () => {
    const { getByText, getByPlaceholderText } = render(<App/>);

    createTestPost(getByText, getByPlaceholderText, 'Texto do post.');
    const inputValue = getByPlaceholderText(/novo post/i).value

    expect(inputValue).toBe("")
})