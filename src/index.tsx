import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import Client from './components/queryClient'
import { GlobalStyle } from './Styled-Components/App.styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={Client}>
    <GlobalStyle />
  <App />
  </ApolloProvider>
);

reportWebVitals();
