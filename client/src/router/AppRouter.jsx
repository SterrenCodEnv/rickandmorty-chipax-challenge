import { Navigate, Route, Routes } from 'react-router-dom';
import { CharCounterPage, EpisodeLocationsPage } from '../pages';
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="char-counter" element={<CharCounterPage />} />
        <Route path="episode-locations" element={<EpisodeLocationsPage />} />
        <Route path="/" element={<Navigate to="/char-counter" />} />
        <Route path="*" element={<Navigate to="/char-counter" />} />
      </Routes>
    </>
  );
};
