import React from 'react';
import './Astronauts.css'

class Astronauts extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            astronauts: [],
        }
    }

    componentDidMount(){
        this.getAstronauts()
    }

    getAstronauts = () => {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => {
            this.setState({astronauts: data.people})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="space-people">
                <div className="list">
                    <h2>Astronauts at ISS</h2>
                    <ul>
                        {   
                            this.state.astronauts.map((astronaut, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={`https://en.wikipedia.org/wiki/${astronaut.name}`} target="_blank" rel="noopener noreferrer" >
                                            {astronaut.name + "        " + astronaut.craft}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Astronauts;