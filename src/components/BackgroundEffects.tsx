export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-amber-200/40 rounded-full blur-[140px]" />
      <div className="absolute top-[35%] -right-20 w-[460px] h-[460px] bg-violet-200/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -left-20 w-[430px] h-[430px] bg-orange-200/30 rounded-full blur-[130px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}