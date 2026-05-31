import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <>
            <header>
                <h1>Dashboard</h1>

                <nav>
                    <NavLink to="/home">Home</NavLink>{" | "}
                    <NavLink to="/about">About</NavLink>{" | "}
                    <NavLink to="/contact">Contact</NavLink>{" | "}
                    <NavLink to="/users">Users</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <hr />
                <p>© 2026 Stef's Routing Lab</p>
            </footer>
        </>
    );
}