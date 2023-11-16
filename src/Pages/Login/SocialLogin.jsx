import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSocialLogin = media => {
        media()
            .then(res => {
                console.log(res.user)
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-neutral">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;