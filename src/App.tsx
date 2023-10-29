import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
