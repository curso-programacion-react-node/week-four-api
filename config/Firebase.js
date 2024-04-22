const { initializeApp } = require("firebase/app");
const { getFirestore, addDoc, collection, updateDoc, deleteDoc, doc, getDocs } = require("firebase/firestore/lite")

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const getAll = async (nameCollection) => {
  try {
    const ref = collection(db, nameCollection)
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const create = async (nameCollection, payload) => {
  try {
    const ref = collection(db, nameCollection)
    await addDoc(ref, payload)
  } catch (error) {
    console.log(error)
  }
}

const update = async (nameCollection, id, payload) => {
  try {
    const ref = doc(db, nameCollection, id)
    await updateDoc(ref, payload)
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (nameCollection, id) => {
  try {
    const ref = doc(db, nameCollection, id)
    await deleteDoc(ref)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  db,
  create,
  update,
  destroy,
  getAll
}