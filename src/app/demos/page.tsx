export default function DemosPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">데모</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">API/서버 연동형 데모와 GIS 인터랙션을 단계적으로 추가할 예정입니다.</p>
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3].map((i) => (
          <article key={i} className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
            <h2 className="font-medium">데모 {i}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">사용법과 제한사항 안내</p>
          </article>
        ))}
      </div>
    </div>
  );
}


