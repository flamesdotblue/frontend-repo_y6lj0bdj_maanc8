import HeroSection from './components/HeroSection.jsx';
import ImpactBanner from './components/ImpactBanner.jsx';
import TestimonialsCarousel from './components/TestimonialsCarousel.jsx';
import CountdownCTA from './components/CountdownCTA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0E27] text-white antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0E27]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#A78BFA] to-[#F59E0B]" />
            <span className="text-lg font-bold tracking-tight">SkillSphere</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">Program</a>
            <a href="#mentors" className="hover:text-white">Educators</a>
            <a href="#community" className="hover:text-white">Community</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#apply" className="rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-4 py-2 text-sm font-semibold shadow-[#7C3AED]/30 shadow-md">Apply</a>
        </div>
      </header>

      <main id="main">
        <HeroSection />
        <ImpactBanner />
        <TestimonialsCarousel />
        <CountdownCTA />
      </main>

      <footer className="relative border-t border-white/10 bg-[#0A0E27] py-10 text-white/80">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#A78BFA] to-[#F59E0B]" />
                <span className="text-lg font-bold tracking-tight text-white">SkillSphere</span>
              </div>
              <p className="mt-3 text-sm">Elite AI learning for ambitious professionals. Transform outcomes, not just skills.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#curriculum" className="hover:text-white">Curriculum</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Stay Updated</h4>
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" aria-label="Email" required placeholder="Your email" className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A78BFA]" />
                <button className="rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-4 text-sm font-semibold">Join</button>
              </form>
              <div className="mt-3 text-xs text-white/60">We respect your privacy. Unsubscribe anytime.</div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Trust & Security</h4>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">Money-back</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">Secure</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">Certified</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">Support</div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} SkillSphere. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
