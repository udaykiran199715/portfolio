export function GradientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="light:opacity-50">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px] animate-drift" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-mint/15 blur-[160px] animate-drift-slow" />
        <div className="absolute bottom-[-15%] left-[10%] h-[450px] w-[450px] rounded-full bg-accent-soft/15 blur-[150px] animate-drift" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] light:opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
