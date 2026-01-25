import Navbar from "../components/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-hidden bg-[#1a0b01]">
        {/* Background & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div 
          className="absolute inset-0 z-1"
          style={{ background: "linear-gradient(to right, rgba(45, 18, 1, 0.95) 0%, rgba(45, 18, 1, 0.4) 100%)" }}
        />

        {/* Container Hero - Sejajar dengan Navbar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="w-full"> {/* Menggunakan w-full agar teks bisa memanjang sejajar menu navbar */}
            <div className="mb-6 md:mb-10">
              <Image 
                src="/logo-lif-white.png" 
                alt="LIF White Logo"
                width={320} 
                height={80}
                className="w-[220px] md:w-[320px] h-auto" 
                priority
              />
            </div>
            
            <h1 className="text-3xl md:text-[52px] font-bold text-white leading-tight mb-8 tracking-tight">
              LIF Community <br /> Indonesia Chapter
            </h1>
            
            {/* Teks Hero yang diperbarui dan dilebarkan sejajar Local Partnership */}
            <div className="space-y-6 text-sm md:text-[18px] text-white font-light leading-relaxed opacity-90 text-justify md:text-left">
              <p>
                The Leaders in Innovation Fellowships - Indonesia Chapter is a volunteer-led alumni network of Leaders In Innovation Programme, fully supported by the Royal Academy of Engineering, United Kingdom.
              </p>
              <p>
                We bring together engineers and innovators from across cohorts who live and work in Indonesia to share knowledge, amplify impact-aligned projects, and support collaborative solutions to local development challenges. We promote cross-cohort collaboration, public engagement, and the translation of technical ideas into practical projects that contribute to the SDGs.
              </p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
  <a 
    /* Link yang sudah dimodifikasi untuk direct download */
    href="https://drive.google.com/uc?export=download&id=1ry_tC0k3HP4lV30MwJnD-b4cF9WvvB01" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-10 py-3.5 bg-[#FE8900] text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg text-[12px] uppercase tracking-widest"
  >
    DOWNLOAD
  </a>
  <span className="text-white text-sm md:text-[16px] font-medium opacity-90 italic">
    Download our alumni booklet here
  </span>
</div>
          </div>
        </div>
      </section>

      {/* Section About - Sejajar Sempurna dengan Navbar */}
      <section id="about" className="bg-white py-24 px-6 md:px-16 lg:px-24 scroll-mt-20">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#2D1201] mb-10 tracking-tight">
              About Leaders in Innovation Fellowships
            </h2>
            
            <div className="w-full text-[#2D1201] text-lg md:text-[20px] leading-relaxed space-y-8">
              <p>
                <span className="font-bold">The Leaders in Innovation Fellowships (LIF)</span> programme supports talented entrepreneurs from around the globe to turn their engineering innovation into impactful, sustainable businesses.
              </p>
              <p className="opacity-90">
                LIF nurture bold, scalable innovations from all areas of engineering and technology that are addressing some of the world's most complex environmental, economic, and societal challenges.
              </p>
            </div>
          </div>

          {/* Grid 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="flex gap-6 p-10 bg-[#FEFDF5] rounded-3xl border border-orange-50 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FEF3C6] rounded-full flex items-center justify-center">
                 <Image 
                    src="/icon-entrepreneurship.svg" 
                    alt="Icon" 
                    width={28} 
                    height={28} 
                    style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }}
                 />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#2D1201] mb-4">Entrepreneurship Foundations</h3>
                <p className="text-[17px] text-gray-700 leading-relaxed">
                  LIF's personalised approach focuses on acquiring <span className="font-bold text-[#BB4D00]">foundational entrepreneurship skills</span>. These then lead to accelerated commercial growth and investment.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-6 p-10 bg-[#FEFDF5] rounded-3xl border border-orange-50 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FEF3C6] rounded-full flex items-center justify-center">
                 <Image 
                    src="/icon-network.svg" 
                    alt="Icon" 
                    width={28} 
                    height={28} 
                    style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }}
                 />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#2D1201] mb-4">Elite Global Network</h3>
                <p className="text-[17px] text-gray-700 leading-relaxed">
                  LIF entrepreneurs benefit from the Academy's unique, <span className="font-bold text-[#BB4D00]">prestigious network</span> of expert Fellows, investors, and business leaders.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-6 p-10 bg-[#FEFDF5] rounded-3xl border border-orange-50 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FEF3C6] rounded-full flex items-center justify-center">
                 <Image 
                    src="/icon-alumni.svg" 
                    alt="Icon" 
                    width={28} 
                    height={28} 
                    style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }}
                 />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#2D1201] mb-4">1,500+ Active Alumni</h3>
                <p className="text-[17px] text-gray-700 leading-relaxed">
                  LIF empower a worldwide community of <span className="font-bold text-[#BB4D00]">more than 1,550 alumni</span> to support each other through networking and training.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-6 p-10 bg-[#FEFDF5] rounded-3xl border border-orange-50 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FEF3C6] rounded-full flex items-center justify-center">
                 <Image 
                    src="/icon-equity.svg" 
                    alt="Icon" 
                    width={28} 
                    height={28} 
                    style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }}
                 />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#2D1201] mb-4">Zero Equity & Fees</h3>
                <p className="text-[17px] text-gray-700 leading-relaxed">
                  LIF is a support-first programme. We <span className="font-bold text-[#BB4D00]">don't take equity, fees or IP</span> from the innovators we support.
                </p>
              </div>
            </div>

          </div>

          {/* Info Box */}
          <div className="p-8 bg-[#FEF3C6] rounded-2xl border-l-8 border-[#FE8900] w-full">
            <p className="text-lg font-medium text-[#7B3306]">
              Learn more about the programme: <a href="https://www.raeng.org.uk/lif" target="_blank" className="underline font-bold hover:text-[#FE8900] transition-colors">raeng.org.uk/lif</a>
            </p>
          </div>
        </div>
      </section>
    {/* SECTION UPCOMING EVENTS - Desain Berdasarkan Referensi User */}
<section id="events" className="bg-[#FEFDF5] py-24 px-6 md:px-16 lg:px-24 scroll-mt-20">
  <div className="w-full max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-[40px] font-bold text-[#2D1201] mb-12 tracking-tight">
      Upcoming Events
    </h2>

    <div className="space-y-12">
      {/* Event 1: Annual Alumni TownHall */}
      <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border-l-[12px] border-[#FE8900]">
        <h3 className="text-2xl md:text-3xl font-bold text-[#BB4D00] mb-8">
          Annual Alumni TownHall
        </h3>
        
        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#FEFDF5] p-5 rounded-2xl flex items-center gap-4">
            <Image src="/icon-date.svg" alt="Date" width={28} height={28} style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} />
            <div>
              <p className="text-[11px] font-bold text-[#BB4D00] uppercase tracking-wider">When:</p>
              <p className="text-[15px] font-semibold text-gray-800">23 January 2026</p>
            </div>
          </div>
          <div className="bg-[#FEFDF5] p-5 rounded-2xl flex items-center gap-4">
            <Image src="/icon-location.svg" alt="Location" width={28} height={28} style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} />
            <div>
              <p className="text-[11px] font-bold text-[#BB4D00] uppercase tracking-wider">Where:</p>
              <p className="text-[15px] font-semibold text-gray-800">Jakarta</p>
            </div>
          </div>
          <div className="bg-[#FEFDF5] p-5 rounded-2xl flex items-center gap-4">
            <Image src="/icon-format.svg" alt="Format" width={28} height={28} style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} />
            <div>
              <p className="text-[11px] font-bold text-[#BB4D00] uppercase tracking-wider">Format:</p>
              <p className="text-[15px] font-semibold text-gray-800">TownHall & Networking</p>
            </div>
          </div>
        </div>

        {/* Note Box */}
        <div className="p-5 bg-[#FEF3C6] rounded-2xl border border-orange-100 italic text-[16px] text-[#7B3306]">
          <span className="font-bold">Note:</span> Please reach out us on WhatsApp Group
        </div>
      </div>

      {/* Event 2: INTRA's Melting Pot */}
      <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border-l-[12px] border-[#FE8900]">
        <h3 className="text-2xl md:text-3xl font-bold text-[#BB4D00] mb-8 leading-tight">
          INTRA's Melting Pot: "Innovation Ecosystem Health and Growth Check"
        </h3>

        {/* Quick Info Row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-[#FEFDF5] px-8 py-5 rounded-2xl flex items-center gap-4 min-w-[240px]">
            <Image src="/icon-date.svg" alt="Date" width={28} height={28} style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} />
            <div>
              <p className="text-[11px] font-bold text-[#BB4D00] uppercase tracking-wider">When:</p>
              <p className="text-[15px] font-semibold text-gray-800">24 January 2026</p>
            </div>
          </div>
          <div className="bg-[#FEFDF5] px-8 py-5 rounded-2xl flex items-center gap-4 min-w-[240px]">
            <Image src="/icon-location.svg" alt="Location" width={28} height={28} style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} />
            <div>
              <p className="text-[11px] font-bold text-[#BB4D00] uppercase tracking-wider">Where:</p>
              <p className="text-[15px] font-semibold text-gray-800">Jakarta</p>
            </div>
          </div>
        </div>

        {/* Body Text - Ukuran disamakan dengan Section About */}
        <div className="space-y-6 text-gray-700 text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-6xl">
          <p>Leaders in Innovation Fellowships (LIF) Alumni Indonesia Chapter, in collaboration with ANGIN Advisory are honored to invite you to our first public event in 2026, named INTRA's Melting Pot: "Innovation Ecosystem Health and Growth Check."</p>
          <p>This Melting Pot was designed to create a safe space for founders, investors, industry practitioners, enablers, and policymakers to pause and reflect collectively: where the ecosystem is functioning, where it is constrained, and what structural bottlenecks persist.</p>
        </div>

        {/* Detail Table Box - Dibuat w-full agar sejajar dengan card bawahnya */}
        <div className="bg-[#FEFDF5] border border-orange-100 rounded-3xl p-6 md:p-8 mb-10 w-full"> 
          <h4 className="text-[#BB4D00] font-bold text-xl mb-6">Event Details</h4>
          <div className="space-y-5">
            
            {/* Time */}
            <div className="flex items-start gap-2">
              <div className="w-[100px] md:w-32 flex-shrink-0 flex items-center gap-3">
                <Image 
                  src="/icon-time.svg" 
                  alt="Time" 
                  width={20} 
                  height={20} 
                  style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} 
                />
                <span className="text-[#BB4D00] font-bold">Time</span>
              </div>
              <span className="text-gray-800 flex-1 leading-relaxed">: 09.00 - 15.00 WIB</span>
            </div>

            {/* Date */}
            <div className="flex items-start gap-2">
              <div className="w-[100px] md:w-32 flex-shrink-0 flex items-center gap-3">
                <Image 
                  src="/icon-date.svg" 
                  alt="Date" 
                  width={20} 
                  height={20} 
                  style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} 
                />
                <span className="text-[#BB4D00] font-bold">Date</span>
              </div>
              <span className="text-gray-800 flex-1 leading-relaxed">: January 24th, 2026</span>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2">
              <div className="w-[100px] md:w-32 flex-shrink-0 flex items-center gap-3">
                <Image 
                  src="/icon-location.svg" 
                  alt="Location" 
                  width={20} 
                  height={20} 
                  style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} 
                />
                <span className="text-[#BB4D00] font-bold">Location</span>
              </div>
              <span className="text-gray-800 flex-1 leading-relaxed">: Jakarta, Indonesia</span>
            </div>

            {/* Format */}
            <div className="flex items-start gap-2">
              <div className="w-[100px] md:w-32 flex-shrink-0 flex items-center gap-3">
                <Image 
                  src="/icon-format.svg" 
                  alt="Format" 
                  width={20} 
                  height={20} 
                  style={{ filter: "invert(31%) sepia(93%) saturate(1335%) hue-rotate(1deg) brightness(95%) contrast(106%)" }} 
                />
                <span className="text-[#BB4D00] font-bold">Format</span>
              </div>
              <span className="text-gray-800 flex-1 leading-relaxed">
                : Panel & Participatory Unconference (Invitation Only)
              </span>
            </div>

          </div>
        </div>

        <div className="mb-10">
  <p className="text-[#BB4D00] font-bold text-lg mb-4 tracking-tight">
    Registration before January 22nd, 2026:
  </p>
  {/* Hyperlink ke Google Form */}
  <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSfnYDnkgjbImC-EbDC6BaSChBGcNt0U4fPCcr5tbvsNv0lh2A/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-12 py-4 bg-[#FE8900] text-white rounded-2xl font-bold hover:bg-[#D97600] transition-all shadow-lg hover:scale-[1.02] text-center"
  >
    Register Now
  </a>
</div>

        {/* Detailed Note Box */}
        <div className="p-8 bg-[#FEF3C6] rounded-3xl border border-orange-100 text-[16px] text-gray-700 leading-relaxed">
          <p><span className="font-bold">Note:</span> If you have any questions or need further assistance, please don't hesitate to reach out to the team, Quentino (Nino) at quentino@anginfoundation.org (+62 878-8870-5656).</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* SECTION GALLERIES */}
<section id="galleries" className="bg-white py-24 px-6 md:px-16 lg:px-24 scroll-mt-20">
  <div className="w-full max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#2D1201] mb-4 tracking-tight">
          Galleries
        </h2>
        <p className="text-lg text-gray-700">
          Moments of innovation and collaboration from the LIF Indonesia community.
        </p>
      </div>
    </div>

    {/* Grid 4 Gambar - grid-cols-1 di HP biar nggak penyet, md:grid-cols-2 di Laptop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Image 1 */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-[40px] shadow-sm group">
        <Image 
          src="/day-1-1.jpg" 
          alt="LIF Gallery 1" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Image 2 */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-[40px] shadow-sm group">
        <Image 
          src="/day-1-2.jpg" 
          alt="LIF Gallery 2" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Image 3 */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-[40px] shadow-sm group">
        <Image 
          src="/day-2-1.jpg" 
          alt="LIF Gallery 3" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Image 4 */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-[40px] shadow-sm group">
        <Image 
          src="/day-2-3.jpg" 
          alt="LIF Gallery 4" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      </div> {/* Tutup Grid */}
  </div> {/* Tutup Container */}
</section> {/* Tutup Section Galleries */}
    
      {/* SECTION LOCAL PARTNERSHIP */}
      <section id="partnership" className="bg-[#FEFDF5] py-24 px-6 md:px-16 lg:px-24 scroll-mt-20">
        <div className="w-full max-w-7xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-[40px] font-bold text-[#2D1201] mb-16 tracking-tight">
            Local Partnership
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            
            {/* Logo ANGIN Advisory */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm flex items-center justify-center w-[280px] h-[280px] hover:shadow-md transition-shadow">
              <div className="relative w-full h-full">
                <Image 
                  src="/partnership-logoANGIN.webp" 
                  alt="ANGIN Advisory Logo" 
                  fill 
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Logo YSEALI */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm flex items-center justify-center w-[280px] h-[280px] hover:shadow-md transition-shadow">
              <div className="relative w-full h-full">
                <Image 
                  src="/partnership-logoYSEALI.webp" 
                  alt="YSEALI Logo" 
                  fill 
                  className="object-contain p-4"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SECTION FOOTER */}
      <footer className="bg-[#121826] pt-20 pb-10 px-6 md:px-16 lg:px-24 text-white">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Header Footer: Logo dan Kontak Sejajar */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-6"> {/* Margin bottom dikurangi agar teks naik */}
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Image 
                src="/logo-lif-footer.webp" 
                alt="LIF Logo" 
                width={340} 
                height={85} 
                className="h-auto w-[280px] md:w-[340px]"
                priority
              />
            </div>
            
            {/* Contact Info Section */}
            <div className="flex flex-col gap-6 text-sm md:text-[15px] md:text-right md:pt-2">
              <div className="group">
                <p className="text-gray-400 mb-1">For partnership opportunity, please contact:</p>
                <a 
                  href="mailto:lif.indonesiachapter@gmail.com" 
                  className="text-white font-bold hover:text-[#FE8900] transition-colors inline-block"
                >
                  lif.indonesiachapter@gmail.com
                </a>
              </div>
              
              <div className="group">
                <p className="text-gray-400 mb-1">Alumni Social Network:</p>
                <a 
                  href="https://innovators.raeng.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-[#FE8900] transition-colors inline-block break-all"
                >
                  https://innovators.raeng.org.uk/
                </a>
              </div>
            </div>
          </div>

          {/* Deskripsi: Dibuat lebih sempit (max-w) agar hampir sejajar ujung logo */}
          <div className="max-w-[360px] mb-24"> {/* Ukuran disesuaikan agar sejajar dengan lebar logo (340px) */}
            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed">
              <span className="font-bold text-gray-200">LIF Community - Indonesia Chapter</span> is a volunteer-led alumni network of Leaders In Innovation Programme from the Royal Academy of Engineering, United Kingdom.
            </p>
          </div>

          {/* Bottom Bar: Copyright */}
          <div className="border-t border-gray-800/60 pt-8 flex justify-between items-center">
            <p className="text-gray-500 text-[13px] tracking-wide">
              © 2026 LIF Community — Indonesia Chapter. A volunteer-led alumni network.
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}