import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer"

export default function AppLayout() {
    return <>
        <div className="content">
            <Navbar />
            <div className="container container-fluid">
                <Outlet /> 
            </div>
            <Footer />
        </div>

    </>
}