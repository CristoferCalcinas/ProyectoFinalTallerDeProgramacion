import NavBar from "../organismos/NavBar";
import LoginForm from "../organismos/LoginForm";

export default function LoginPage() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div style={{ marginTop: '50px' }}>
                <LoginForm />
            </div>)
        </>
    )
}
