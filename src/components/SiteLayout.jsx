import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-5 sm:px-8 lg:px-24 py-8 lg:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
