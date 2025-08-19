export default function DataModelsPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">데이터 · 모델</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">Dataset Card와 Model Card를 통해 라이선스, 버전, 지표 등을 명확히 제공합니다.</p>
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {["Dataset", "Model"].map((kind, i) => (
          <article key={i} className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
            <h2 className="font-medium">{kind} Card 예시</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">핵심 메타데이터와 링크를 표시합니다.</p>
          </article>
        ))}
      </div>
    </div>
  );
}


