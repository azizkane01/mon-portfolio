import { useNavigate } from 'react-router-dom';

function TypingGame() {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Iframe du Typing Game en plein écran */}
      <iframe 
        src="https://typing-game-three-ashy.vercel.app/"
        style={{ 
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'white'
        }}
        title="Typing Game"
        allow="fullscreen"
      />

      {/* Bouton flottant en bas à gauche */}
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '12px 20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        }}
      >
        <span>←</span>
        <span>Portfolio</span>
      </button>
    </div>
  );
}

export default TypingGame;