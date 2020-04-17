import React from 'react';
import './verstka.css';
import './App.css';

function App() {
  return (
      <div className="App">
          <header className="head ">

              <span className="logo">Header</span>
              <nav>
                  <a href="">Главная</a>
                  <a href="">Скиллы</a>
                  <a href="">Работы</a>
                  <a href="">Контакты</a>
              </nav>
          </header>
          <main>
              <section className="blockFirst">
                  <h1>Hi my is Ivan Ivanich</h1>
                  <img src="" alt="Photo"/>
              </section>
              <section className="blockTwo">
                  <div className="skillsHead">
                      <h3>My skills</h3>
                  </div>
                  <div className='skillsItem'>
                      <div className="skill">
                          <img src="" alt="im"/>
                          <h3>React</h3>
                          <p>About skills</p>
                      </div>
                      <div className="skill">
                          <img src="" alt="im"/>
                          <h3>React</h3>
                          <p>About skills</p>
                      </div>
                      <div className="skill">
                          <img src="" alt="im"/>
                          <h3>React</h3>
                          <p>About skills</p>
                      </div>
                  </div>
              </section>
              <section className="blockThree">
                  <div className="worksHead">
                      <h3>Мои работы</h3>
                  </div>
                  <div className="worksItems">
                      <div className="work">
                          <div className="workImg">Картинка</div>
                          <button>Show</button>
                          <h4>Name project</h4>
                          <p>Some little description</p>

                      </div>
                      <div className="work">
                          <div className="workImg">Картинка</div>
                          <button>Show</button>
                          <h4>Name project</h4>
                          <p>Some little description</p>
                      </div>
                  </div>

              </section>
              <section className="hire">
                  <h3>I want to work far from you!!!!</h3>
                  <button>HIRE ME
                  </button>
              </section>
              <section>
                  <form className="message">
                      <h3>Contact</h3>
                      <input className="messageName" type="text" placeholder="Name"/>
                      <input className="messageEmail" type="email" placeholder="E-mail"/>
                      <textarea placeholder="Your message"> </textarea>
                      <button>Send</button>
                  </form>
              </section>
          </main>
          <footer>
              <h3>Ivan Ivanov</h3>
              <div className="follow">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <h5>2019 All is ok</h5>
          </footer>
          <div className="container"></div>
      </div>
  );
}

export default App;
