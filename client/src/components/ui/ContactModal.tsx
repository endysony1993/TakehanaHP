import React, { useEffect, useState } from "react";
import { apiPost } from "../../utils/apiClient";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const { style } = document.body;
    const prev = { overflow: style.overflow };
    style.overflow = "hidden";
    return () => {
      style.overflow = prev.overflow;
    };
  }, [open]);

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
      const msg = err?.message || "送信中にエラーが発生しました。"
      // If it's a network-level failure (browser shows "Failed to fetch"), offer a mailto fallback
      if (typeof msg === 'string' && (msg.includes('Failed to fetch') || msg.toLowerCase().includes('network'))) {
        const to = 'info@mail.tkhtec.org'
        const subject = encodeURIComponent(form.title?.trim() || 'お問い合わせ')
        const bodyLines = [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Message:\n${form.message}`,
        ]
        const body = encodeURIComponent(bodyLines.join('\n'))
        setMailtoHref(`mailto:${to}?subject=${subject}&body=${body}`)
        setError('サーバーに接続できませんでした。代わりにメールクライアントで送信するには下のリンクを使ってください。')
      } else {
        setError(msg)
      }
    } finally {
      setLoading(false);
    }
  };

  const closeAndReset = () => {
    setForm({ name: "", email: "", title: "", message: "" });
    setSubmitted(false);
    setError("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[20000]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeAndReset} />
      {/* Dialog */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200">
          <button
            type="button"
            aria-label="閉じる"
            onClick={closeAndReset}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl text-center font-bold mb-2 text-[#0066c5]">お問い合わせ</h2>
            <p className="text-gray-600 text-center mb-4">ご相談はお気軽にご連絡ください。</p>

            {/* Form */}
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-lg text-[#0066c5] font-semibold mb-2">送信が完了しました。</p>
                <p className="text-gray-600 text-sm">お問い合わせいただきありがとうございます。担当者よりご連絡いたします。</p>
                <button onClick={closeAndReset} className="mt-6 px-6 py-2 rounded-lg bg-[#0066c5] text-white font-semibold hover:opacity-90">閉じる</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                {mailtoHref && (
                  <div className="mb-2">
                    <a href={mailtoHref} className="text-blue-600 underline" rel="noreferrer">メールで送信する (info@mail.tkhtec.org)</a>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500 caret-[#3C7FE6] focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500 caret-[#3C7FE6] focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">件名</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500 caret-[#3C7FE6] focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500 caret-[#3C7FE6] focus:outline-none focus:ring-2 focus:ring-[#3C7FE6]"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end pt-2">
                  <button type="button" onClick={closeAndReset} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">キャンセル</button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 rounded-lg bg-[#0066c5] text-white font-semibold shadow transition-transform duration-200 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "送信中..." : "送信"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
