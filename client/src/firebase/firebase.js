
import { initializeApp } from "firebase/app";
import { getDownloadURL,uploadBytes, getStorage,ref } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAkTTXJ4CoHLzM7ceKn236xz4DV6y3ivsQ",
  authDomain: "cars-nest.firebaseapp.com",
  projectId: "cars-nest",
  storageBucket: "cars-nest.appspot.com",
  messagingSenderId: "717991275598",
  appId: "1:717991275598:web:e4529e464b76efec6ca71f",
  measurementId: "G-2MB6P47CCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const handleImageUpload= (image,imageUrl) => {
  const imageRef = ref(storage, `images/${image.name}`);
  uploadBytes(imageRef, image)
  .then(()=>{
    getDownloadURL(imageRef)
    .then((url)=>{
      imageUrl(url)
    })
  })
}

export default handleImageUpload