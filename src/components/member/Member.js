import { images } from "../../data/assets";
import { topMenuRight } from "../../data/constant/menuItem";
import "./member.css";

const Member = () => {
  return (
    <div className="member">
      <div className="row member-team ">
        <div className="col-md-3">
          <h3 className="team-member-heading">TEAM MEMBER</h3>
          <h1 className="member-heading">Our Team Is Very Expert To Help</h1>
          <p className="member-para">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <button className="member-btn">ABOUT US</button>
        </div>
        <div className="col-md-9 member-card-row">
        <div className="row">
        <div className="col-md-4 card1 member-card">
            <img src={images.member1} alt="" />
            <div className="overlay">
                <h4>Elissa Tylor</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima pariatur quasi similique labore atque suscipit</p>
                <div className="icon">
                {
                    topMenuRight.map((item, i)=>(
                        <div key={item}>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="background-img">
                <img src={images.group56}alt="" />
            </div>
        </div>
        <div className="col-md-4 member-card">
            <img src={images.member2} alt="" />
            <div className="overlay">
                <h4>Elissa Tylor</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima pariatur quasi similique labore atque suscipit</p>
                <div className="icon">
                {
                    topMenuRight.map((item, i)=>(
                        <div key={item}>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        <div className="col-md-4 member-card">
            <img src={images.member3} alt="" />
            <div className="overlay">
                <h4>Elissa Tylor</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima pariatur quasi similique labore atque suscipit</p>
                <div className="icon">
                {
                    topMenuRight.map((item, i)=>(
                        <div key={item}>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
