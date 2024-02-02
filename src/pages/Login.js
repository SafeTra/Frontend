import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
    return (
    <div className="bubbles_bg">
        <div className="login container">
            <h2 className="text-center">Welcome Back</h2>
            <form className="form">
                <Input label="Email" name="email" placeholder="Email address"/>
                <Input label="Password" name="password" placeholder="Password (min. 8 character)"/>
                <div className="d-flex justify-between checkbox">
                    <div><input type="checkbox"/> Remember Me</div>
                    <a>Forgot Your Password?</a>
                </div>
                <Button name="Sign in"/>
                <p className=" text-center">Don’t have an account? <a href="#" className="fw-700">JOIN FOR FREE</a></p>
            </form>
        </div>
    </div>
    );
}

export default Login;