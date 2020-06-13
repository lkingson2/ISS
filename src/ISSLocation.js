import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, Sphere } from "react-simple-maps";
import {ReactComponent as SpaceShip} from './space-shuttle.svg'

import './ISS.css'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

class ISSLocation extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ISSlocation: [0, 0],
            pastISSLocation: []
        }
    }
    TrackISS = () => {
        fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(data => {
            this.state.pastISSLocation.push(this.ISSLocation)
            const latitude = parseInt(data.iss_position.latitude, 10)
            const longitude = parseInt(data.iss_position.longitude, 10)
            this.setState({ISSlocation: [latitude, longitude]})
            console.log(this.state.ISSlocation)
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.TrackISS()
        this.intervalID = setInterval(
            () => this.TrackISS(),
            10000
        );
    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
    };

    render(){
        return (
            <div className="map">
                <ComposableMap      
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                }}>
                    <Sphere stroke="#E4E5E6" strokeWidth={1} fill="#2da1db" />
                    <Geographies geography={geoUrl} >
                        {({ geographies }) =>
                        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="#5cd97d" stroke="#fff6ec"/>)
                        }
                    </Geographies>
                    <Marker key={"ISS"} coordinates={this.state.ISSlocation} >
                        <SpaceShip className="space-ship"/>
                    </Marker>
                </ComposableMap>
            </div>
        )
    }
}

export default ISSLocation;
