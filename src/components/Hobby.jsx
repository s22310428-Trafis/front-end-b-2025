export default function Hobby({ hobbies }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md w-full">
      
      <h2 className="text-2xl font-bold text-center text-black mb-4">
        Hobby
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {hobbies.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
