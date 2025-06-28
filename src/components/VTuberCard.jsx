import { Link } from 'react-router-dom';

const VTuberCard = ({ vtuber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={vtuber.thumbnail}
        alt={vtuber.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{vtuber.name}</h3>
        <p className="text-gray-600 mb-2">デビュー日: {vtuber.debutDate}</p>
        <p className="text-gray-600 mb-4">{vtuber.description}</p>
        <div className="flex space-x-2 mb-4">
          <a 
            href={vtuber.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            YouTube
          </a>
          <a 
            href={vtuber.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
          {vtuber.twitch && (
            <a 
              href={vtuber.twitch} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitch
            </a>
          )}
        </div>
        <div className="flex space-x-2">
          <Link 
            to={`/vtuber/${vtuber.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VTuberCard;
