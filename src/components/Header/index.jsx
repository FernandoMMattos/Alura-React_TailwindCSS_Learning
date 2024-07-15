/* eslint-disable react/prop-types */
import ToggleTheme from "../ToggleTheme";

const Header = ({ user }) => {
  return (
    <div className="flex h-20 bg-alura-200 justify-between items-center px-5 sm:rounded-xl sm:m-5 dark:bg-dark-200 select-none">
      <span className="text-gray-100">Ola, {user?.name || "Usuario"}</span>
      <h1>
        Alura Newsletter
      </h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
