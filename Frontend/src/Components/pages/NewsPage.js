import NavBar from "../organismos/NavBar";
import NewsObject from "../organismos/NewsObject";


export default function NewsPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div style={{ marginTop: '50px' }}>
                <NewsObject />
            </div>
        </div>
    )
}
