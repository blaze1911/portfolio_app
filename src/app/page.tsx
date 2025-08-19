export default function Home() {
  return (
    <div className="py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[480px] w-[720px] sm:h-[600px] sm:w-[900px] bg-[radial-gradient(closest-side,theme(colors.blue.400/.35),transparent)] blur-3xl" />
        </div>
        <div className="px-4 sm:px-12 py-12 sm:py-20 text-center">
          <p className="text-xs tracking-widest uppercase text-neutral-500">GIS • AI • Data</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            공간지능과 인공지능으로 문제를 정의하고 해결합니다
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto prose-contrast">
            신뢰할 수 있는 수치와 사례 중심의 포트폴리오. 지도 상호작용과 실험 데모로 결과를 투명하게 보여드립니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/projects" className="inline-flex h-11 px-5 items-center rounded-full bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 w-full sm:w-auto justify-center">프로젝트 보기</a>
            <a href="/contact" className="inline-flex h-11 px-5 items-center rounded-full border border-black/10 dark:border-white/20 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 w-full sm:w-auto justify-center">문의하기</a>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight">대표 프로젝트</h2>
        <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group rounded-xl border border-black/5 dark:border-white/10 p-5 hover:border-black/10 dark:hover:border-white/20 transition-colors card">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-black/5 dark:border-white/10" />
              <h3 className="mt-4 font-medium">프로젝트 타이틀 {i}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-400">간단한 소개 문장. 사용 기술 · 지표 하이라이트.</p>
              <div className="mt-4 text-sm">
                <a className="text-blue-600 dark:text-blue-400 hover:underline" href="/projects">자세히 보기 →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
