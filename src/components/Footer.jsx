const Footer = () => {
  return (
    <footer className="bg-blue-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VTuber Frontline</h3>
            <p className="text-gray-600">
              新人VTuberを発掘し、応援するためのサイトです。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">プライバシーポリシー</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-600">利用規約</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-600">運営者情報</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-600">
              contact@vtuber-frontline.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VTuber Frontline. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
