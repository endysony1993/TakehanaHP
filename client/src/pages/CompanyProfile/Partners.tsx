export default function Partners() {
  const logos: string[] = [
    "/PartnerLogo/1.png",
    "/PartnerLogo/2.png",
    "/PartnerLogo/3.png",
    "/PartnerLogo/4.png",
    "/PartnerLogo/5.png",
    "/PartnerLogo/6.png",
    "/PartnerLogo/7.png",
    "/PartnerLogo/8.png",
    "/PartnerLogo/9.png",
    "/PartnerLogo/10.png",
    "/PartnerLogo/11.png",
    "/PartnerLogo/12.png",
    "/PartnerLogo/13.png",
    "/PartnerLogo/14.png",
    "/PartnerLogo/15.png",

  ];

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
