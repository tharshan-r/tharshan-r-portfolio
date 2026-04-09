const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tharshan R. Built with React & TypeScript.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Designed & engineered with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
