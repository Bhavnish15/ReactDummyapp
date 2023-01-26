import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Bhavnish</h1>
          <p>Amazing Person</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
            fugit repellat veniam debitis repudiandae atque quasi deserunt hic
            illo in nulla ab laboriosam perspiciatis consequuntur similique
            animi ullam illum odio.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eveniet a quasi ex tempora aliquid suscipit architecto! Suscipit,
            nemo vero molestiae alias eum corporis dolorem? Voluptatibus facere
            quasi ab facilis? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Rem illo officiis deleniti veniam aperiam maxime
            laudantium aspernatur, nostrum fugit et ratione. Quas aut explicabo
            vitae tempora praesentium voluptate quo quaerat!. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Harum aliquid quo repellendus
            mollitia fugit aut soluta adipisci libero illum odit odio debitis
            commodi cum, eaque suscipit ab sapiente in! Quod!. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Repellendus tenetur rerum
            deleniti assumenda. Optio nemo dolores soluta fuga porro fugit
            voluptates aliquid enim, similique reiciendis laudantium. Excepturi
            quidem eaque accusantium!
          </p>
        </div>
      </div>

      <div className="home4"  id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
