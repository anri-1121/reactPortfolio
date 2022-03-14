import "./testimonials.scss";
import userCardArrow from "../images/userCardArrow.png";
import userCardTwitterIcon from "../images/userCardTwitterIcon.png";

export default function Testimonials() {
  const compNames = ["GENEROUS", "WIX"];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {/* DOWN IS CARD LIST DO NOT SCARED OF MUCH CODE */}
        <div className="card">
          <div className="top">
            <img src={userCardArrow} className="left" alt="arrowIcon" />
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/550b463ee4b05fd78e0427b4/1636226601420-1843CDW0E3Y0GQ81D1ZY/the+bestest+headshot+photographer+near+me+vadym+guliuk-103.jpg?format=1000w"
                className="user"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img src={userCardTwitterIcon} className="right" alt="" />
            </a>
          </div>
          <div className="center">
            "I am very happy with his work, I think he is very talented and
            hardworking."
          </div>
          <div className="bottom">
            <h2>John</h2>
            <h3>Meneger of {compNames[0]}</h3>
          </div>
        </div>
        <div className="card feature">
          <div className="top">
            <img src={userCardArrow} className="left" alt="arrowIcon" />
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img
                src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
                className="user"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img src={userCardTwitterIcon} className="right" alt="" />
            </a>
          </div>
          <div className="center">
            "He learns and masters very quickly. The projects he created are
            very good."
          </div>
          <div className="bottom">
            <h2>Jessica</h2>
            <h3>CEO Of {compNames[1]}</h3>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img src={userCardArrow} className="left" alt="arrowIcon" />
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img
                src="http://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg"
                className="user"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img src={userCardTwitterIcon} className="right" alt="" />
            </a>
          </div>
          <div className="center">
            "I think he is a very good developer, I highly recommend him."
          </div>
          <div className="bottom">
            <h2>Adams</h2>
            <h3>Employee of {compNames[1]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
