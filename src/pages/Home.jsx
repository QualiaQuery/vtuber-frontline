const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            VTuber Frontline
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            新人VTuberを発掘し、応援するためのサイト
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              新着VTuberをチェック
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              掲載依頼する
            </button>
          </div>
        </div>
      </section>

      {/* Featured VTubers */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">注目VTuber</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample VTuber cards */}
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                {/* Thumbnail placeholder */}
              </div>
              <h3 className="text-xl font-semibold mb-2">VTuber Name</h3>
              <p className="text-gray-600 mb-4">デビュー日: 2025/06/01</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  プロフィール
                </button>
                <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  チャンネル
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Announcement Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お知らせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample announcements */}
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">お知らせタイトル</h3>
                <p className="text-gray-600 mb-4">2025/06/27</p>
                <p className="text-gray-600">お知らせの内容が入ります。</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
