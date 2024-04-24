import React from "react";
import './About.css';
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at <br />
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque <br />
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor<br />
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in<br />
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit<br />
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi<br />
            hendrerit consequat. In dictum ligula in elit euismod malesuada.<br />
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta<br />
            odio, et pretium nibh scelerisque ut.
          </p>
        </div>

        <div className="owners">
        <img className="secondImage" src={process.env.PUBLIC_URL + '/icons_assets/restaurant.jpg'} alt="Home" style={{ width: '250px', height: '300px'}} />
        <img  src={process.env.PUBLIC_URL + '/icons_assets/Mario and Adrian A.jpg'} alt="Home" style={{ width: '250px', height: '300px'}} />
        </div>
      </div>
    </>
  );
};

export default About;
