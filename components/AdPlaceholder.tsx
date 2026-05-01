type AdPlaceholderProps = {
  label?: string;
};

export const AdPlaceholder = ({ label = "広告枠プレースホルダー" }: AdPlaceholderProps) => (
  <aside className="rounded-2xl border border-dashed border-line bg-surface/70 px-4 py-6 text-center shadow-soft">
    <p className="text-xs font-semibold uppercase tracking-normal text-muted">
      {label}
    </p>
    <p className="mt-2 text-sm leading-6 text-muted">
      Google AdSense の広告コードは未設置です。審査後に差し替える想定の表示枠です。
    </p>
  </aside>
);
