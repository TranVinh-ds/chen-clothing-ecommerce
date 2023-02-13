import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';

function App() {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
