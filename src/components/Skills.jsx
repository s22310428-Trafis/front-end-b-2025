export default function Skills({ skills }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md w-full">
      
      {/* Judul */}
      <h2 className="text-2xl font-bold text-center text-black mb-4">
        Skills
      </h2>

      {/* Grid Skills */}
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300 p-3 rounded-lg text-center font-semibold text-black bg-gray-50 hover:bg-gray-100 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
