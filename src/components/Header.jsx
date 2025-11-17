export default function Header({ profileRef, skillsRef, hobbyRef }) {

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-gray-800 text-white shadow-md z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <ul className="flex gap-6 font-semibold">
          <li 
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollTo(profileRef)}
          >
            Profil
          </li>

          <li 
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollTo(skillsRef)}
          >
            Skills
          </li>

          <li 
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollTo(hobbyRef)}
          >
            Hobby
          </li>
        </ul>
      </nav>
    </header>
  );
}
