import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BangladeshTours from "../Pages/BangladeshTours/BangladeshTours";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Sidebar from "../Pages/Dashboard/Dashboard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardGate from "../Pages/Dashboard/DashboardGate";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManagePackages from "../Pages/Dashboard/ManagePackages";
import ManageBookings from "../Pages/Dashboard/ManageBookings";
import AddPackage from "../components/AddPackage/AddPackage";
import UpdatePackage from "../components/UpdatePackage/UpdatePackage";
import ContactMessage from "../Pages/Dashboard/ContactMessage";
import { fetchMultipleApi } from "./fetchMultipleApi";

const apiLoader = async() => {
  try{
    const data = await fetchMultipleApi();
    console.log('fetched data', data);
  return {...data};
  } catch (error) {
    console.error('Error in loader:', error);
    throw new Error("failed to fetch data");
  }
};
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
            loader:() => fetch('http://localhost:3000/packages'),
        },

        {
          path:"/bangladesh-tours",
          Component:BangladeshTours,
          loader:() => fetch('http://localhost:3000/packages'),
        },

        {
          path:"/package-details/:id",
          loader: ({params}) => fetch(`http://localhost:3000/packages/${params.id}`),
          Component:PackageDetails
        },

        {
          path:"/about",
          Component:AboutUs
        },
        {
          path:"/contact",
          Component:ContactUs
        }

    ]
  },
  {
    path:"/dashboard",
    Component:DashboardGate,
    children:[
      {
        index:true,
        loader:apiLoader,
        Component:DashboardHome
      },
      {
        path:"/dashboard/home",
        loader:apiLoader,
        Component:DashboardHome,
      },
      {
        path:"/dashboard/manage-packages",
        Component:ManagePackages,
        loader: () => fetch('http://localhost:3000/packages')
      },
      {
        path:"/dashboard/manage-bookings",
        loader: () => fetch('http://localhost:3000/bookings'),
        Component:ManageBookings
      },
      {
        path:"/dashboard/contact-us",
        loader: () => fetch('http://localhost:3000/contactMessages'),
        Component:ContactMessage
      },
      {
        path:"/dashboard/manage-packages/create",
        Component:AddPackage
      },

      {
        path: '/dashboard/manage-packages/update/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/packages/${params.id}`),
        Component:UpdatePackage
 }
    ]
  }
]);