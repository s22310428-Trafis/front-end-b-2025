import { useEffect, useState } from "react";
import Profil from "../components/Profil";  
import Skills from "../components/Skills";
import Hobby from "../components/Hobby";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => setProfile(json.Profile));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6 flex flex-col items-center gap-4">

      <Profil
        name={profile.name}
        title={profile.title}
        bio={profile.bio}
        age={profile.age}
        asal={profile.asal}
        phone={profile.Phone}
        Picture={profile.Picture} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-6">
        <Skills skills={profile.Skills} />
        <Hobby hobbies={profile.Hobby} />
      </div>

    </div>
  );
}
