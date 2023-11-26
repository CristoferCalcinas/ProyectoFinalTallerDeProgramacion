import HomeObject from "../organismos/HomeObject";
import NavBar from "../organismos/NavBar";


export default function HomePage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div style={{ marginTop: '50px' }}>
                <HomeObject />
            </div>
        </div>
    )
}
