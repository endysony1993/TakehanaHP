// Contact section now triggers the navbar modal instead of embedding the form

export default function ContactSection() {
  const openModal = () => {
    window.dispatchEvent(new Event('open-contact-modal'))
  }
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-[#0066c5]">お問い合わせ</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          ご相談はお気軽にご連絡ください。
        </p>
        <div className="max-w-2xl mx-auto">
          <button
            type="button"
            onClick={openModal}
            className="w-full bg-[#0066c5] text-white font-semibold py-3 rounded-lg shadow transition-transform duration-200 transform hover:scale-105"
          >
            お問い合わせフォームを開く
          </button>
          <p className="text-xs text-gray-500 mt-2">ナビゲーションの「お問い合わせ」からも開けます。</p>
        </div>
      </div>
    </section>
  );
}
