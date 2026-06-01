export default function Footer() {
  return (
    <footer className="w-full mt-16 pt-12 pb-8 border-t border-border/40 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <img 
          src="/logos.jpg" 
          alt="Sponsors" 
          className="h-16 object-contain opacity-80 select-none pointer-events-none"
        />
      </div>
    </footer>
  );
}
