import ShowCaseItem from "../components/ShowCaseItem";
import flexboxDemo from "../../assets/flex-box-desktop-design.jpg";
import productList from "../../assets/product-list.jpg";
export default function ShowCaseListPage() {
  return (
    <div className="showcase-list">
      <h1>Check out some of my works</h1>

      <ShowCaseItem
        title="Frontend Mentor Challenge: Flex Box Demo"
        descriptions={" "}
        references={`https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj`}
        imgSrc={flexboxDemo}
      />
      <ShowCaseItem
        title={"Frontend Mentor Challenge: Product List"}
        references={
          "https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d"
        }
        imgSrc={productList}
      />
    </div>
  );
}
