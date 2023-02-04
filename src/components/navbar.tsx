import { Link } from "react-router-dom"
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }
    return (
        <div>
            <Link to="/">   HOME   </Link>
            {!user ? (
                <Link to="/login">   LOGIN   </Link>
            ) : (
                <Link to="/createpost">   Create Post   </Link>
            )}

            <button onClick={signUserOut}>Logout</button>
            <div>
                {user && (
                    <div>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                        <img src={user?.photoURL || ""} alt="profile" />
                    </div>
                )}
            </div>
        </div>
    )
}