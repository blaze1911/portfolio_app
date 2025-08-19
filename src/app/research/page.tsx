export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">연구·논문</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">발표/논문/특허 목록과 인용 정보를 정리합니다. BibTeX/APA 복사를 지원할 예정입니다.</p>
      <ul className="mt-8 space-y-3 sm:space-y-4">
        {[1,2,3].map((i) => (
          <li key={i} className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
            <div className="text-sm">202{3 + i} · 학회/저널명</div>
            <div className="mt-1 font-medium">논문 타이틀 {i}</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">저자 A, 저자 B</div>
          </li>
        ))}
      </ul>
    </div>
  );
}


