import { useState } from 'react';
import { Link } from 'react-router-dom';

const Matching = () => {
  const [filters, setFilters] = useState({
    genre: '',
    activityTime: '',
    activityFrequency: '',
    minViews: '',
    minLikes: '',
    minComments: '',
    minAge: '',
    maxAge: '',
    gender: '',
    personality: [],
  });

  // 仮のVTuberデータ（実際はAPIから取得するべき）
  const vtubers = [
    {
      id: 1,
      name: 'サンプルVTuber1',
      debutDate: '2025/06/01',
      thumbnail: '/placeholder.jpg',
      channelUrl: '#',
      genre: ['ゲーム実況', '雑談'],
      activityTime: '19:00-22:00',
      activityFrequency: '週3回',
      views: 1000,
      likes: 500,
      comments: 100,
      age: 20,
      gender: '女性',
      personality: ['明るい', '親しみやすい'],
      description: 'ゲーム実況が得意なVTuberです。',
    },
    // 他のVTuberデータを追加
  ];

  // フィルター適用
  const filteredVTubers = vtubers.filter((vtuber) => {
    const { genre, activityTime, activityFrequency, minViews, minLikes, minComments, minAge, maxAge, gender, personality } = filters;

    // ジャンルフィルター
    if (genre && !vtuber.genre.includes(genre)) return false;

    // 活動時間フィルター
    if (activityTime && vtuber.activityTime !== activityTime) return false;

    // 活動頻度フィルター
    if (activityFrequency && vtuber.activityFrequency !== activityFrequency) return false;

    // 再生回数フィルター
    if (minViews && vtuber.views < parseInt(minViews)) return false;

    // いいね数フィルター
    if (minLikes && vtuber.likes < parseInt(minLikes)) return false;

    // コメント数フィルター
    if (minComments && vtuber.comments < parseInt(minComments)) return false;

    // 年齢フィルター
    if (minAge && vtuber.age < parseInt(minAge)) return false;
    if (maxAge && vtuber.age > parseInt(maxAge)) return false;

    // 性別フィルター
    if (gender && vtuber.gender !== gender) return false;

    // 性格フィルター
    if (personality.length > 0 && !personality.some(tag => vtuber.personality.includes(tag))) return false;

    return true;
  });

  // フィルター変更ハンドラー
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">VTuberマッチング</h1>

      {/* フィルター設定 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">あなたの好みを教えてください</h2>

        {/* ジャンル選択 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">ジャンル</label>
          <select
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="ゲーム実況">ゲーム実況</option>
            <option value="雑談">雑談</option>
            <option value="音楽">音楽</option>
            <option value="絵画">絵画</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* 活動時間帯 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">活動時間帯</label>
          <select
            name="activityTime"
            value={filters.activityTime}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="12:00-15:00">昼間（12:00-15:00）</option>
            <option value="15:00-18:00">夕方（15:00-18:00）</option>
            <option value="18:00-21:00">夜（18:00-21:00）</option>
            <option value="21:00-00:00">深夜（21:00-00:00）</option>
          </select>
        </div>

        {/* 活動頻度 */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">活動頻度</label>
          <select
            name="activityFrequency"
            value={filters.activityFrequency}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="毎日">毎日</option>
            <option value="週3回">週3回</option>
            <option value="週1回">週1回</option>
          </select>
        </div>

        {/* 数値フィルター */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">最低再生回数</label>
            <input
              type="number"
              name="minViews"
              value={filters.minViews}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">最低いいね数</label>
            <input
              type="number"
              name="minLikes"
              value={filters.minLikes}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">最低コメント数</label>
            <input
              type="number"
              name="minComments"
              value={filters.minComments}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 年齢フィルター */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">最低年齢</label>
            <input
              type="number"
              name="minAge"
              value={filters.minAge}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">最高年齢</label>
            <input
              type="number"
              name="maxAge"
              value={filters.maxAge}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 性別フィルター */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">性別</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="女性">女性</option>
            <option value="男性">男性</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* 性格フィルター */}
        <div>
          <label className="block text-gray-700 mb-2">性格</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="personality"
                value="明るい"
                checked={filters.personality.includes('明るい')}
                onChange={handleFilterChange}
                className="mr-2"
              />
              明るい
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="personality"
                value="親しみやすい"
                checked={filters.personality.includes('親しみやすい')}
                onChange={handleFilterChange}
                className="mr-2"
              />
              親しみやすい
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="personality"
                value="真面目"
                checked={filters.personality.includes('真面目')}
                onChange={handleFilterChange}
                className="mr-2"
              />
              真面目
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="personality"
                value="面白い"
                checked={filters.personality.includes('面白い')}
                onChange={handleFilterChange}
                className="mr-2"
              />
              面白い
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="personality"
                value="個性的"
                checked={filters.personality.includes('個性的')}
                onChange={handleFilterChange}
                className="mr-2"
              />
              個性的
            </label>
          </div>
        </div>
      </div>

      {/* マッチング結果 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">マッチング結果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVTubers.map((vtuber) => (
            <div key={vtuber.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                {/* サムネイル */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{vtuber.name}</h3>
              <p className="text-gray-600 mb-2">デビュー日: {vtuber.debutDate}</p>
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
    </div>
  );
};

export default Matching;
