import React from 'react'
import axios from 'axios'

import RocketCard from './RocketCard.js'
import { MainTitle, MainGrid } from './styles'

const baseURL = "https://api.spacexdata.com/v3/";

export default class RocketsPage extends React.Component {
    state = {
        rocketsList: []
    }

    componentDidMount() {
        this.pullRocketsList()
    }

    pullRocketsList = () => {
        axios
          .get(`${baseURL}rockets`)
          .then((response) => {
            this.setState({ rocketsList: response.data });
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      };

    render() {
        return (
            <MainGrid>
                <MainTitle>ROCKETS!</MainTitle>
                {this.state.rocketsList.map((rocket) => {
                    return <RocketCard key={rocket.id} 
                        url={rocket.flickr_images[0]}
                        name={rocket.rocket_name}
                        height={rocket.height.meters}
                        weight={rocket.mass.kg}
                        description={rocket.description}
                        />
                })}
            </MainGrid>
        )
    }
}