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

              <section className="blockFirst">Блок1
                  <div className="blockFirstHello">
                      <h1>Hi my is Ivan Ivanich</h1>
                      <img src="" alt="Photo"/>
                  </div>
              </section>

              <section className="blockTwo">Блок2
                  <div className="skills">
                      <div className="skillsHead">
                          <h3>My skills</h3>
                      </div>

                      <div className='skillsItem'>
                          <div className="skill">
                              <div><img src="" alt="im"/>
                                  <h3>React</h3>
                              </div>
                              <p>About skills</p>
                          </div>
                          <div className="skill">
                              <div><img src="" alt="im"/>
                                  <h3>React</h3>
                              </div>
                              <p>About skills</p>
                          </div>
                          <div className="skill">
                              <div><img src="" alt="im"/>
                                  <h3>React</h3>
                              </div>
                              <p>About skills</p>
                          </div>
                      </div>
                  </div>

              </section>
              <section>Блок3
                  <div>
                      <div>
                          <h3>Мои работы</h3>
                      </div>
                      <div>
                          <div>
                              <img src="" alt="Картинка"/>
                              <button>Show</button>
                              <h4></h4>
                              <p></p>

                          </div>
                          <div>
                              <img src="" alt="Картинка"/>
                              <button>Show</button>
                              <h4></h4>
                              <p></p>
                          </div>
                      </div>
                  </div>
              </section>
              <section>Блок4
                  <div>
                      <h3>I want to work far from you!!!!</h3>

                      <button>HIRE ME
                      </button>
                  </div></section>
              <section>Блок5
                  <div>
                      <h3>Contact</h3>
                      <form>
                          <input type="text" value="<input>"/>
                          <input type="text" value="<input>"/>
                          <textarea value="</textarea>">

                          </textarea>

                      </form>
                      <button>Send
                      </button>
                  </div>
              </section>

          </main>
          <footer>Footer
              <div>
                  <h3>
                      Ivan Ivanov
                  </h3>
                  <div className="">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <h5>
                      2019 All is ok
                  </h5>
              </div>

          </footer>

      </div>
  );
}

export default App;
