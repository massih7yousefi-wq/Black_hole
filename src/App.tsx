import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import GiveawayPage from "./pages/Giveaway/GiveawayPage";
import MainLayout from "./component/layout/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/giveaway" element={<GiveawayPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;