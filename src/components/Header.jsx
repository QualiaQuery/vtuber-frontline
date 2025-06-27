import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            VTuber Frontline
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">ホーム</Link>
            <Link to="/vtubers" className="text-gray-600 hover:text-blue-600">VTuber一覧</Link>
            <Link to="/matching" className="text-gray-600 hover:text-blue-600">マッチング</Link>
            <Link to="/submit" className="text-gray-600 hover:text-blue-600">掲載依頼</Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              メニュー
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
