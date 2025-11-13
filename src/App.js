import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import TypingGame from './components/typing-game';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Sites externes/projets */}
        <Route path="/typing-game" element={<TypingGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;