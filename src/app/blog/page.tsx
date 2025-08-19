export default function BlogPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">블로그</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">카테고리/태그, 목차 자동 생성 등을 지원할 예정입니다.</p>
      <div className="mt-8 space-y-4 sm:space-y-6">
        {[1,2,3].map((i) => (
          <article key={i} className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
            <h2 className="font-medium">글 제목 {i}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">요약 본문 미리보기 텍스트</p>
          </article>
        ))}
      </div>
    </div>
  );
}


