type SearchFormProps = {
  id: string;
  compact?: boolean;
  placeholder?: string;
};

export const SearchForm = ({
  id,
  compact = false,
  placeholder = "AI自動化、Claude Code、note導線を検索",
}: SearchFormProps) => (
  <form
    action="/articles"
    className={`group relative w-full ${compact ? "max-w-sm" : "mx-auto max-w-2xl"}`}
    role="search"
  >
    <label htmlFor={id} className="sr-only">
      サイト内の記事を検索
    </label>
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted transition group-focus-within:text-sky ${
        compact ? "h-4 w-4" : ""
      }`}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
      />
    </svg>
    <input
      id={id}
      name="q"
      type="search"
      aria-label="サイト内の記事を検索"
      placeholder={placeholder}
      className={`w-full rounded-lg border border-line bg-surface/90 text-ink shadow-soft outline-none transition placeholder:text-muted focus:border-sky focus:shadow-glow ${
        compact
          ? "py-2 pl-10 pr-4 text-sm"
          : "py-4 pl-12 pr-5 text-base"
      }`}
    />
  </form>
);
