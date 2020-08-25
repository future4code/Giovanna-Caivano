import React from 'react'
import styled from 'styled-components'
import './App.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: "",
      filter: ""
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
      const novasTarefas = JSON.parse(localStorage.getItem("tarefas"))

      this.setState({tarefas: novasTarefas})
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTodo = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novoArrayTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({
      tarefas: novoArrayTarefas,
      inputValue: ""
    })

  }

  selectTarefa = (id) => {
    const arrayDeTarefasConcluidas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: arrayDeTarefasConcluidas})
  }

  deleteTarefa = (id) => {
    const arrayDeTarefasMantidas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })

    this.setState({tarefas: arrayDeTarefasMantidas})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  cleanTarefas = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filter) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <Container>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.addTodo}>Adicionar</button>
          <button onClick={this.cleanTarefas}>Limpar todas</button>
        </Container>
        <br/>
        <Container>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </Container>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onAuxClick={() => this.deleteTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
