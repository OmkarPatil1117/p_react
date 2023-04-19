import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={"https://i.pinimg.com/originals/a2/77/ae/a277ae99cb1ddd5955f5e33dbefb1f67.jpg"} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
