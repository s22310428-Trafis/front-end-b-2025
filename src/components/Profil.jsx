export default function Profil({ name, title, bio, age, asal, phone, Picture }) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">

      <div className="flex flex-col items-center">
        <img
          src={`/${Picture}`}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 shadow"
        />

        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <h2 className="text-lg font-bold text-gray-700 mt-1">{title}</h2>
      </div>

      <div className="h-px bg-gray-300 my-4"></div>

      <p className="text-center text-gray-700 mb-4">{bio}</p>

      <div className="text-gray-700 space-y-1 text-center">
        <p><strong>Umur:</strong> {age}</p>
        <p><strong>Asal:</strong> {asal}</p>
        <p><strong>Telepon:</strong> {phone}</p>
      </div>
    </div>
  );
}
