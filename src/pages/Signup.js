import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
    return (
    <div className="bubbles_bg">
        <div className="signup container">
            <h2 className="text-center">Join For Free</h2>
            <form className="form">
                <Input label="Email" name="email" placeholder="Email address"/>
                <Input label="Username" name="text"  placeholder="Enter full name"/>
                <Input label="Password" name="password" placeholder="Password (min. 8 character)"/>
                <div className="checkbox d-flex fw-500"><input type="checkbox"/><div>I agree to <a href="#">Terms & Conditions</a></div></div>
                <Button name="Sign up"/>
                <p className=" text-center">Already have an account? <a href="#" className="fw-700">Login</a></p>
            </form>
        </div>
    </div>
    );
}

export default Signup;