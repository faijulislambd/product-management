const ProductCards = ({
  productImg = "#",
  productCode = 0,
  productChineseCode = 0,
  price = 0,
  lot = 0,
  inStock = 0,
  sold = 0,
  returned = 0,
  shadow = "shadow-neuGr",
}) => {
  return (
    <div
      className={`rounded-xl ${shadow} p-5 group transition-all overflow-hidden relative`}
    >
      <div className="group-hover:flex group-hover:justify-between h-[380px]">
        <img
          src={productImg}
          alt={productCode}
          className="rounded-xl object-cover h-[350px] w-full group-hover:w-1/3 group-hover:h-[100px] transition-all duration-500"
        />

        <div className="absolute top-[90%] left-5 transition-all duration-500 text-lg group-hover:top-5 group-hover:left-[45%]">
          <strong className="font-semibold uppercase">Model Number:</strong>{" "}
          {productCode}
        </div>
        <div className="absolute top-[90%] right-5 transition-all duration-500 text-lg group-hover:top-12 group-hover:right-5 ">
          <strong className="font-semibold uppercase">Price:</strong> {price}TK
        </div>
      </div>

      <table className="table-fixed w-[90%] rounded-xl absolute shadow-neuGr transition-all opacity-0 scale-0 top-[140px] group-hover:scale-100 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-xl duration-500">
        <tbody>
          <tr>
            <td className="font-bebas border-r-2 border-white px-2 py-3">
              Chinese Model No
            </td>
            <td className="px-2 py-3">{productChineseCode}</td>
          </tr>
          <tr className="border-t-2 border-white">
            <td className="font-bebas border-r-2 border-white px-2 py-3">
              Lot No
            </td>
            <td className="px-2 py-3">{lot}</td>
          </tr>
          <tr className="border-t-2 border-white">
            <td className="font-bebas border-r-2 border-white px-2 py-3">
              In Stock
            </td>
            <td className="px-2 py-3">{inStock}</td>
          </tr>
          <tr className="border-t-2 border-white">
            <td className="font-bebas border-r-2 border-white px-2 py-3">
              Sold
            </td>
            <td className="px-2 py-3">{sold}</td>
          </tr>
          <tr className="border-t-2 border-white">
            <td className="font-bebas border-r-2 border-white px-2 py-3">
              Return
            </td>
            <td className="px-2 py-3">{returned}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCards;
