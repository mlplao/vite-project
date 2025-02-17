import './App.css';

interface CardProps {
  width: number | string;
  height: number | string;
  bgColor: string;
  borderClr: string;
  label: string;
}

const Card: React.FC<CardProps> = ({ width, height, bgColor, borderClr, label }) => {
  const cardStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor: bgColor,
    border: `2px solid ${borderClr}`,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return <div style={cardStyle}>{label}</div>;
};

const App: React.FC = () => {
  return (
    <div className='Container'>
      <h1>MICHAEL LLOYD LAO</h1>
      <div className='CardWrapper'>
        <Card
          width="220px"
          height="220px"
          bgColor="#3498db"
          borderClr="#2c3e50"
          label="CPEITEL"
        />
      </div>
    </div>
  );
};

export default App;
