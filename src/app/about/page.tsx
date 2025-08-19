export default function AboutPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">소개</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">프로필, 핵심역량, 협업사와 수상경력을 요약합니다.</p>
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
          <h2 className="font-medium">핵심 역량</h2>
          <ul className="mt-2 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300">
            <li>GIS 데이터 파이프라인</li>
            <li>딥러닝 모델링 및 서빙</li>
            <li>대화형 지도/시각화</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 dark:border-white/10 p-5 card">
          <h2 className="font-medium">연락</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">협업 문의는 Contact 페이지를 이용해주세요.</p>
        </div>
      </div>
    </div>
  );
}


