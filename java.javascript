import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Reference the database
const dbRef = ref(database, 'message');

// Write data
set(dbRef, 'Hello, World!');

// Read data
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
