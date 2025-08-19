export default function ContactPage() {
  return (
    <div className="py-12 sm:py-14">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">연락</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">간단한 폼으로 프로젝트/자문/강의 문의를 남겨주세요.</p>
      <form className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">이름</label>
          <input id="name" name="name" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/20 bg-transparent" placeholder="홍길동" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">이메일</label>
          <input id="email" name="email" type="email" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/20 bg-transparent" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="type">요청 유형</label>
          <select id="type" name="type" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/20 bg-transparent">
            <option>프로젝트</option>
            <option>자문</option>
            <option>강의</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">메시지</label>
          <textarea id="message" name="message" className="w-full min-h-32 px-3 py-2 rounded-lg border border-black/10 dark:border-white/20 bg-transparent" placeholder="요청 배경, 목표, 일정 등을 알려주세요." />
        </div>
        <button type="button" className="inline-flex h-11 items-center rounded-full bg-black text-white px-5 text-sm font-medium dark:bg-white dark:text-black w-full sm:w-auto justify-center">보내기</button>
      </form>
    </div>
  );
}


