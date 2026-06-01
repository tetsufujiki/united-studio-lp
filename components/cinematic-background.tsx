export function CinematicBackground() {
  return (
    <div 
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    >
      {/* Single optimized background layer - combines base, radials, and vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(0, 0, 0, 0.5) 100%),
            radial-gradient(ellipse 100% 70% at 50% -5%, rgba(70, 55, 35, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 80% 55% at 50% 105%, rgba(50, 40, 25, 0.25) 0%, transparent 45%),
            linear-gradient(180deg, #0e0d0c 0%, #0b0a09 40%, #090807 100%)
          `
        }}
      />
    </div>
  );
}
