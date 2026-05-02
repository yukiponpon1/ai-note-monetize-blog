type AdPlaceholderProps = {
  label?: string;
};

export const AdPlaceholder = ({ label = "広告枠プレースホルダー" }: AdPlaceholderProps) => (
  <aside className="rounded-lg border border-dashed border-line bg-paper px-4 py-6 text-center">
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
      {label}
    </p>
    <p className="mt-2 text-sm leading-6 text-muted">
      Google AdSense の広告コードは未設置です。審査後に差し替える想定の表示枠です。
    </p>
  </aside>
);
