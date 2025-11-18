function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-white/60">Sales Squad — Built for the Entrepreneur</p>
            <p className="text-xs text-white/40">Part of the Sales Squad ecosystem</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white">Terms</a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
