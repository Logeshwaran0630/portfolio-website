function App() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 Portfolio Live!</h1>
      <p style={{ fontSize: '1.5rem' }}>Deployment Successful!</p>
      <div style={{ 
        marginTop: '30px', 
        background: 'rgba(255,255,255,0.1)',
        padding: '2rem',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2>Logeshwaran J</h2>
        <p>Software Development Engineer</p>
        <p>Full Stack + Mobile Developer</p>
      </div>
    </div>
  );
}

export default App;