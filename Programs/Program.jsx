import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'

const Program = () => {
  return (
    <div className="programs" id='program' name='program'>
        <div className="program">
            <div className="image-container">
                <img src={program_1} alt="Programming Certificate" />
            </div>
            <h3>Programming Certificate</h3>
            <div className="description">
                <p>Gain a certified credential in programming that enhances your skills and career prospects.</p>
            </div>
        </div>

        <div className="program">
            <div className="image-container">
                <img src={program_2} alt="Master In Programming" />
            </div>
            <h3>Master In Programming</h3>
            <div className="description">
                <p>Become an expert programmer with comprehensive mastery of coding languages and frameworks.</p>
            </div>
        </div>

        <div className="program">
            <div className="image-container">
                <img src={program_3} alt="Coding Experts Advice" />
            </div>
            <h3>Coding Experts Advice</h3>
            <div className="description">
                <p>Get invaluable insights and advice from industry experts to refine your programming journey.</p>
            </div>
        </div>
    </div>
  )
}

export default Program
