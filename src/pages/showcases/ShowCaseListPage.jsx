import ShowCaseItem from "../components/ShowCaseItem";
import flexboxDemo from "../../assets/flex-box-desktop-design.jpg";
import productList from "../../assets/product-list.jpg";
import responsiveDesign from "../../assets/everyday-design.png";
import "./showcase.css";

export default function ShowCaseListPage() {
  return (
    <div className="showcase-list">
      <h1>Check out some of my works</h1>
      <ShowCaseItem
        title="Frontend Mentor Challenge: Flex Box Demo"
        descriptions={" "}
        references={`https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj`}
        imgSrc={flexboxDemo}
        previewLink={"https://flex-box-demo.netlify.app/"}
      />
      <ShowCaseItem
        title={"Frontend Mentor Challenge: Product List"}
        references={
          "https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d"
        }
        imgSrc={productList}
      />
      <ShowCaseItem
        title={"Linkedin Learning: Responsive Design"}
        references={
          "https://www.linkedin.com/learning/creating-a-responsive-web-design"
        }
        descriptions={
          "Discover how to use responsive web design to make your site more readable and efficient—on any device."
        }
        imgSrc={responsiveDesign}
        previewLink={"https://everyday-design.netlify.app"}
      />
    </div>
  );
}
