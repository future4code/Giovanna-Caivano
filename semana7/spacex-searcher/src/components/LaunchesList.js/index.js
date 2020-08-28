import React from 'react'
import axios from 'axios'
import { Title, SearchWrapper, LaunchTable, THead, Row, Cell } from './styles.js'

const baseURL = "https://api.spacexdata.com/v3/";

export default class LaunchesList extends React.Component {
    state = {
        launchesList: [],
        launchYear: "",
        rocketList: []
      };
    
      componentDidMount() {
        this.getLaunches();
      }
    
      getLaunches = () => {
        axios
          .get(`${baseURL}launches`)
          .then((response) => {
            this.setState({ launchesList: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    
      onChangeYear = (e) => {
        this.setState({ launchYear: e.target.value });
      };
    
      pullFilteredList = (arg1, arg2) => {
        axios
          .get(`${baseURL}launches?${arg1}=${arg2}`)
          .then((response) => {
            this.setState({ launchesList: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    
      render() {
        return (
          <div>
            <Title>SpaceX Launches!</Title>
            <SearchWrapper>
              <label>By Year</label>
              <input
                placeholder="2020"
                value={this.state.launchYear}
                onChange={this.onChangeYear}
              />
              <button onClick={() => this.pullFilteredList("launch_year", this.state.launchYear)}>Search</button>
            </SearchWrapper>
            <LaunchTable size="bg">
              <THead>
                <tr>
                  <th>Year</th>
                  <th>Mission</th>
                  <th>Rocket</th>
                </tr>
              </THead>
              <tbody>
                {this.state.launchesList.map((item) => {
                  return (
                    <Row key={item.flight_number}>
                        <Cell>{item.launch_year}</Cell>
                        <Cell>{item.mission_name}</Cell>
                        <Cell>{item.rocket.rocket_name}</Cell>
                    </Row>
                    );
                  })}
              </tbody>
            </LaunchTable>
            </div>
        );
      }
    }