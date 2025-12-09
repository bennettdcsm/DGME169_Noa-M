import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('hasLoaded');
  });

  useEffect(() => {
    if (!isLoading) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasLoaded', 'true');
      }
      return;
    }

    const animationDurationMs = 5000;
    let timerId;

    const finishLoading = () => {
      timerId = window.setTimeout(() => {
        sessionStorage.setItem('hasLoaded', 'true');
        setIsLoading(false);
      }, animationDurationMs);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isLoading]);

  return (
    <>
      <Loader visible={isLoading} />
      <main className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
