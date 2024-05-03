import ProductCards from "../../../components/ProductCards";
import product1 from "./../../../assets/product-img/1.jpg";
import product2 from "./../../../assets/product-img/2.jpg";
import product3 from "./../../../assets/product-img/3.jpg";

const TopSellingProducts = () => {
  return (
    <div className="py-36 bg-slate-200 px-12">
      <h2 className="font-bebas text-5xl mb-10 text-center">
        Our Best Selling Products
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-10">
        <ProductCards
          productImg={product1}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
        <ProductCards
          productImg={product2}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
        <ProductCards
          productImg={product3}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
        <ProductCards
          productImg={product1}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
        <ProductCards
          productImg={product2}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
        <ProductCards
          productImg={product3}
          productCode="S2306"
          productChineseCode="XGB118"
          price={750}
          lot={1}
          inStock={5}
          sold={3}
          returned={0}
        ></ProductCards>
      </div>
    </div>
  );
};

export default TopSellingProducts;
