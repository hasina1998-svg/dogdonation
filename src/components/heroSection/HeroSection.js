import dog1 from "../images/dog1.png";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div>
        <div className="hero-image-card">
          <img src={dog1} className="hero-image" />
        </div>
        <div className="hero-text">Will you save me?</div>
      </div>
      <h2>GIVE A GIFT WHICH WILL BE USED WHERE IT IS NEEDED MOST</h2>
      <div>
        <div className="t">
          Every day, Soi Dog Foundation is called upon to rescue animals from
          abuse, abandonment, sickness or injury. Whether it’s a street dog or
          cat in need of life-saving medical treatment or our ongoing fight
          against the dog meat trade, none of it is possible without your
          support. We rescue, sterilise and treat street animals in need, while
          also actively fighting to end the Asian dog meat trade, having
          successfully ended the large-scale trade in Thailand. With no
          government funding, Soi Dog Foundation operates solely on donations
          from compassionate animal lovers around the world. We pride ourselves
          on the efficient use of funds so that the maximum number of animals
          can be helped.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
