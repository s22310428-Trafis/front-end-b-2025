export default function Skills({ skills }) {
  return (
    <div className="bg-white text-black rounded-xl p-8 shadow-lg w-full">
     
      <h2 className="text-2xl font-bold mb-4 text-left">Skills</h2>
      
      <div className="text-left space-y-2 w-full">
        {skills.map((skill, index) => (
          <p 
            key={index} 
            className="text-base font-medium break-words"
          >
            • {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
