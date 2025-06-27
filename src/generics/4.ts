type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

//* JS
// function createOrUpdateUser(initialValues: User) {
// Оновлення користувача
// }

//* TS
function createOrUpdateUser(initialValues: Partial<User>) {
  // Логіка оновлення користувача
  console.log("Updating user with:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
