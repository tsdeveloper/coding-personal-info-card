import './App.css'
import logo from './assets/hero.png'
function App() {

  return (
    <>
      <main className="profile-cards">
        <section className="profile-cards__card">
          <img src={logo} alt="" className="profile-cards__card--img"/>
            <div className="profile-cards__card--info">
                <p className="profile-cards__card--info__name">
                  Alex Front End
                </p>
                <p className="profile-cards__card--info__role">
                    CFO
                </p>
            </div>
        </section>

          <section className="profile-cards__card">
              <img src={logo} alt="" className="profile-cards__card--img"/>
              <div className="profile-cards__card--info">
                  <p className="profile-cards__card--info__name">
                      Alex Front End
                  </p>
                  <p className="profile-cards__card--info__role">
                      CFO
                  </p>
              </div>
          </section>

          <section className="profile-cards__card">
              <img src={logo} alt="" className="profile-cards__card--img"/>
              <div className="profile-cards__card--info">
                  <p className="profile-cards__card--info__name">
                      Alex Front End
                  </p>
                  <p className="profile-cards__card--info__role">
                      CFO
                  </p>
              </div>
          </section>
      </main>
    </>
  )
}

export default App
