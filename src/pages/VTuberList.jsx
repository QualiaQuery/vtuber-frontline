import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VTuberCard from '../components/VTuberCard';

const VTuberList = () => {
  const [vtubers, setVTubers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    // 仮のVTuberデータ
    const sampleVTubers = [
      {
        id: 1,
        name: "星野あかり",
        debutDate: "2025-06-01",
        channelUrl: "https://www.youtube.com/channel/",
        genre: "ゲーム実況",
        views: 10000,
        likes: 500,
        comments: 100,
        thumbnail: "https://via.placeholder.com/300",
        description: "ゲーム実況が得意な新人VTuber。明るい性格で、視聴者とのコミュニケーションを大切にしています。",
        twitter: "https://twitter.com/akari_hoshino",
        youtube: "https://www.youtube.com/channel/akari",
        twitch: "https://www.twitch.tv/akari"
      },
      {
        id: 2,
        name: "月乃みずき",
        debutDate: "2025-06-15",
        genre: "歌い手",
        views: 8000,
        likes: 400,
        comments: 80,
        thumbnail: "https://via.placeholder.com/300",
        description: "歌声が魅力の新人VTuber。カバー曲からオリジナル曲まで幅広く活動しています。",
        twitter: "https://twitter.com/mizuki_tsuki",
        youtube: "https://www.youtube.com/channel/mizuki",
        twitch: "https://www.twitch.tv/mizuki"
      },
      {
        id: 3,
        name: "風見はるか",
        debutDate: "2025-06-20",
        genre: "トーク",
        views: 12000,
        likes: 600,
        comments: 150,
        thumbnail: "https://via.placeholder.com/300",
        description: "おしゃべりが得意な新人VTuber。毎日の生活や気になったことについて語るトーク配信が人気です。",
        twitter: "https://twitter.com/haruka_kazehi",
        youtube: "https://www.youtube.com/channel/haruka",
        twitch: "https://www.twitch.tv/haruka"
      },
      {
        id: 4,
        name: 'サンプルVTuber1',
        debutDate: '2025/06/01',
        thumbnail: '/placeholder.jpg',
        channelUrl: '#',
        description: '新人VTuberとして活動を開始しました。',
      },
      {
        id: 5,
        name: 'サンプルVTuber2',
        debutDate: '2025/06/15',
        thumbnail: '/placeholder.jpg',
        channelUrl: '#',
        description: '個性的なVTuberとして注目を集めています。',
      },
    ];
    setVTubers(sampleVTubers);
  }, []);

  const filteredVTubers = vtubers.filter(vtuber => {
    const matchesSearch = vtuber.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === '' || vtuber.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">VTuber一覧</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="VTuber名を検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">ジャンルで絞り込み</option>
              <option value="ゲーム実況">ゲーム実況</option>
              <option value="歌い手">歌い手</option>
              <option value="トーク">トーク</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVTubers.map((vtuber) => (
            <VTuberCard key={vtuber.id} vtuber={vtuber} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VTuberList;
