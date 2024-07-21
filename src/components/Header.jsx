import { FaBook } from "react-icons/fa";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <FaBook className="dark:text-white text-3xl" />
      <Toggle/>
    </div>
  );
};
export default Header;
