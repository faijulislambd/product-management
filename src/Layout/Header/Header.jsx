import NavTo from "../../utils/NavTo";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-5 flex items-center justify-between">
      <div></div>
      <ul className="flex items-start space-x-5">
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
