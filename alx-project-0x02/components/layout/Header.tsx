import Link from "next/link";

const Header = () => {
  return (
    <div className="container bg-amber-400 ">
      <nav className="navbar flex space-x-4 p-4">
        <ul className="flex justify-between gap-6">
          <li className="">
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
