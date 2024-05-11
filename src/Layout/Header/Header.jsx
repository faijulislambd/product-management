import NavTo from "../../utils/NavTo";
import { AiTwotoneShop } from "react-icons/ai";
const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-8 flex items-center justify-between">
      <div className="flex items-center">
        <AiTwotoneShop className="text-[3rem] text-slate-700" />{" "}
        <span className="text-[3rem] font-poetsen text-slate-700">
          Product Inventory
        </span>
      </div>
      <ul className="flex items-start space-x-10">
        <li>
          <NavTo to="/">Home</NavTo>
        </li>
        <li>
          <NavTo to="/products">Products</NavTo>
        </li>
        <li>
          <NavTo to="#">Cost Management</NavTo>
        </li>
      </ul>
    </div>
  );
};

export default Header;
