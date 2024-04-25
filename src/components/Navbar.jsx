const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl mx-auto p-4 px-8 flex sm:flex-row flex-col">
      <a href="/" className="sm:flex block">
        <img className="mx-auto" src="icon.svg" alt="Brand Icon" />
        <img className="mx-auto" src="Text.svg" alt="Brand Logo" />
      </a>
      <ul className="flex ms-auto text-[#00ABE1]">
        <li className="font-bold text-inherit sm:inline-flex hidden sm:mx-2 px-2 py-3">
          <a href="/"> App</a>
        </li>
        <li className="font-bold text-inherit sm:inline-flex hidden sm:mx-2 px-2 py-3">
          <a href="/"> Security</a>
        </li>
        <li className="font-bold text-inherit sm:inline-flex hidden sm:mx-2 px-2 py-3">
          <a href="/"> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
