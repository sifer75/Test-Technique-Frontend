interface HeaderProps {
  id: string;
}

function Header({ id }: HeaderProps) {
  return (
    <header id={`Header__container__${id}`} className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <h1
          id={`Header__title__${id}`}
          className="text-2xl font-light text-gray-800"
        >
          My Application
        </h1>
      </div>
    </header>
  );
}

export default Header;
