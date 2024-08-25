import { Link, NavLink, useSearchParams } from 'react-router-dom';
import logo from './logo.svg';
import { FormEvent } from 'react';

export function Header() {
  const [searcParams, setSearchParams] = useSearchParams();
  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    setSearchParams({ search });
  }
  console.log("test commit");
  return (
    <header className="text-left text-slate-50 bg-slate-900 h-40 p-5 ">
      <form className="relative text-right" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          name="search"
          placeholder="search"
          defaultValue={searcParams.get('search') ?? ''}
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
        />
      </form>
      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>
      <div className="inline-block">
        <h1 className="text-2xl ">React Tools (this is using link)</h1>
        <nav>
          <Link to="products" className="text-white no-underline p-1">
            Products
          </Link>
        </nav>
      </div>
      <div className=" inline-block ps-10">
        <h1 className="text-2xl ">React Tools (this is using NavLink)</h1>
        <nav>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${isActive ? 'border-white' : 'border-transparent'}`
            }
          >
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
