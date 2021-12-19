import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged,GoogleAuthProvider, signInWithPopup,updateProfile, signOut } from "firebase/auth";

// initialize firebase app;
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setAuthError('');
    const newUser = {email,displayName: name};
    setUser(newUser);
    // send name to firebase
    updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
}).catch((error) => {
});
    history.replace('/');
    
  })
  .catch((error) => {
    setAuthError(error.message);
    
  })
  .finally(()=> setIsLoading(false));
  
}    


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setIsLoading(false));
            ;
    }

    // signin with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=> setIsLoading(false))
  ;
    }

    // observer state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
            });
            return () => unsubscribed;
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            })
            .finally(()=> setIsLoading(false));
            ;
    }
   return {
       user,
       authError,
       isLoading,
       signInWithGoogle,
       registerUser,
       loginUser,
       logOut
   }
}

export default useFirebase;