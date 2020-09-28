import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByTestId, getByPlaceholderText, findByTestId, getByText, queryAllByText, waitForElement, queryByTestId, queryByText, screen } from "@testing-library/react";
import App from "./App";

const createTestPostAndRender = () => {
    const utils = render(<App/>)
    const inputText = utils.getByPlaceholderText(/novo post/i)
    const addButton = utils.getByText(/adicionar/i);
    fireEvent.change(inputText, {target: {value: "Texto do post" }});
    fireEvent.click(addButton);

    return utils
}

const createTestPost = (post) => {
    const inputText = screen.getByPlaceholderText(/novo post/i)
    const addButton = screen.getByText(/adicionar/i);
    fireEvent.change(inputText, {target: {value: post }});
    fireEvent.click(addButton);

}

test('Checa se um novo item é adicionado à lista de posts no clique em Adicionar', () => {
    const { findByTestId } = createTestPostAndRender();
    
    expect(findByTestId('post'));
})

test('Checa se o botão do post tem o texto trocado ao clicar em curtir', () => {
    const { getByText } = createTestPostAndRender();

    const likeButton = getByText('Curtir')

    fireEvent.click(likeButton)

    expect(likeButton).toHaveTextContent('Descurtir')

    fireEvent.click(likeButton)

    expect(likeButton).toHaveTextContent('Curtir')
})
    
test('Checa se o botão apagar deleta o post', () => {
    const { getByText, queryAllByTestId } = createTestPostAndRender();

    expect(queryAllByTestId('post').length).toEqual(1);

    const deleteButton = getByText(/apagar/i);

    fireEvent.click(deleteButton);    

    expect(queryAllByTestId('post')).toEqual([]);
})

test('Checa se o input é limpo após o clique em postar', () => {
    const { getByPlaceholderText } = createTestPostAndRender();

    const input = getByPlaceholderText(/novo post/i)

    expect(input).toHaveValue("")
})

test('Checa se a mensagem nenhum post é exibida', () => {
    const utils = render(<App/>)

    utils.getByText(/nenhum post/i)

    createTestPost("Texto do post")

    expect(utils.queryByText(/nenhum post/i)).toBeNull()
})

test('Checa a quantidade de posts está correta', () => {
    const utils = render(<App/>)

    expect(utils.queryByText(/quantidade de posts/i)).toBeNull();

    createTestPost("Texto do post");
    createTestPost("Texto do post");

    const amount = utils.getByText(/quantidade de posts/i)

    expect(amount).toHaveTextContent("Quantidade de posts: 2")
})

test('Checa se a msg de erro aparece quando o usuário tenta criar um post vazio', () => {
    const utils = render(<App/>)
    
    expect(utils.queryByText(/digite algo para criar o post/i)).toBeNull()

    createTestPost("")

    expect(utils.queryAllByTestId('post')).toEqual([])
    utils.getByText(/digite algo para criar o post/i)
    
    createTestPost("um post")
    expect(utils.queryAllByTestId('post').length).toBeGreaterThan(0)
    expect(utils.queryByText(/digite algo para criar o post/i)).toBeNull()
})