import { useEffect, useState } from "react";
import Profil from "../components/Profil";  // pakai Profil (nama file kamu)

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

      {/* Tampilkan data ke komponen Profil */}
      <Profil
        name={profile.name}
        title={profile.title}
        bio={profile.bio}
        age={profile.age}
        asal={profile.asal}
        phone={profile.Phone}
      />
    </div>
  );
}
