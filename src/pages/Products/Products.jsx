import Badge from "../../utils/Badge";
import Input from "../../utils/Forms/Input";
import product1 from "./../../assets/product-img/1.jpg";
import { TbEdit, TbEye, TbTrash } from "react-icons/tb";
const Products = () => {
  return (
    <div>
      <div className="bg-orange-400 pb-12 pt-6">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-4">
            <div>
              <Input
                label="Search By Model Number"
                shadow="shadow-neuGrInner"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="py-12 bg-slate-200">
        <div className="max-w-screen-xl mx-auto px-12">
          <table className="table-fixed w-full rounded-xl shadow-neuGr">
            <thead>
              <tr className="border-b-2 border-white text-lg">
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Product Image
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Product Code
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Chinese Code
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Price
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  In-stock
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Sold
                </th>
                <th className="font-bebas font-normal border-r-2 last:border-r-0 border-white px-2 py-3">
                  Returned
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="last:border-b-0 border-b-2">
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3">
                  <img
                    src={product1}
                    className="object-cover w-24 h-16 rounded-md mx-auto"
                  />
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  S2306
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  X384545-01
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  770TK
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  12
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  6
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  1
                </td>
                <td className="border-r-2 last:border-r-0 border-white px-2 py-3 text-center uppercase font-semibold">
                  <div className="flex space-x-3">
                    <Badge>
                      <TbEdit />
                    </Badge>
                    <TbEye />
                    <TbTrash />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
