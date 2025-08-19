export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">프로젝트</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">분야, 기술, 연도별로 탐색할 수 있도록 설계 예정입니다. 현재는 대표 프로젝트를 중심으로 구성합니다.</p>
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-black/5 dark:border-white/10" />
            <h2 className="mt-4 font-medium">{i === 1 ? "실시간 유동인구 기반 산불예방 의사결정 지원시스템" : `프로젝트 ${i}`}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">요약 설명과 주요 기술 태그</p>
          </article>
        ))}
      </div>
    </div>
  );
}


