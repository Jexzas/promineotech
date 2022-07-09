import React, { useState, useEffect } from "react";
import House from './house';
import { HouseApi } from '../api/houseAPI';



export default function HousesList(props) {
    const [ houses, getHouses ] = useState([]);
    useEffect(() => fetchHouses());

    const fetchHouses = async () => {
        const addHouses = await HouseApi.get();
        getHouses({houses: addHouses});
    }

    const updateHouse = async(updatedHouse) => {
        await HouseApi.put(updatedHouse);
        fetchHouses();
    }

    return (
        <div className="container-fluid text-white">
            {
                houses.map((house) => {
                    return (
                        <House key={house._id} house={house} updateHouse={updateHouse}/>
                    )
                })
            }
        </div>
    )

}
// below this is the code from the video
// I wanted to prove I could make it functional instead

// export default class HousesList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             houses: []
//         }
//     }

//     componentDidMount () {
//         this.fetchHouses();
//     }

//     fetchHouses = async () => {
//         const addHouses = await HouseApi.get();
//         this.setState({houses: addHouses})
//     }

//     updateHouse = async (updatedHouse) => {
//         await HouseApi.put(updatedHouse);
//         this.fetchHouses();

//     }

//     render() {
//         return (
//             <div className="container-fluid text-white">
//                 {
//                     this.state.houses.map((house) => {
//                         return (
//                             <House key={house._id} house={house} updateHouse={this.updateHouse}/>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

