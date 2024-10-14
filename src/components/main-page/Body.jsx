import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './body.css';

const Body = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  console.log(import.meta.env.VITE_API_KEY);
  console.log(import.meta.env.VITE_API_KEY);



  async function generateAnswer() {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
      method: 'post',
      data: { "contents": [{ "parts": [{ "text": question }] }] }
    });

    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <div className='central-main-body'>

      {/* ---navigation bar--- */}
      <div className="nav-bar">
        <div className='nav-title'>Infinia</div>
        <img className='user-icon' src={assets.user_icon} alt="user" />
      </div>

      {/* ---welcome text--- */}


      {/* --- answer OR cards container--- */}
      {answer ? (

        <div className="qna-section">

          <div className="question-container">
            {question}
          </div>

          <div className="seperator"></div>

          <pre className='answer-container'>
            {answer}
          </pre>
        </div>

      ) : (
        <div className='welcome-page-section'>

          <div className="welcome-text-section">
            <div className="text-wrapper">
              <span className='welcome-title'>Hello, user</span>
              <div className='welcome-subtitle'>How can I help you today?</div>
            </div>
          </div>

          <div className="card-container">
            <div className="cards-holder">
              {['compass', 'bulb', 'message', 'code'].map((icon, index) => (
                <div key={index} className="card">
                  <div className='card-text'>Help design a database schema for a business</div>
                  <img className={`card-icon ${icon}-icon`} src={assets[`${icon}_icon`]} alt={`${icon}-icon`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---input and search section--- */}
      <div className="input-section-container">
        <div className="input-section">
          <input
            className='input-field'
            type="text"
            placeholder='Enter a prompt here'
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <div className="icon-container" onClick={generateAnswer} onTouchStart={(e) => {
            e.stopPropagation();
            generateAnswer();
          }}>
            <img className='icon send-icon' src={assets.send_icon} alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;