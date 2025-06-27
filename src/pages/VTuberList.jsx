import { useState } from 'react';
import { Link } from 'react-router-dom';

const VTuberList = () => {
  // 仮のVTuberデータ
  const vtubers = [
    {
      id: 1,
      name: 'サンプルVTuber1',
      debutDate: '2025/06/01',
      thumbnail: '/placeholder.jpg',
      channelUrl: '#',
      description: '新人VTuberとして活動を開始しました。',
    },
    {
      id: 2,
      name: 'サンプルVTuber2',
      debutDate: '2025/06/15',
      thumbnail: '/placeholder.jpg',
      channelUrl: '#',
      description: '個性的なVTuberとして注目を集めています。',
    },
    // 他のVTuberデータを追加
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">VTuber一覧</h1>

      {/* 検索機能 */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="VTuber名を検索"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* フィルター機能 */}
      <div className="mb-8">
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option value="">すべてのカテゴリー</option>
          <option value="new">新着順</option>
          <option value="popular">人気順</option>
        </select>
      </div>

      {/* VTuberカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vtubers.map((vtuber) => (
          <div key={vtuber.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
              {/* 画像サムネイル */}
            </div>
            <h3 className="text-xl font-semibold mb-2">{vtuber.name}</h3>
            <p className="text-gray-600 mb-4">デビュー日: {vtuber.debutDate}</p>
            <p className="text-gray-600 mb-4">{vtuber.description}</p>
            <div className="flex gap-4">
              <Link
                to={`/vtuber/${vtuber.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                詳細を見る
              </Link>
              <a
                href={vtuber.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
              >
                チャンネル
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VTuberList;
