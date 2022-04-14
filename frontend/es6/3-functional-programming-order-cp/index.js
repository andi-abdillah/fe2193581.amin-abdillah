/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function customisableGreeting() {
  // TODO: answer here
  let user = {
    firstName: "John",
    lastName: "Doe"
  };
  const formatCallback = (firstName, lastName) => {
    return `Hi name is ${firstName} ${lastName}, how are you?`;
  };
  return formatCallback(user.firstName, user.lastName);
}

console.log(customisableGreeting());

module.exports = customisableGreeting