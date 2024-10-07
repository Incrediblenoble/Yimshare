"use client";
import { getUsersFromDb } from "@lib/firebase/database";
import { useState, useEffect } from "react";

const page = () => {
  const [users, setUsers] = useState<object[]>();

  const getUsers = async () => {
    const users = await getUsersFromDb();
    console.log(users);
  };

  getUsers();

  // useEffect(() => {
  //   const usersRef = ref(db, "users");
  //   get(usersRef)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const usersArray = Object.entries(snapshot.val()).map(
  //           ([id, data]) => ({
  //             id,
  //             ...data,
  //           })
  //         );
  //         setUsers(usersArray);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        Fetch Data from RealTime Db
      </h1>
      {/* <button
        onClick={() => writePlatformData("platform-3-id", "Facebook")}
        className="bg-purple text-white border-1px border-solid border-purple-lightest py-4 px-2"
      >
        Post Platform Data
      </button> */}
      <div className="grid-cols-3 gap-4">
        {/* {users?.map((user) => (
          <div key={user?.id} className="bg-gray-100 p-4 rounded-lg">
            <h2>{user?.title}</h2>
            <p>{user?.subtitle}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default page;
