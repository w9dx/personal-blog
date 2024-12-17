import myPicture from "../assets/ME.jpg";
export default function AboutPage() {
  return (
    <>
      <h1>Hello</h1>
      <div className="flex gap-3">
        <div>
          <img src={myPicture} alt="Andrew Picture" />
        </div>
        <div>
          <h2>My name is Andrew Pham.</h2>
          <p>
            I am a software developer with a passion for creating beautiful and
            functional websites. I have experience in both front-end and
            back-end development, and I am always looking to learn new
            technologies and improve my skills.
          </p>
          <p>
            I'm currently looking for opportunity to dedicate as a fullstack
            developer. If you interested in my profile, please feel free to
            contact me.
          </p>
          <a href="https://www.linkedin.com/in/ngoc-pham-24613417b/">
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
