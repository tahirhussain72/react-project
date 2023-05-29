import "./mainContain.css";
import { images } from '../../data/assets/index'

const MainContain = () => {
  return (
    <>
      <div className="mainContain">
      <div className="col-md-12">
      <h3>FINANCE</h3>
        </div>
      <div className="mainContainer">
        <div className="mainHeading">
          
          <h1>Our Finance <br/> Can Give More <br/> Possiblities</h1>
          <p className="para">
            FINANCE Our Finance Can Give More Possiblities A wonderful serenity
            has taken possession of my entire soul, like these sweet mornings of
            spring which I enjoy with my whole heart.A wonderful serenity has
            taken.
          </p>
          <button className="btn">Read More</button>
        </div>
        {/* secind div, */}
        <div className="mainContainImg" >
        <div className="bgimg" >
        <img src= {images.bg3} alt="no img" />
        </div>
            <img className="circal-img" src= {images.group33} alt="no img" />
            <div className="bg-uppar-bottom">
              <img src={images.bg2} alt="" />
            </div>
            <div className="bottom-img">
              <img src={images.bg1} alt="" />
            </div>
            <div className="bottom-img">
              <img src={images.bg1} alt="" />
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MainContain;
