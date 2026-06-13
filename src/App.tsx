import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIShowcase from './components/AIShowcase';
import Differentiator from './components/Differentiator';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import PartnerPage from './components/PartnerPage';
import PartnerTerms from './components/PartnerTerms';
import PricingPage from './components/PricingPage';
import SupportPage from './components/SupportPage';
import { Seo } from './seo/Seo';
import { getRouteMeta } from './seo/routes';

function HomePage() {
  return (
    <>
      <Hero />
      <AIShowcase />
      <Differentiator />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

/** Pair a page with its per-route SEO metadata. */
function withSeo(path: string, node: ReactNode) {
  return (
    <>
      <Seo meta={getRouteMeta(path)} />
      {node}
    </>
  );
}

/**
 * The app tree without a router. Shared by the client (BrowserRouter) and the
 * prerender server entry (StaticRouter) so both render identical markup.
 */
export function AppShell() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={withSeo('/', <HomePage />)} />
          <Route path="/pricing" element={withSeo('/pricing', <PricingPage />)} />
          <Route path="/privacy" element={withSeo('/privacy', <PrivacyPolicy />)} />
          <Route path="/terms" element={withSeo('/terms', <TermsOfService />)} />
          <Route path="/partners" element={withSeo('/partners', <PartnerPage />)} />
          <Route path="/partner-terms" element={withSeo('/partner-terms', <PartnerTerms />)} />
          <Route path="/support" element={withSeo('/support', <SupportPage />)} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
