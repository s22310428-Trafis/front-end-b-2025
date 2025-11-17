export default function Hobby({ hobbies }) {
  return (
    <div className="bg-white text-black rounded-xl p-8 shadow-lg w-full">
      
      <h2 className="text-2xl font-bold mb-4 text-left">Hobby</h2>

      <div className="text-left space-y-2 w-full">
        {hobbies.map((hobby, index) => (
          <p
            key={index}
            className="text-base font-medium break-words"
          >
            • {hobby}
          </p>
        ))}
      </div>
    </div>
  );
}
