
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast, Bounce } from 'react-toastify';



// const tours = [
//   {
//     _id: "684ef386f729461de1006b37",
//     tour_name: "Historical Dhaka City & Sonargaon Tour",
//   },
//   {
//     _id: "68504c49cb211a3e3b92f4ff",
//     tour_name: "Alvin Horton",
//   },
//   {
//     _id: "68514365f1ff3065d89d0f5a",
//     tour_name: "Xyla Stephenson",
//   },
//   {
//     _id: "685190e8407d65be1d7db33f",
//     tour_name: "Bandarban & Sajek Valley Expedition",
//   },
//   {
//     _id: "68519160407d65be1d7db340",
//     tour_name: "Saint Martin's Island Retreat",
//   },
//   {
//     _id: "6864c5d9ebfe3118803eb22a",
//     tour_name: "Daniel Key",
//   },
// ];

function ManagePackages() {

  const loadPackages = useLoaderData()
  console.log(loadPackages);

  const [packages, setPackages] = useState(loadPackages);
  

  const handleDelete = (id) => {
    console.log("Delete tour:", id);

    fetch(`https://tour-bengal-server.vercel.app/packages/${id}`, {
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log('after delete', data);
      if(data.deletedCount){
        // alert('Deleted successfully');
        toast.success("Deleted successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
        const remaining = packages.filter(pack => pack._id !== id);
        setPackages(remaining);
      }
    })
  };

  return (
    <div className="overflow-x-auto">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Packages</h2>

        <Link
          to="/dashboard/manage-packages/create"
          className="btn btn-primary btn-sm"
        >
          + Create Package
        </Link>
      </div>

      {/* Table */}
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Tour Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {packages.map((pack, index) => (
            <tr key={pack._id} className="hover:bg-base-300">
              <th>{index + 1}</th>
              <td className="text-xs">{pack._id}</td>
              <td>{pack.title}</td>
              <td>
                <Link
          to={`/dashboard/manage-packages/update/${pack._id}`}
          className="btn btn-primary btn-sm bg-blue-500"
        >
          Update
        </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(pack._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagePackages;
