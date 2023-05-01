import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { AboutUs } from '../../pages/AboutUs';
import { ContactUs } from '../../pages/ContactUs';
import { News } from '../../pages/News';
import { Services} from "../../pages/Services";
import { DefaultLayout } from '../../layout/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/News" element={<News />} />
                <Route path="/Services" element={<Services />} />
            </Route>
        </Routes>
    )
}