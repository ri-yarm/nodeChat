import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Chat from '../../pages/Chat';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;

