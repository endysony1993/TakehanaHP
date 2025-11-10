import { assetPath } from "../../utils/assetPath";

export default function Partners() {
  const logos: string[] = Array.from({ length: 15 }, (_, i) => assetPath(`PartnerLogo/${i + 1}.png`));

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#31B4A8] mb-8 text-center">パートナー・提携先</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {logos.map((src, idx) => (
            <div key={idx} className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src={src} alt="partner logo" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
