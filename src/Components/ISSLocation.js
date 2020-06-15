import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, Sphere } from "react-simple-maps";
import './ISS.css'


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class ISSLocation extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ISSlocation: [0, 0],
            pastISSLocation: [],
            mapDimensions: [],
            mapCenter: [],
            futureISSLocation: []
        }
    }
    TrackISS = () => {
        fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(data => {
            this.state.pastISSLocation.push(this.ISSLocation)
            const latitude = parseFloat(data.iss_position.latitude, 10);
            const longitude = parseFloat(data.iss_position.longitude, 10);
            this.setState({ISSlocation: [longitude, latitude]})
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
        const mapRect = document.getElementsByClassName('rsm-sphere')[0].getBoundingClientRect();
        const mapCenter = [(mapRect.bottom - mapRect.top) / 2, (mapRect.right - mapRect.left)/2]
        this.setState({mapDimensions: [mapRect.width, mapRect.height]})
        this.setState({mapCenter: mapCenter})

    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
    };

    handleClick = (e) => {
        e.preventDefault();
        console.log(e.clientX + " " + e.clientY);
        //TODO Map clicks to lat and long coordinates 
    };

    render(){
        return (
            <div className="map" >
                <ComposableMap  
                projectionConfig={{
                    scale: 147,
                }}>
                    <Sphere stroke="#E4E5E6" strokeWidth={1} fill="#2da1db"/>
                    <Geographies geography={geoUrl} >
                        {({ geographies }) =>
                            geographies.map(geo => 
                                <Geography 
                                    key={geo.rsmKey} 
                                    geography={geo} 
                                    fill="#5cd97d" 
                                    stroke="#fff6ec" 
                                    onClick={this.handleClick}/>
                            )
                        }
                    </Geographies>
                    {
                        <Marker key={"ISS"} coordinates={this.state.ISSlocation} >
                            <circle r={10} fill="black" stroke="#fff" strokeWidth={2} />
                        </Marker>
                    }
                </ComposableMap>
            </div>
        )
    }
}

export default ISSLocation;
