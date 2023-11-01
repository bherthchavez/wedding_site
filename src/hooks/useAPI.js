import { useState } from 'react';
import firebase from "../firebase";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getInvited = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const querySnapshot = await firebase.firestore().collection('invited').get()
      const invited = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setIsLoading(false);
      return invited
    } catch (error) {
      console.log(error.message)
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { isLoading, error, getInvited };
};

export default useApi;
