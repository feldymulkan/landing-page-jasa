import React, { useState } from 'react';
import { Menu, X, Smartphone, Globe, Server, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

// --- Komponen Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu mobile saat link diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-brand-dark py-4 px-6 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo - Klik logo scroll ke atas */}
        <a href="#" className="font-bold text-2xl flex items-center gap-2 cursor-pointer hover:text-brand-primary transition">
          <Globe className="w-8 h-8 text-brand-primary" />
          <span>besopok.com</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#services" className="hover:text-brand-accent transition">Layanan</a>
          <a href="#partners" className="hover:text-brand-accent transition">Partner</a>
          <a href="#pricing" className="hover:text-brand-accent transition">Harga</a>
          {/* <button className="bg-brand-accent text-brand-dark px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
            Hubungi Kami
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark text-white p-6 absolute w-full left-0 top-full border-t border-blue-800 shadow-xl">
          <div className="flex flex-col gap-6 text-center text-lg">
            <a href="#services" onClick={handleLinkClick} className="hover:text-brand-accent">Layanan</a>
            <a href="#partners" onClick={handleLinkClick} className="hover:text-brand-accent">Partner</a>
            <a href="#pricing" onClick={handleLinkClick} className="hover:text-brand-accent">Harga</a>
            <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-bold w-full">
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Komponen Hero Section ---
const Hero = () => {
  return (
    <section className="bg-brand-dark text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bangun Ekosistem Digital Bisnis Anda
          </h1>
          <p className="text-lg text-blue-200">
            Kami menyediakan solusi pembuatan Aplikasi Web & Mobile, pengaturan VPN Remote, dan instalasi Server Radius (BeeRadius) yang handal dan aman.
          </p>
          <button className="bg-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition flex items-center gap-2">
            Konsultasi Gratis <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
        <div className="bg-blue-200 h-64 md:h-96 w-full rounded-md flex items-center justify-center text-brand-dark font-bold relative overflow-hidden group">
           {/* Placeholder Ilustrasi */}
           <div className="text-center p-4">
              <Server className="w-24 h-24 mx-auto mb-4 text-brand-dark opacity-50" />
              <span className="text-xl opacity-70">Ilustrasi Dashboard System</span>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- Komponen Services ---
const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Service 1: Web & Mobile */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pengembangan Aplikasi Web & Mobile
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tingkatkan efisiensi bisnis dengan aplikasi custom yang sesuai kebutuhan Anda. Kami membangun sistem yang responsif, cepat, dan mudah digunakan (User Friendly).
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> React / Next.js / Vue</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Flutter / React Native</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Integrasi Payment Gateway</li>
            </ul>
            <button className="bg-brand-primary text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition">Lihat Portfolio</button>
          </div>
          <div className="order-1 md:order-2 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <Smartphone className="w-20 h-20 text-brand-dark" />
          </div>
        </div>

        {/* Service 2: VPN & Remote */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
             <ShieldCheck className="w-20 h-20 text-brand-dark" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              VPN Remote Perangkat & Server
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Akses perangkat lokal Anda (Mikrotik, Server, CCTV) dari mana saja tanpa IP Public statis. Koneksi aman, terenkripsi, dan stabil.
            </p>
            <button className="bg-brand-primary text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition">Pelajari VPN</button>
          </div>
        </div>

        {/* Service 3: BeeRadius */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Server Radius (BeeRadius)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Manajemen pengguna hotspot dan PPPoE menjadi lebih mudah dengan BeeRadius. Fitur lengkap untuk billing, manajemen bandwidth, dan laporan keuangan otomatis.
            </p>
            <ul className="space-y-2 text-gray-700">
               <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Setup Awal & Migrasi</li>
               <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Custom Login Page</li>
            </ul>
            <button className="bg-brand-primary text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition">Demo BeeRadius</button>
          </div>
          <div className="order-1 md:order-2 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
             <Server className="w-20 h-20 text-brand-dark" />
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Komponen Partners ---
const Partners = () => {
  const partnerList = [
    { name: "Apotik Rizka Farma", type: "Farmasi & Kesehatan" },
    { name: "Kaca Mata Murah Mataram", type: "Optik & Retail" },
    { name: "Blomings", type: "Lifestyle" },
    { name: "Gerung Vape Store", type: "Retail Store" },
  ];

  return (
    <section id="partners" className="py-20 px-6 bg-brand-dark text-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Partner Kami
      </h2>
      <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
        Klien yang telah mempercayakan sistem digital mereka kepada kami.
      </p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partnerList.map((partner, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
            <p className="text-sm text-brand-accent">{partner.type}</p>
          </div>
        ))}
      </div>
      
      {/* Visual Connector Lines */}
      <div className="mt-12 flex justify-center opacity-30">
        <div className="flex gap-4">
           <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
           <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
           <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
        </div>
      </div>
    </section>
  );
};

// --- Komponen Pricing (DIPISAH: Network vs App) ---
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Utama */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Pilihan Paket Layanan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparan dan fleksibel. Pilih layanan infrastruktur jaringan atau pengembangan aplikasi sesuai kebutuhan Anda.
          </p>
        </div>

        {/* --- KATEGORI 1: Infrastruktur Jaringan (VPN & Server) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
              <Server className="text-brand-primary"/> Paket Jaringan & Server
            </h3>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Paket 1: VPN Remote */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition duration-300 bg-white flex flex-col">
              <div className="bg-blue-50 w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-4">Bulanan</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">VPN Remote</h3>
              {/* UPDATED: Harga VPN */}
              <div className="text-4xl font-bold text-brand-dark mb-4">Rp 5rb<span className="text-base text-gray-500 font-normal">/port/bln</span></div>
              <p className="text-gray-500 mb-6 text-sm">Akses Mikrotik/Server lokal dari internet publik.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Harga per Port</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Support Semua Provider ISP</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Unlimited Bandwidth</li>
              </ul>
              <button className="w-full border-2 border-brand-primary text-brand-primary font-bold py-2 rounded-lg hover:bg-brand-primary hover:text-white transition">Order VPN</button>
            </div>

             {/* Paket 2: BeeRadius (Recommended) */}
             <div className="bg-brand-dark text-white rounded-lg p-8 shadow-2xl relative flex flex-col transform md:-translate-y-2 border border-brand-dark">
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">BEST SELLER</div>
              {/* UPDATED: Kategori Bulanan */}
              <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-brand-accent text-xs font-bold mb-4">Bulanan</div>
              <h3 className="text-xl font-bold mb-2">BeeRadius Server</h3>
              {/* UPDATED: Harga BeeRadius */}
              <div className="text-4xl font-bold text-white mb-4">Mulai Rp 50rb<span className="text-base text-blue-200 font-normal">/bln</span></div>
              <p className="text-blue-200 mb-6 text-sm">Server Radius siap pakai untuk manajemen Hotspot & PPPoE.</p>
              <ul className="space-y-3 text-sm text-blue-100 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Full Instalasi OS & Radius</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Integrasi ke Mikrotik</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Cloud Server Stabil</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Support Maintenance</li>
              </ul>
              <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition">Order BeeRadius</button>
            </div>

            {/* Paket 3: Custom Network */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition duration-300 bg-white flex flex-col">
              <div className="bg-gray-100 w-fit px-3 py-1 rounded-full text-gray-600 text-xs font-bold mb-4">Custom</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jasa Setting Mikrotik</h3>
              <div className="text-4xl font-bold text-brand-dark mb-4">Call Us</div>
              <p className="text-gray-500 mb-6 text-sm">Setting manajemen bandwidth, load balance, atau failover.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Audit Jaringan</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Optimasi Wireless</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Troubleshooting</li>
              </ul>
              <button className="w-full border-2 border-brand-dark text-brand-dark font-bold py-2 rounded-lg hover:bg-brand-dark hover:text-white transition">Konsultasi</button>
            </div>
          </div>
        </div>

        {/* --- KATEGORI 2: Software Development (Web & Mobile) --- */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-gray-300 flex-1"></div>
             <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
               <Smartphone className="text-brand-primary"/> Paket Pembuatan Aplikasi
             </h3>
             <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dev 1: Landing Page */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-brand-primary transition duration-300 bg-gray-50 group">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Company Profile / Landing Page</h3>
              <p className="text-brand-primary font-bold text-2xl mb-4">Mulai Rp 1,5 Jt</p>
              <p className="text-gray-500 mb-6 text-sm">Website informasi untuk meningkatkan kredibilitas bisnis.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Desain Modern & Responsif</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Domain .com Gratis (1 thn)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> SEO Basic</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Revisi 2x</li>
              </ul>
              <button className="text-brand-primary font-bold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">Pesan Website <ArrowRight className="w-4 h-4"/></button>
            </div>

            {/* Dev 2: Web App System */}
            <div className="border-2 border-brand-primary/20 rounded-lg p-8 hover:border-brand-primary transition duration-300 bg-white shadow-sm group">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web Application System</h3>
              <p className="text-brand-primary font-bold text-2xl mb-4">Mulai Rp 5 Jt</p>
              <p className="text-gray-500 mb-6 text-sm">Sistem manajemen kompleks (Kasir, Inventory, Sekolah, dll).</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Custom Fitur Sesuai Request</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Dashboard Admin</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Database Management</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Maintenance 3 Bulan</li>
              </ul>
              <button className="text-brand-primary font-bold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">Konsultasi Sistem <ArrowRight className="w-4 h-4"/></button>
            </div>

            {/* Dev 3: Mobile Apps */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-brand-primary transition duration-300 bg-gray-50 group">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Application</h3>
              <p className="text-brand-primary font-bold text-2xl mb-4">Mulai Rp 10 Jt</p>
              <p className="text-gray-500 mb-6 text-sm">Aplikasi Android & iOS untuk menjangkau user di smartphone.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Android (Play Store)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> iOS (App Store) Optional</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> API Integration</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Upload & Publish</li>
              </ul>
              <button className="text-brand-primary font-bold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">Buat Aplikasi <ArrowRight className="w-4 h-4"/></button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Komponen CTA & Footer ---
const Footer = () => {
  return (
    <footer className="bg-[#002a5c] text-white pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <Globe className="w-6 h-6 text-brand-primary" />
             <span className="font-bold text-xl">besopok.com</span>
          </div>
          <p className="text-blue-200 max-w-sm">
            Partner terbaik untuk transformasi digital bisnis Anda. Dari aplikasi hingga infrastruktur jaringan.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Layanan</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="#services" className="hover:text-white">Web Development</a></li>
            <li><a href="#services" className="hover:text-white">Mobile Apps</a></li>
            <li><a href="#services" className="hover:text-white">VPN Remote</a></li>
            <li><a href="#services" className="hover:text-white">BeeRadius Server</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>Mataram, NTB</li>
            <li>+62 812-3456-7890</li>
            <li>info@besopok.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-300">
        © 2024 besopok.com. All rights reserved.
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <Pricing /> {/* Bagian Pricing Ditambahkan Di Sini */}
      
      {/* Section CTA */}
      <section className="bg-brand-dark py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             Siap Mengembangkan Bisnis Anda?
           </h2>
           <p className="text-blue-200 mb-8">
             Hubungi kami sekarang untuk konsultasi gratis mengenai kebutuhan aplikasi atau jaringan Anda.
           </p>
           <button className="bg-brand-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition">
             Hubungi Kami Sekarang
           </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;