import React from 'react';
import { findByText, fireEvent, getAllByPlaceholderText, getAllByTestId, getByText, render, screen, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import Axios from 'axios';
import { baseURL } from './constants';
import userEvent from '@testing-library/user-event';

Axios.get = jest.fn().mockResolvedValue({ data: []})
Axios.post = jest.fn().mockResolvedValue()
Axios.put = jest.fn().mockResolvedValue()
Axios.delete = jest.fn().mockResolvedValue()

test('initial render', async () => {

  Axios.get = jest.fn().mockResolvedValue({ 
    data: [{ 
      text: 'tarefa mock', 
      day: 'domingo'}]
    })

  render(<App/>)
  
  const input = screen.getByPlaceholderText('Nome da tarefa')
  expect(input).toBeInTheDocument()

  const addButton = screen.getByText(/criar/)
  expect(addButton).toBeInTheDocument()

  const textData = await screen.findByText('tarefa mock')
  expect(textData).toBeInTheDocument()
  
  expect(Axios.get).toHaveBeenCalledWith(baseURL)
})


test('create task', async () => {
  Axios.post = jest.fn().mockResolvedValue()
  Axios.get = jest.fn().mockResolvedValue({
    data: []
  })

  render(<App/>)

  const input = screen.getByPlaceholderText('Nome da tarefa')
  expect(input).toBeInTheDocument()

  const button = screen.getByText(/criar/)
  expect(button).toBeInTheDocument()

  await userEvent.type(input, 'tarefa mockada')

  userEvent.click(button)

  expect(Axios.post).toHaveBeenCalledWith(baseURL, {
    text: 'tarefa mockada',
    day: 'domingo'
  })

  await wait(() => {
    expect(Axios.get).toHaveBeenCalledTimes(2)
  })
})

test.skip('edit task', async () => {
  Axios.get = jest.fn().mockResolvedValue({
    data: [{
      id: '1',
      text: 'tarefa teste',
      day: 'segunda'
    }]
  })

  Axios.put = jest.fn().mockResolvedValue()

  render(<App/>)

  const input = screen.getByPlaceholderText('Nome da tarefa')
  expect(input).toBeInTheDocument()

  const button = screen.getByText(/criar/)
  expect(button).toBeInTheDocument()
  
  const testTask = await screen.findByText(/tarefa teste/)
  expect(testTask).toBeInTheDocument()

  expect(Axios.get).toHaveBeenCalledWith(baseURL)

  userEvent.click(testTask)

  expect(Axios.put).toHaveBeenCalledWith(`${baseURL}/1`, {
    day: 'terça'
  })

  await wait(() => {
    expect(Axios.get).toHaveBeenCalledTimes(3)
    expect(getByTestId('1')).toBeInTheDocument()
  })
})

test('delete task', async () => {
  Axios.get = jest.fn().mockResolvedValue({
    data: [{
      id: '1',
      text: 'tarefa teste',
      day: 'segunda'
    }]
  })

  Axios.delete = jest.fn().mockResolvedValue()

  render(<App/>)

  const input = screen.getByPlaceholderText('Nome da tarefa')
  expect(input).toBeInTheDocument()

  const button = screen.getByText(/criar/)
  expect(button).toBeInTheDocument()
  
  
  const testTask = await screen.findByText(/tarefa teste/)
  expect(testTask).toBeInTheDocument()
  
  const deleteButton = screen.getByText(/apagar/)
  expect(deleteButton).toBeInTheDocument()
  
  expect(Axios.get).toHaveBeenCalledWith(baseURL)

  fireEvent.click(deleteButton)

  expect(Axios.delete).toHaveBeenCalledWith(`${baseURL}/1`)

  await wait(() => {
    expect(Axios.get).toHaveBeenCalledTimes(3)
  })
})