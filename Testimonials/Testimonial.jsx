import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
      if (tx > -50){
        tx -=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward =()=>{
    if (tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }


  return (
    <div className='testimonials' name='testimonials' id='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Honey Jack</h3>
                  <span>Skill Tour , USA</span>
                </div>
              </div>
              <p>
              Skill Tour has completely reshaped my learning experience. The programming courses are thorough yet approachable, offering practical knowledge for beginners and advanced learners alike. Thanks to Skill Tour, I've advanced my coding skills, and I recommend it to anyone serious about learning programming while earning valuable credentials.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Williams Jack</h3>
                  <span>Skill Tour , UAE</span>
                </div>
              </div>
              <p>
              I recently found Skill Tour, and it has truly made a difference in my learning journey. The programming courses are comprehensive, easy to grasp, and perfect for learners at any level. Earning a certificate after completing each course is a fantastic bonus. I've improved my coding skills significantly thanks to this resource. I highly recommend Skill Tour for anyone looking to master programming </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jax son Lee</h3>
                  <span>Skill Tour , China</span>
                </div>
              </div>
              <p>
              I recently discovered this website and I must say, it been a game-changer for me.  What I love most is the certification that comes with The design is also clean and user-friendly, making it a pleasure to navigate. I highly recommend this website to anyone looking for a reliable source of information.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Robart Leo</h3>
                  <span>Skill Tour , USA</span>
                </div>
              </div>
              <p>
              Skill Tour is an exceptional platform that I recently discovered, offering a fantastic range of programming courses. that’s easy to follow, even for beginners. I’ve gained valuable knowledge and skills. I highly recommend Skill Tour for anyone serious about leveling up their programming abilities</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
