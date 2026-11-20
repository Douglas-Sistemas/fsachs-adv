"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { content, type Language } from "@/lib/content";
import { Icon } from "./icon";
import { Monogram } from "./monogram";

const preferenceEvent = "fsachs:preferences";
const memoryPreferences: Record<string, string> = {};

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(preferenceEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(preferenceEvent, callback);
  };
}

function getPreference(key: string, fallback: string) {
  try {
    return window.localStorage.getItem(key) ?? memoryPreferences[key] ?? fallback;
  } catch {
    return memoryPreferences[key] ?? fallback;
  }
}

function savePreference(key: string, value: string) {
  memoryPreferences[key] = value;
  try { window.localStorage.setItem(key, value); } catch { /* Keep preferences in memory when storage is unavailable. */ }
  window.dispatchEvent(new Event(preferenceEvent));
}

export default function LandingPage() {
  const savedLanguage = useSyncExternalStore(subscribe, () => getPreference("fsachs-language", "pt"), () => "pt");
  const theme = useSyncExternalStore(subscribe, () => getPreference("fsachs-theme", "light"), () => "light");
  const language: Language = savedLanguage === "en" ? "en" : "pt";
  const t = content[language];
  const dark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
  }, [language, t]);

  useEffect(() => {
    document.documentElement.dataset.theme = getPreference("fsachs-theme", "light") === "dark" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  function scrollTo(id: string) {
    setMenuOpen(false);
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    target?.focus({ preventScroll: true });
  }

  const navigation = <>
    <button type="button" onClick={() => scrollTo("sobre")}>{t.aboutNav}</button>
    <button type="button" onClick={() => scrollTo("atuacao")}>{t.practicesNav}</button>
    <button type="button" onClick={() => scrollTo("contato")}>{t.contactNav}</button>
  </>;

  return (
    <>
      <button type="button" className="skip-link" onClick={() => scrollTo("conteudo")}>{t.skip}</button>
      <header className="site-header">
        <div className="container header-inner">
          <button type="button" className="brand" onClick={() => scrollTo("conteudo")} aria-label={`Fabiano Sachs — ${t.home}`}>
            <Monogram className="brand-monogram" />
            <span className="brand-wordmark"><span>Fabiano Sachs</span><span className="brand-subtitle">{t.brandSubtitle}</span></span>
          </button>
          <nav className="desktop-nav" aria-label={t.navigation}>{navigation}</nav>
          <div className="header-controls">
            <div className="language-switch" role="group" aria-label={t.language}>
              <button type="button" lang="pt-BR" aria-label={t.portuguese} aria-pressed={language === "pt"} onClick={() => savePreference("fsachs-language", "pt")}>PT</button>
              <span aria-hidden="true">/</span>
              <button type="button" lang="en" aria-label={t.english} aria-pressed={language === "en"} onClick={() => savePreference("fsachs-language", "en")}>EN</button>
            </div>
            <span className="control-divider" aria-hidden="true" />
            <button type="button" className="icon-button theme-toggle" onClick={() => savePreference("fsachs-theme", dark ? "light" : "dark")} aria-label={dark ? t.light : t.dark} title={dark ? t.light : t.dark} aria-pressed={dark}>
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <button type="button" id="menu-toggle" className="icon-button menu-toggle" aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" className="mobile-nav" aria-label={t.navigation} hidden={!menuOpen}>{navigation}</nav>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="gold-line" />{t.heroEyebrow}</p>
            <h1 id="hero-title">{t.heroTitle}<br /><em>{t.heroAccent}</em></h1>
            <p className="hero-description">{t.heroDescription}</p>
            <button type="button" className="primary-button" onClick={() => scrollTo("atuacao")}>{t.heroAction}</button>
            <div className="hero-signature"><span className="since">{t.since}</span><span>{t.heroNote}</span></div>
          </div>
          <figure className="hero-visual">
            <div className="image-frame">
              <Image src="/images/architecture.webp" alt={t.imageAlt} fill preload sizes="(max-width: 760px) 90vw, (max-width: 1100px) 43vw, 490px" className="architecture-image" />
              <div className="photo-shade" />
              <Monogram className="photo-monogram" />
              <figcaption className="photo-caption"><span>{t.imageCaption}</span><span>{t.imageCaptionAccent}</span></figcaption>
            </div>
            <span className="frame-corner" aria-hidden="true" />
          </figure>
        </section>

        <section className="credentials" aria-label={t.credentials}>
          <div className="container credentials-inner">
            {t.credentialItems.map((item) => <div className="credential" key={item.icon}>
              <Icon name={item.icon} />
              <div><h2>{item.title}</h2><p>{item.description}</p></div>
            </div>)}
          </div>
        </section>

        <section id="atuacao" tabIndex={-1} className="practices section-space container" aria-labelledby="practice-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="gold-line" />{t.practicesEyebrow}</p><h2 id="practice-title">{t.practicesTitle}<br /><em>{t.practicesAccent}</em></h2></div>
            <p className="section-intro">{t.practicesDescription}</p>
          </div>
          <div className="practice-grid">
            {t.practices.map((practice) => <article className="practice-card" key={practice.icon}>
              <Icon name={practice.icon} className="practice-icon" />
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </article>)}
          </div>
        </section>

        <section id="sobre" tabIndex={-1} className="about" aria-labelledby="about-title">
          <div className="container about-inner">
            <div className="about-identity">
              <Monogram className="about-watermark" />
              <div className="about-name"><p className="eyebrow"><span className="gold-line" />{t.aboutEyebrow}</p><h2 id="about-title">{t.aboutTitle}<br /><em>{t.aboutAccent}</em></h2><p className="registration">OAB/RS 72.699</p></div>
            </div>
            <div className="about-details">
              <p className="about-description">{t.aboutDescription}</p>
              <div className="qualification"><Icon name="university" /><div><p className="detail-label">{t.educationLabel}</p><h3>{t.education}</h3><p>{t.university}</p></div></div>
              <div className="qualification"><Icon name="scales" /><div><p className="detail-label">{t.jurisdictionLabel}</p><p className="jurisdiction">{t.jurisdiction}</p></div></div>
            </div>
          </div>
        </section>

        <section id="contato" tabIndex={-1} className="contact section-space container" aria-labelledby="contact-title">
          <div className="contact-intro"><p className="eyebrow"><span className="gold-line" />{t.contactEyebrow}</p><h2 id="contact-title">{t.contactTitle}<br /><em>{t.contactAccent}</em></h2><p>{t.contactDescription}</p></div>
          <address className="contact-details">
            <div className="contact-item"><span className="contact-icon"><Icon name="phone" /></span><div><p className="detail-label">{t.phoneLabel}</p><p className="contact-value phone-number">(51) 98182-2906</p></div></div>
            <div className="contact-item"><span className="contact-icon"><Icon name="mail" /></span><div><p className="detail-label">{t.emailLabel}</p><p className="contact-value email-address">fabianosachs99@gmail.com</p></div></div>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><div className="footer-brand"><Monogram className="footer-monogram" /><div><span className="footer-name">Fabiano Sachs</span><p>{t.footerDescriptor}</p></div></div><p className="footer-registration">Fabiano Ferreira Sachs<span>OAB/RS 72.699</span></p><button type="button" className="back-top" onClick={() => scrollTo("conteudo")}><span>{t.backTop}</span><Icon name="chevron" /></button></div>
        <div className="container footer-bottom"><p>© 2026 Fabiano Ferreira Sachs. {t.rights}</p><p>{t.since}</p></div>
      </footer>
    </>
  );
}
