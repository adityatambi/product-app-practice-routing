import { Link, useSearchParams } from 'react-router-dom';
import { Products } from '../data/products';

export function ProductsPage() {
  function getFilteredProducts() {
    const search = searchParams.get('search');
    if (search === null || search === '') {
      return Products;
    } else {
      return Products.filter(
        (product) => product.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
      );
    }
  }
  const [searchParams] = useSearchParams();
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are some great tools for React</h2>

      <ul className="list-none m-0 p-0">
        {getFilteredProducts().map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} className="p-1 text-base text-slate-800 hover:underline">
              {product.name}
            </Link>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
