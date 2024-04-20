import { useLoaderData } from "react-router-dom";

const Users = () => {
   const users = useLoaderData();
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
                           <button className="btn btn-primary">Delete</button>
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
