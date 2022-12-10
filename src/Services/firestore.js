// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvs2clHb121Aw2kbjfa2yd9vVH0073wBw",
  authDomain: "reactprojectcoder.firebaseapp.com",
  projectId: "reactprojectcoder",
  storageBucket: "reactprojectcoder.appspot.com",
  messagingSenderId: "567601100484",
  appId: "1:567601100484:web:d94955d429caecf2ecbb91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

//1.Traer todos los documentos
export default async function getItems() {
  //1a Referenciamos nuestra coleccion
  const colectionVehiculesRef = collection(DB, "vehicules");

  //1b Solicitamos todos los documentos de la coleccion
  const documentSnapshot = await getDocs(colectionVehiculesRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      //hacemos spread del array de datos para copiarlo y le agregamos el valor de id al nuevo array mapeado
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}
//2.Traer un documento por ID
export async function getItemDetail(idParams) {
  const docRef = doc(DB, "vehicules", idParams);
  const docSnapshot = await getDoc(docRef);
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}

//3.Traer todos los documentos segun categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "vehicules");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      //hacemos spread del array de datos para copiarlo y le agregamos el valor de id al nuevo array mapeado
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function createOrder(order) {
  //4. Enviar la orden a Firebase
  const collectionOrdRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionOrdRef, order);

  console.log(docOrder.id);
  return docOrder.id;
}
// export async function exportArrayToFirestore() {
//   const collectionRef = collection(DB, "vehicules");

//   for (let item of products) {
//     let docOrder = await addDoc(collectionRef, item);
//     console.log("DOcumento creado, id: ", docOrder.id);
//   }
// }
