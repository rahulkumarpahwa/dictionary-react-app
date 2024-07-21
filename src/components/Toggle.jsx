import { IoIosSunny, IoIosMoon } from "react-icons/io";

const Toggle = () => {
  const changeTheme = () => {
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.toggle("dark");
      moon.classList.add("hidden");
      sun.classList.remove("hidden");
    } else {
      document.documentElement.classList.toggle("dark");
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
    }
  };

  return (
    <div>
      <IoIosSunny
        className="sun text-3xl bg-white rounded-full border-black border p-1"
        onClick={changeTheme}
      />
      <IoIosMoon
        className="moon hidden text-3xl bg-black text-white rounded-full border border-white p-1"
        onClick={changeTheme}
      />
    </div>
  );
};
export default Toggle;
