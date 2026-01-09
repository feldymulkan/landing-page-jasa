import React, { useState } from 'react';
import { Menu, X, Smartphone, Globe, Server, ShieldCheck, CheckCircle, ArrowRight, Code, Users } from 'lucide-react';
import DashboardIllustration from './assets/DashboardIllustration.jsx';
import VpnIllustration from './assets/VpnIllustration.jsx';
import RadiusIllustration from './assets/RadiusIllustration.jsx';

// Kontak utama (WhatsApp)
const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || '+6283129431925';
const buildWaLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// --- Komponen Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu mobile saat link diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-brand-dark/70 backdrop-blur-lg border-b border-white/10 py-4 px-6 fixed w-full top-0 z-50 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo - Klik logo scroll ke atas */}
        <a href="#" className="font-bold text-2xl flex items-center gap-2 cursor-pointer hover:text-brand-primary transition">
          <Globe className="w-8 h-8 text-brand-primary" />
          <span>besopok.com</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#services" className="hover:text-brand-accent transition">Layanan</a>
          <a href="#about" className="hover:text-brand-accent transition">Tentang</a>
          <a href="#partners" className="hover:text-brand-accent transition">Partner</a>
          <a href="#pricing" className="hover:text-brand-accent transition">Harga</a>
          <a href="#contact" className="hover:text-brand-accent transition">Kontak</a>
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
        <div className="md:hidden bg-brand-dark/80 backdrop-blur-lg text-white p-6 absolute w-full left-0 top-full border-t border-blue-800/60 shadow-xl">
          <div className="flex flex-col gap-6 text-center text-lg">
            <a href="#services" onClick={handleLinkClick} className="hover:text-brand-accent">Layanan</a>
            <a href="#about" onClick={handleLinkClick} className="hover:text-brand-accent">Tentang</a>
            <a href="#partners" onClick={handleLinkClick} className="hover:text-brand-accent">Partner</a>
            <a href="#pricing" onClick={handleLinkClick} className="hover:text-brand-accent">Harga</a>
            <a href="#contact" onClick={handleLinkClick} className="hover:text-brand-accent">Kontak</a>
            <a
              href={buildWaLink('Halo, saya ingin konsultasi layanan. Mohon info lebih lanjut.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Komponen Hero Section ---
const Hero = () => {
  return (
    <section className="bg-brand-dark text-white pt-32 pb-20 px-6 relative overflow-hidden animate-fade-in">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bangun Solusi Digital Inovatif Bersama Kami
          </h1>
          <p className="text-lg text-blue-200">
            Kami hadir untuk membantu bisnis Anda tumbuh melalui teknologi modern: pengembangan aplikasi, sistem manajemen, hingga solusi jaringan dan cloud yang kami sesuaikan dengan kebutuhan Anda.
          </p>
          <a
            href={buildWaLink('Halo, saya tertarik konsultasi gratis terkait pengembangan aplikasi/website. Kapan bisa dijadwalkan?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-lg"
          >
            Konsultasi Gratis <ArrowRight className="w-5 h-5"/>
          </a>
        </div>
          <div className="h-64 md:h-96 w-full rounded-md glass-dark flex items-center justify-center overflow-hidden animate-fade-in card-hover">
            <DashboardIllustration className="w-full h-full max-w-[560px] animate-float-slow" />
           <span className="sr-only">Ilustrasi Dashboard System</span>
          </div>
      </div>
    </section>
  );
};

// --- Komponen Services ---
const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white scroll-mt-20 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Ringkasan Layanan (gaya kartu seperti aisadev) */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Solusi Teknologi untuk Semua Kebutuhan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Optimalkan bisnis Anda dengan layanan yang dirancang untuk efisiensi, skalabilitas, dan hasil nyata.</p>
        </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Web Application */}
          <div className="glass-light rounded-xl p-8 hover:shadow-lg transition h-full flex flex-col animate-slide-up card-hover">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Web Application</h3>
            <p className="text-gray-600 mb-4">Aplikasi web responsif dan andal untuk manajemen data, transaksi, dan analitik.</p>
            <ul className="space-y-2 text-sm text-gray-700 mt-auto">
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Dashboard & Admin</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Integrasi API & Payment</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> SEO & Analytics</li>
            </ul>
          </div>

          {/* Mobile Application */}
          <div className="glass-light rounded-xl p-8 hover:shadow-lg transition h-full flex flex-col animate-slide-up card-hover">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Application</h3>
            <p className="text-gray-600 mb-4">Jangkau pengguna lebih luas dengan aplikasi Android/iOS yang cepat dan mudah digunakan.</p>
            <ul className="space-y-2 text-sm text-gray-700 mt-auto">
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Cross-platform</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Push Notifications</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Publikasi Store</li>
            </ul>
          </div>

          {/* Automation Tools */}
          <div className="glass-light rounded-xl p-8 hover:shadow-lg transition h-full flex flex-col animate-slide-up card-hover">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Automation Tools</h3>
            <p className="text-gray-600 mb-4">Hemat waktu dengan otomatisasi: notifikasi, sinkronisasi data, dan workflow.</p>
            <ul className="space-y-2 text-sm text-gray-700 mt-auto">
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Bot & Scheduler</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Integrasi Sistem</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-4 h-4"/> Monitoring & Alert</li>
            </ul>
          </div>
        </div>

        {/* Network & Server Solutions (VPN Remote + BeeRadius) */}
        <div className="space-y-16">
          {/* VPN Remote */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="h-64 rounded-lg flex items-center justify-center glass-light overflow-hidden card-hover">
              <VpnIllustration className="w-full h-full max-w-[520px] animate-float-slow" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">VPN Remote Perangkat & Server</h2>
              <p className="text-gray-600 leading-relaxed">Akses perangkat lokal (Mikrotik, Server, CCTV) dari mana saja tanpa IP Public statis. Koneksi aman, terenkripsi, dan stabil.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Enkripsi & Tunneling Aman</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Support semua ISP</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Monitoring & Bantuan Setup</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya ingin informasi paket VPN Remote (akses perangkat & server).')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary px-6 py-2 mt-4"
              >
                Pelajari VPN
              </a>
            </div>
          </div>

          {/* BeeRadius */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Server Radius (BeeRadius)</h2>
              <p className="text-gray-600 leading-relaxed">Manajemen pengguna hotspot dan PPPoE lebih mudah dengan BeeRadius. Billing, bandwidth management, dan laporan keuangan otomatis.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Instalasi OS & Radius</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Integrasi Mikrotik</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary w-5 h-5"/> Dukungan Maintenance</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik BeeRadius (server RADIUS hotspot/PPPoE). Bisa demo?')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary px-6 py-2 mt-4"
              >
                Demo BeeRadius
              </a>
            </div>
            <div className="order-1 md:order-2 h-64 rounded-lg flex items-center justify-center glass-light overflow-hidden card-hover">
              <RadiusIllustration className="w-full h-full max-w-[520px] animate-float-slow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Komponen Partners ---
const Partners = () => {
  const partnerList = [
    { name: "Kaca Mata Murah Mataram", type: "Optik & Retail" },
    { name: "Blomings", type: "Lifestyle" },
    { name: "Gerung Vape Store", type: "E-commerce" },
    { name: "Lombok Pesona", type: "Travel & Tourism" },
  ];

  return (
    <section id="partners" className="py-20 px-6 bg-brand-dark text-center scroll-mt-20 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Partner Kami
      </h2>
      <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
        Klien yang telah mempercayakan sistem digital mereka kepada kami.
      </p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partnerList.map((partner, index) => (
          <div key={index} className="glass-dark p-8 rounded-lg hover:bg-white/20 transition duration-300 animate-slide-up card-hover">
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

        {/* --- KATEGORI 1: Website Development (customized) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">Website Development</h3>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Paket 1: Starter Landing */}
            <div className="glass-light rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col card-hover">
              <div className="bg-blue-50 w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-4">Mulai</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Landing</h3>
              <div className="text-4xl font-bold text-brand-dark mb-4">Rp 500rb<span className="text-base text-gray-500 font-normal">/project</span></div>
              <p className="text-gray-500 mb-6 text-sm">Paket landing cepat untuk validasi dan promosi singkat.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Desain responsif + cepat</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Copywriting dasar & CTA</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Integrasi Form/WhatsApp</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Website Development: Starter Landing (Rp 500rb). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

             {/* Paket 2: Business Site (Recommended) */}
            <div className="bg-brand-dark/90 backdrop-blur-md text-white rounded-lg p-8 shadow-2xl relative flex flex-col transform md:-translate-y-2 border border-white/10 card-hover">
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">TERFAVORIT</div>
              <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-brand-accent text-xs font-bold mb-4">Mulai</div>
              <h3 className="text-xl font-bold mb-2">Business Site</h3>
              <div className="text-4xl font-bold text-white mb-4">Rp 1,75 Jt<span className="text-base text-blue-200 font-normal">/project</span></div>
              <p className="text-blue-200 mb-6 text-sm">Situs perusahaan modern yang fleksibel dan mudah dikelola.</p>
              <ul className="space-y-3 text-sm text-blue-100 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Multi‑page + CMS ringan</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Blog/Artikel & Galeri</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> SEO On‑page + Analytics</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Website Development: Business Site (Rp 1,75 Jt). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

            {/* Paket 3: Commerce Lite */}
            <div className="glass-light rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col card-hover">
              <div className="chip-glass mb-4">Mulai</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commerce Lite</h3>
              <div className="text-4xl font-bold text-brand-dark mb-4">Rp 5,5 Jt<span className="text-base text-gray-500 font-normal">/project</span></div>
              <p className="text-gray-500 mb-6 text-sm">E‑commerce ringkas untuk berjualan cepat dan terukur.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Katalog & Manajemen Produk</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Checkout + Payment Gateway</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Order Dashboard & Notifikasi</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Website Development: Commerce Lite (Rp 5,5 Jt). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>
          </div>

          {/* Add-ons dipindahkan ke bagian Kontak agar Pricing lebih ringkas */}
        </div>

          {/* --- KATEGORI 2: Mobile App Development --- */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-gray-300 flex-1"></div>
             <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">Mobile App Development</h3>
             <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MVP Starter */}
            <div className="glass-light rounded-lg p-8 hover:border-brand-primary transition duration-300 group flex flex-col card-hover">
              <div className="bg-blue-50 w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-3">Mulai</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">MVP Starter</h3>
              <p className="text-brand-primary font-bold text-2xl mb-4">Rp 6 Jt<span className="text-sm text-gray-500 font-normal">/project</span></p>
              <p className="text-gray-500 mb-6 text-sm">Aplikasi awal untuk validasi pasar dan uji hipotesis.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Cross‑platform</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Basic Auth</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Core Features</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Mobile: MVP Starter (Rp 6 Jt). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

            {/* Growth App (highlight) */}
            <div className="bg-brand-dark/90 backdrop-blur-md text-white rounded-lg p-8 shadow-2xl relative flex flex-col border border-white/10 card-hover">
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">TERFAVORIT</div>
              <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-brand-accent text-xs font-bold mb-3">Mulai</div>
              <h3 className="text-lg font-bold mb-2">Growth App</h3>
              <p className="font-bold text-2xl mb-4">Rp 11 Jt<span className="text-sm text-blue-200 font-normal">/project</span></p>
              <p className="text-blue-200 mb-6 text-sm">Skalakan fitur dengan integrasi API, notifikasi, dan offline.</p>
              <ul className="space-y-2 text-sm text-blue-100 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent"/> Push Notifications</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent"/> API Integration</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-accent"/> Offline Mode</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Mobile: Growth App (Rp 11 Jt). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

            {/* Enterprise Suite */}
            <div className="glass-light rounded-lg p-8 hover:border-brand-primary transition duration-300 group flex flex-col card-hover">
              <div className="chip-glass mb-3">Mulai</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Suite</h3>
              <p className="text-brand-primary font-bold text-2xl mb-4">Rp 22 Jt<span className="text-sm text-gray-500 font-normal">/project</span></p>
              <p className="text-gray-500 mb-6 text-sm">Arsitektur kustom, keamanan tingkat lanjut, performa optimal.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Real‑time Features</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Advanced Security</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-primary"/> Performance Optimization</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik paket Mobile: Enterprise Suite (Rp 22 Jt). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>
          </div>
        </div>

        {/* --- KATEGORI 3: Network & Server --- */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">Network & Server</h3>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VPN Remote */}
            <div className="glass-light rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col card-hover">
              <div className="bg-blue-50 w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-4">Mulai</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">VPN Remote</h3>
              <div className="text-4xl font-bold text-brand-dark mb-4">Rp 10rb<span className="text-base text-gray-500 font-normal">/port/bln</span></div>
              <p className="text-gray-500 mb-6 text-sm">Akses Mikrotik/Server lokal dari internet publik dengan aman.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Harga per Port</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Support Semua ISP</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Unlimited Bandwidth</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik layanan VPN Remote (Rp 10rb/port/bln). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

            {/* BeeRadius (highlight) */}
            <div className="bg-brand-dark/90 backdrop-blur-md text-white rounded-lg p-8 shadow-2xl relative flex flex-col border border-white/10 card-hover">
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">TERFAVORIT</div>
              <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-brand-accent text-xs font-bold mb-4">Mulai</div>
              <h3 className="text-xl font-bold mb-2">BeeRadius Server</h3>
              <div className="text-4xl font-bold text-white mb-4">Rp 100rb<span className="text-base text-blue-200 font-normal">/bln</span></div>
              <p className="text-blue-200 mb-6 text-sm">Server Radius siap pakai untuk Hotspot & PPPoE.</p>
              <ul className="space-y-3 text-sm text-blue-100 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Instalasi OS & Radius</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Integrasi Mikrotik</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Cloud Stabil</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-accent shrink-0"/> Maintenance</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya tertarik BeeRadius Server (Rp 100rb/bln). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Minta Proposal
              </a>
            </div>

            {/* Jasa Setting Mikrotik */}
            <div className="glass-light rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col card-hover">
              <div className="chip-glass mb-4">Mulai</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jasa Setting Mikrotik</h3>
              <div className="text-4xl font-bold text-brand-dark mb-4">Rp 1 Jt<span className="text-base text-gray-500 font-normal">/setup</span></div>
              <p className="text-gray-500 mb-6 text-sm">Optimasi jaringan: bandwidth, load balance, failover.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Audit Jaringan</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Optimasi Wireless</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0"/> Troubleshooting</li>
              </ul>
              <a
                href={buildWaLink('Halo, saya butuh Jasa Setting Mikrotik (Rp 1 Jt/setup). Mohon proposal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Minta Proposal
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Komponen About / Keberhasilan ---
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-brand-dark text-white animate-fade-in">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Keberhasilan yang Dibangun dengan Solusi Digital</h2>
          <p className="text-blue-200">Dengan pendekatan berbasis data dan teknologi terkini, kami membantu berbagai bisnis menciptakan solusi yang efektif dan inovatif untuk mencapai tujuan mereka.</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="glass-dark rounded-lg p-4 animate-slide-up card-hover">
              <div className="text-3xl font-bold text-brand-accent">50+</div>
              <div className="text-sm text-blue-200">Proyek</div>
            </div>
            <div className="glass-dark rounded-lg p-4 animate-slide-up card-hover" style={{animationDelay:'0.06s'}}>
              <div className="text-3xl font-bold text-brand-accent">20+</div>
              <div className="text-sm text-blue-200">Klien</div>
            </div>
            <div className="glass-dark rounded-lg p-4 animate-slide-up card-hover" style={{animationDelay:'0.12s'}}>
              <div className="text-3xl font-bold text-brand-accent">5 thn</div>
              <div className="text-sm text-blue-200">Pengalaman</div>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-lg p-8 text-center animate-slide-up card-hover" style={{animationDelay:'0.18s'}}>
          <Users className="w-16 h-16 mx-auto text-brand-accent mb-4"/>
          <p className="text-blue-100">Kami percaya setiap ide bisa diwujudkan menjadi solusi yang berdampak. Mari tumbuh bersama teknologi.</p>
        </div>
      </div>
    </section>
  );
};

// --- Komponen CTA & Footer ---
const Footer = () => {
  return (
    <footer className="bg-[#002a5c]/80 backdrop-blur-md text-white pt-16 pb-8 px-6 border-t border-white/10">
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
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(79,156,249,0.15),transparent),radial-gradient(600px_300px_at_80%_10%,rgba(4,56,115,0.18),transparent)]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Partners />
      <Pricing /> {/* Bagian Pricing Ditambahkan Di Sini */}
      
      {/* Section CTA */}
      <section className="bg-brand-dark/80 backdrop-blur-lg py-20 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             Siap Mengembangkan Bisnis Anda?
           </h2>
           <p className="text-blue-200 mb-8">
             Hubungi kami sekarang untuk konsultasi gratis mengenai kebutuhan aplikasi atau jaringan Anda.
           </p>
           <a
             href={buildWaLink('Halo, saya ingin konsultasi gratis terkait kebutuhan aplikasi atau jaringan. Kapan bisa dijadwalkan?')}
             target="_blank"
             rel="noopener noreferrer"
             className="btn-primary px-8 py-4 text-lg inline-block"
           >
             Hubungi Kami Sekarang
           </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;