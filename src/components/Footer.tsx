const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
      <span className="font-semibold text-foreground">AI Ready School</span>
      <span>© {new Date().getFullYear()} AI Ready School. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
