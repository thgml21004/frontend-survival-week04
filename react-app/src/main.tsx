import ReactDOM from 'react-dom/client';
import App from './App';

async function main() {
  // TODO: App 컴포넌트를 render 해주세요.

  // fetch
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  const { restaurants } = data;

  console.log(restaurants);

  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((
    <App restaurants={restaurants} />
  ));
}

main();
