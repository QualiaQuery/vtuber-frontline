import { useState } from 'react';
import { Link } from 'react-router-dom';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    debutDate: '',
    channelUrl: '',
    description: '',
    socialLinks: {
      twitter: '',
      youtube: '',
      pixiv: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 仮の送信処理
    console.log('送信データ:', formData);
    // 実際はAPIに送信する
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">VTuber掲載依頼フォーム</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* 基本情報 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">基本情報</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">VTuber名</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">デビュー日</label>
            <input
              type="date"
              name="debutDate"
              value={formData.debutDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">チャンネルURL</label>
            <input
              type="url"
              name="channelUrl"
              value={formData.channelUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">VTuberの特徴</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        {/* ソーシャルリンク */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">ソーシャルリンク</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Twitter</label>
            <input
              type="url"
              name="socialLinks.twitter"
              value={formData.socialLinks.twitter}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">YouTube</label>
            <input
              type="url"
              name="socialLinks.youtube"
              value={formData.socialLinks.youtube}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pixiv</label>
            <input
              type="url"
              name="socialLinks.pixiv"
              value={formData.socialLinks.pixiv}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 送信ボタン */}
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            戻る
          </Link>
          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
