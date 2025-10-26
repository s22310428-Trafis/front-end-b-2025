function ambilDataUser() {
  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(result => {
      result.data.forEach(user => {
        const { first_name, last_name } = user;
        console.log(first_name, last_name);
      });
    })
    .catch(err => console.error("Error:", err));
}

export { ambilDataUser };
