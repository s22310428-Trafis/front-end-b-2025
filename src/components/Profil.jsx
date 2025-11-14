// Profile.jsx
import { useEffect, useState } from "react";
import { getProfileData } from "../RestAPI";

export default function Profile() {
  const [Profile, setProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileData();
      if (!data) setError(true);
      setProfile(data);
    }
    fetchData();
  }, []);

  if (error) return <p className="text-red-500 text-center">Gagal memuat data</p>;
  if (!Profile) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow rounded">
      <img
        src={`/${Profile.Picture}`}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />

      <h1 className="text-2xl font-bold text-center">{Profile.name}</h1>
      <h2 className="text-lg text-gray-600 text-center">{Profile.title}</h2>

      <p className="mt-4 text-center text-gray-700">{Profile.bio}</p>

      <div className="mt-4 text-gray-700 space-y-1 text-center">
        <p>Umur: {Profile.age}</p>
        <p>Asal: {Profile.asal}</p>
        <p>Telepon: {Profile.Phone}</p>
        <p>Nama: {Profile.name}</p>
      </div>
    </div>
  );
}
