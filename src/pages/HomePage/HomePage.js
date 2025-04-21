import "./HomePage.css";
import img from "../../../src/heroBackground.png"
import bulb from "../../../src/bulb-svgrepo-com.svg"
import favorite from "../../../src/favorite-favorite-svgrepo-com.svg"
import calender from "../../../src/calendar-svgrepo-com.svg"
import list from "../../../src/cart-shopping-list-svgrepo-com.svg"
import { Link } from "react-router-dom";
import lowcost from "../../../src/save-money-cash-savings-money-reserve-svgrepo-com - Copie.svg"
import family from "../../../src/family-svgrepo-com.svg"
import timer from "../../../src/timer-svgrepo-com - Copie.svg"
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    <div className="home-container">
      <section className="cover">
        <img className="cover-img" src={img} alt="logo-disihify" />
        <div className="headers">
          <h1>Discover</h1>
          <h1>Save</h1>
          <h1>Plan Your Meals</h1>
          <h3 >Explore thousands of recipes, create meal plans, and simplify your life with personalized tools</h3>
          <Link className="join-btn" to="/register">
            Join Now
            <i className="ri-arrow-right-long-line arrow"></i>
          </Link>
        </div>

      </section>

      <section style={{ display: "flex ", flexDirection: "column", alignItems: "center" }} >
        <h1 className="titles">Make Cooking Effortless <i className="ri-bowl-line titles"></i>
        </h1>
        <br></br>
        <div className="features" >
          <div className="col">
            <div className="feature-card">
              <div >
                <img className="feature-icon" src={bulb} alt="bulb-logo" />
              </div>

              <h2>Customize Your Recipes</h2>
              <p>Get tailored recipe  based on your preferences</p>
            </div>
            <div className="feature-card">
              <div >
                <img className="feature-icon" src={calender} alt="calender-logo" />
              </div>
              <h2>Plan Your Meal</h2>
              <p>Plan your weekly meals with ease and stay organized</p>
            </div>
          </div>
          <div className="col">
            <div className="feature-card">
              <div >
                <img className="feature-icon" src={favorite} alt="favorite-logo" />
              </div>
              <h2>Save Your Favorite</h2>
              <p>Quickly save and access your favorite recipes anytime</p>
            </div>
            <div className="feature-card">
              <div >
                <img className="feature-icon" src={list} alt="cart-list-logo" />
              </div>
              <h2>Automatic grocery lists</h2>
              <p>Automatically generate grocery lists based on your meal plan</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-recipies"> to be added later </section>
      <section className="statistics">
        <div className="statistic-card">
          <div >
            <img className="statistic-icon" src={family} alt="family-logo" />
          </div>
          <div>
          <h2>20% ate more meals togeather at home</h2>
          <p>Plan your weekly meals with ease and stay organized</p></div>
        </div>
        <div className="statistic-card">
          <div >
            <img className="statistic-icon" src={timer} alt="timer-logo" />
          </div>
          <div>
          <h2>33% reduction it time spent in cooking</h2>
          <p>Plan your weekly meals with ease and stay organized</p>
          </div>
        </div>
        <div className="statistic-card">
          <div >
            <img className="statistic-icon" src={lowcost} alt="cost-logo" />
          </div>
          <div>
            <h2>20% reduction Reduction if food costs</h2>
            <p>Plan your weekly meals with ease and stay organized</p>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
}

export default HomePage;