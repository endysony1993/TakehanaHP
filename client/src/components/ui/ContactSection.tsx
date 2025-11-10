import React, { useState } from "react";
import { apiPost } from "../../utils/apiClient";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-[#034a8c]">お問い合わせ</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          ご相談はお気軽にご連絡ください。
        </p>

      

        {/* フォーム */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("お名前、メールアドレス、メッセージは必須です。");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await apiPost<{ success: boolean; data?: any; error?: any }>("/api/contact", {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        title: form.title.trim() || undefined,
      });
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.error?.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch (err: any) {
      setError(err.message || "送信中にエラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-[#034a8c] font-semibold mb-2">送信が完了しました。</p>
        <p className="text-gray-600 text-sm">お問い合わせいただきありがとうございます。担当者よりご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow p-6 space-y-5 text-left">
      <h3 className="text-lg font-semibold text-[#034a8c] mb-4">お問い合わせフォーム</h3>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
          required
        />
      </div>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">タイトル <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">メッセージ <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#034a8c] text-white font-semibold py-2 rounded-lg shadow transition-transform duration-200 transform hover:scale-110 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "送信中..." : "送信"}
      </button>
    </form>
  );
}
