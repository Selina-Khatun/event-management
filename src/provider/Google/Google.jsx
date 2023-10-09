// import React, { useContext, useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import app from '../../firebase/firebase.config';
// import Navbar from '../../components/Navbar/Navbar';
// import { AuthContext } from '../../firebase/AuthProvider';
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const Google = () => {
//     const [loggedUser, setLoggedUser] = useState(null);
//     const handleGoogleLogIn = () => {
//         signInWithPopup(auth, googleProvider)
//             .then(result => {

//                 const user = result.user;
//                 console.log(user);
//                 setLoggedUser(user)
//             })
//             .catch(error => {
//                 console.log(error)
//             });

//     };
// //     const {handleGoogleLogIn}=useContext(AuthContext);
// // console.log(handleGoogleLogIn)
//     return (
//         <div className=' text-center'>
//             <button onClick={handleGoogleLogIn} className=' font-semibold btn btn-wide btn-outline rounded-3xl normal-case'> <FcGoogle></FcGoogle> Log in with Google</button>
//             {/* {
//                loggedUser && 
//                <Navbar loggedUser={loggedUser}><img src={loggedUser.photoURL} alt="" /></Navbar>
//             } */}


//         </div>
//     );
// };

// export default Google;