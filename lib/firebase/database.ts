import { get, set, ref } from "firebase/database";
import { db } from "@lib/firebase/firebase";

// const [users, setUsers] = useState<object[]>();

export const getUsersFromDb = async () => {
  const usersRef = ref(db, "users");
  // let usersArray: object[];

  try {
    const usersArray = await get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          return Object.entries(snapshot.val()).map(([id]) => ({
            id,
          }));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return usersArray;
  } catch (error) {
    console.log(error);
  }
};

export const writeUserToDb = (
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  profilePicUrl: string,
  userLinks: object
) => {
  const newUserRef = ref(db, `users/${userId}`);
  // Setting new user on registration
  set(newUserRef, {
    firstName,
    lastName,
    email,
    profilePicUrl,
    userLinks,
  });
  console.log("Success! Wrote data to db");
};
