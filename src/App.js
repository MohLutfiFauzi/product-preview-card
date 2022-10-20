import './App.css';
import productImage from './images/image-product-mobile.jpg'
import productImageDesktop from './images/image-product-desktop.jpg'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 588px)' })

  return (
    <div className="App">
      <div className='card-parfume'>
        <img src={isBigScreen ? productImageDesktop : productImage} alt='product parfume' />
        <div className='card-description'>
          <h2>PARFUME</h2>
          <h3>Gabrielle Essence Eau De Parfum</h3>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfurmer-Creator for the House of CHANEL.</p>
          <div className='product-price'>
            <strong>$149.99</strong>
            <strike>$169.99</strike>
          </div>
          <button className='btn-add-to-card'>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
