import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import TypingGame from './components/typing-game';
import ChiffrementDes from './components/chiffrement-des';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Sites externes/projets */}
        <Route path="/typing-game" element={<TypingGame />} />
        <Route path="/chiffrement-des" element={<ChiffrementDes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;