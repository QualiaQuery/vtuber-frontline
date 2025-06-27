import { useParams } from 'react-router-dom';

const VTuberDetail = () => {
  const { id } = useParams();
  
  // 仮のVTuberデータ（実際はAPIから取得するべき）
  const vtuber = {
    id: id,
    name: 'サンプルVTuber',
    debutDate: '2025/06/01',
    thumbnail: '/placeholder.jpg',
    channelUrl: '#',
    description: '新人VTuberとして活動を開始しました。',
    socialLinks: {
      twitter: '#',
      youtube: '#',
      pixiv: '#',
    },
    videos: [
      {
        title: 'デビュー動画',
        url: '#',
        thumbnail: '/placeholder.jpg',
        views: '1,000',
        likes: '500',
      },
      // 他の動画データを追加
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg w-full md:w-64 mb-4 md:mb-0">
            {/* メインサムネイル */}
          </div>
          <div className="flex-1 md:ml-8">
            <h1 className="text-3xl font-bold mb-2">{vtuber.name}</h1>
            <p className="text-gray-600 mb-4">デビュー日: {vtuber.debutDate}</p>
            <p className="text-gray-600 mb-6">{vtuber.description}</p>
            
            {/* ソーシャルリンク */}
            <div className="flex gap-4 mb-6">
              <a
                href={vtuber.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Twitter
              </a>
              <a
                href={vtuber.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                YouTube
              </a>
              <a
                href={vtuber.socialLinks.pixiv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Pixiv
              </a>
            </div>
          </div>
        </div>

        {/* 最近の動画 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">最近の動画</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vtuber.videos.map((video) => (
              <div key={video.title} className="bg-gray-50 rounded-lg p-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                  {/* 動画サムネイル */}
                </div>
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-2">再生回数: {video.views}</p>
                <p className="text-gray-600">いいね: {video.likes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VTuberDetail;
