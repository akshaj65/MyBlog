import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import '../templates/contestant.css';
// import '../styles/Responsive.css';
class Contestants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studs: [
                {
                    id: 0,
                    name: 'Shreenanda P',
                    image: 'https://media-exp1.licdn.com/dms/image/C5603AQFvenAv5sV1Pw/profile-displayphoto-shrink_200_200/0/1600854213782?e=1638403200&v=beta&t=CzG-IlnnQyYt1YylNMcBrKEJJJ51SvmfHEKT1Pfgjac',
                    branch: 'CSE',
                    college: 'Sahyadri College of Engineering & Management',

                },
                {
                    id: 1,
                    name: 'Sarim Ahmed',
                    image: 'https://media-exp1.licdn.com/dms/image/C5603AQHtPqPm4aAvNQ/profile-displayphoto-shrink_200_200/0/1629813250993?e=1638403200&v=beta&t=cqjvlfqi6B-q6Kcn1T1hkde6qj-9Sk5fMl-fed_CH4E',
                    branch: 'CSE',
                    college: 'Sri Sairam College of Engineering',

                },
                {
                    id: 2,
                    name: 'Krishna Shenoy',
                    image: '/assets/krishna.jpg',
                    branch: 'CSE',
                    college: 'UVCE',

                },
                {
                    id: 3,
                    name: 'Akshaj G',
                    image: '/assets/Akshaj.jpg',
                    branch: 'ISE',
                    college: 'Presidency University',

                },
                
            ],
        };
    }

    render() {
        const details = this.state.studs.map((stud) => {
            return (
                <div key={stud.id} className="container">
                        <li>
                            <div >
                                <img className="contest-image" src={stud.image} alt={stud.name} />
                            </div>
                            <div className="padding center">
                                <h3>{stud.name}</h3>
                                <p>Branch: {stud.branch}</p>
                                <p>College: {stud.college}</p>
                            </div>
                        </li>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    
                        {details}
                    
                </div>
            </div>
        );
    }


}

export default Contestants;
