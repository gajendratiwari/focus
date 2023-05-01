// import { getAllQuotes, deleteData } from "../lib/api";
// import { useEffect, useState } from "react";
// import DataItem from "./DataItem";
// import NoDataFound from "../pages/NoDataFound";

// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   onSnapshot,
// } from "firebase/firestore";
// import { list } from "firebase/storage";
// import HomeServiceDetails from "../pages/Home/ServiceContent/HomeServiceDetail";

// const FormData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // const fetchData = async () => {
//     //   let list = [];
//     //   try {
//     //     const querySnapshot = await getDocs(collection(db, "users"));
//     //     querySnapshot.forEach((doc) => {
//     //       list.push({ id: doc.id, ...doc.data() });
//     //     });
//     //     setData(list);
//     //     console.log(list);
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // };
//     // fetchData();

//     // LISTEN (REALTIME)
//     const unsub = onSnapshot(
//       collection(db, "customers"),
//       (snapShot) => {
//         // let list = [];
//         snapShot.docs.forEach((doc) => {
//           // list.push({ id: doc.id, ...doc.data() });
//           setData(doc.data());
//         });
//         // setData(list);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//     return () => {
//       unsub();
//     };
//   }, []);
//   return <DataItem data={data} />;
// };
// export default FormData;
