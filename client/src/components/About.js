import React from 'react'
import Contestants from './Contestants';
import '../templates/about.css'
import '../App.css';
function About() {
    return (
        <div className="container">
            <div class="codefury">
                <div id="image">
                    <img src='https://source.unsplash.com/300x300/?cricket,chocolate' alt="codefury" />
                </div>
                <div id="codefury-info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perferendis reiciendis ipsa facere minus. Dolore distinctio facilis ex rerum, laborum quos non ratione dicta veritatis est maxime reprehenderit aperiam repellendus blanditiis ipsam expedita aliquam numquam, cum error officiis quasi sit. Vel libero officia obcaecati ullam ea qui deleniti magni et.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perferendis reiciendis ipsa facere minus. Dolore distinctio facilis ex rerum, laborum quos non ratione dicta veritatis est maxime reprehenderit aperiam repellendus blanditiis ipsam expedita aliquam numquam, cum error officiis quasi sit. Vel libero officia obcaecati ullam ea qui deleniti magni et.
                </div>
            </div>
            
            <h2>Contestants</h2>
            <Contestants />
        </div>
    )
}

export default About;