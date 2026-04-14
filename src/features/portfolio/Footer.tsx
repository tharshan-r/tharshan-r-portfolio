const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* LEFT */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tharshan R
          </p>

          <p className="text-xs text-muted-foreground mt-1">
            Building scalable frontend systems with performance and precision.
          </p>
        </div>

        {/* CENTER (PERSONAL TOUCH) */}
        <p className="text-xs text-muted-foreground font-mono text-center">
          Crafted with <span className="text-primary">React</span>,{" "}
          <span className="text-primary">TypeScript</span> & attention to detail
        </p>

        {/* RIGHT (SIGNATURE LINE) */}
        <p className="text-xs text-muted-foreground font-mono text-center sm:text-right">
          Think in systems. Build with intent.
        </p>
      </div>
    </footer>
  );
};

export default Footer;