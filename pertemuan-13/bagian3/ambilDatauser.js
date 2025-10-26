async function ambilDataUser() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const result = await response.json();

    result.data.forEach(user => {
      const { first_name, last_name } = user;
      console.log(`Nama Lengkap: ${first_name} ${last_name}`);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

export { ambilDataUser };
