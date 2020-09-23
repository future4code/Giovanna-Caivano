import React from 'react';
import { fireEvent, getByLabelText, getByPlaceholderText, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

const createTaskAndRender = (taskText) => {
  const utils = render(<App/>)

  const taskInput = utils.getByPlaceholderText(/nome da tarefa/)
  // const select = utils.getByTestId('day')
  
  fireEvent.change(taskInput, { target: { value: taskText }})
  // fireEvent.change(select, { target: { value: taskDay }})

  const addButton = utils.getByText('criar')
  fireEvent.click(addButton)

  return utils
}

test('renders planner - day-to-day grid and task creation box', () => {
  const utils = render(<App/>)

  const taskBox = utils.getByText(/nova tarefa/i)
  expect(taskBox).toHaveTextContent(/nova tarefa/i)
  
  const dayColumn = utils.queryAllByTestId("day")
  expect(dayColumn.length).toBeGreaterThan(1)
})

// test('check ability to create task', () => {
//   const {} = createTaskAndRender('Fazer compras')

//   expect(getByTestId("task-content")).toHaveTextContent("Fazer compras")
// })


