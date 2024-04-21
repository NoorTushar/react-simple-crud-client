import { useState } from "react";
import { Link, json, useLoaderData } from "react-router-dom";

const Users = () => {
   const loadedUsers = useLoaderData();
   const [users, setUsers] = useState(loadedUsers);

   const handleDeleteUser = (id) => {
      console.log(id);
      fetch(`http://localhost:3000/users/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               alert("Data removed from database");
               const remaining = users.filter((user) => user._id !== id);
               setUsers(remaining);
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <div className="text-center py-[40px]">
         <h3>Total Users: {users.length}</h3>
         <div className="grid grid-cols-3">
            {users.map((user) => {
               return (
                  <div
                     key={user._id}
                     className="card w-96 bg-base-100 shadow-xl border border-secondary"
                  >
                     <div className="card-body">
                        <h2 className="card-title justify-center">
                           {user.name}
                        </h2>
                        <p>{user.email}</p>
                        <div className="card-actions justify-end">
                           <Link to={`/users/${user._id}`}>
                              <button className="btn btn-secondary">
                                 Update User
                              </button>
                           </Link>
                           <button
                              onClick={() => {
                                 handleDeleteUser(user._id);
                              }}
                              className="btn btn-primary"
                           >
                              Delete
                           </button>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Users;
