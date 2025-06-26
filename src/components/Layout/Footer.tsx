interface FooterProps {
  id: string;
}

function Footer({ id }: FooterProps) {
  return (
    <footer
      id={`Footer__container__${id}`}
      className="bg-white border-t border-gray-100 py-6"
    >
      <div
        id={`Footer__content__${id}`}
        className="mx-auto px-4 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} My App. Functional Minimalism.
      </div>
    </footer>
  );
}

export default Footer;
