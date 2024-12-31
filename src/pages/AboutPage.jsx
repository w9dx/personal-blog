// import myPicture from "../assets/ME.jpg";
// import linkedinIcon from "../assets/icons/linkedin_icon.svg";
// import githubIcon from "../assets/icons/github_icon.svg";
import Card from "../components/ui/Card";
import ShowCaseListPage from "./showcases/ShowCaseListPage";

export default function AboutPage() {
  return (
    <>
      <div className="flex gap-4">
        <Card className={"w-1/3"}>
          <h1>Hello</h1>
          <div>
            <h2>My name is Andrew Pham.</h2>
            <p>
              I am a software developer with a passion for creating beautiful
              and functional websites. I have experience in both front-end and
              back-end development, and I am always looking to learn new
              technologies and improve my skills.
            </p>
            <p>
              I&apos;m currently looking for opportunity to dedicate as a
              fullstack developer. If you interested in my profile, please feel
              free to contact me.
            </p>
          </div>
        </Card>
        <Card className={"w-2/3"}>
          <ShowCaseListPage />
        </Card>
      </div>
      {/* <div className="flex gap-3">
        <div>
          <a
            href="https://www.linkedin.com/in/ngoc-pham-24613417b/"
            target="_blank"
          >
            <img
              className="h-6 w-6"
              src={linkedinIcon}
              alt="My Linkedin Profile"
            />
            <span>LinkedIn</span>
          </a>
        </div>
        <a href="https://github.com/w9dx" target="_blank">
          <img className="h-6 w-6" src={githubIcon} alt="My Github Profile" />
          <span>Github</span>
        </a>
      </div> */}
    </>
  );
}
