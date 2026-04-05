import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Takeshi's Photo",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-2xl tracking-widest uppercase mb-12 text-[var(--foreground)]">
        About
      </h1>

      <section className="space-y-6 text-[var(--muted)] leading-relaxed">
        <p>
          東京を拠点に、日常の中の静けさと光を探して撮影しています。
          忙しい都市の片隅に潜む、ひとけのない路地や夜明け前の公園——
          そういう場所に漂う時間を切り取ることが好きです。
        </p>
        <p>
          国内外を問わず、旅先では必ずカメラを持ち歩きます。
          計画を立てすぎず、偶然の出会いを大切にするスタイルです。
        </p>
      </section>

      <hr className="my-12 border-[var(--border)]" />

      <section>
        <h2 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-6">
          機材 &amp; スタイル
        </h2>
        <ul className="space-y-3 text-sm text-[var(--foreground)]">
          <li className="flex gap-6">
            <span className="w-24 text-[var(--muted)] shrink-0">カメラ</span>
            <span>Sony α7C II</span>
          </li>
          <li className="flex gap-6">
            <span className="w-24 text-[var(--muted)] shrink-0">レンズ</span>
            <span>35mm f/1.8 / 85mm f/1.4</span>
          </li>
          <li className="flex gap-6">
            <span className="w-24 text-[var(--muted)] shrink-0">現像</span>
            <span>Lightroom Classic</span>
          </li>
          <li className="flex gap-6">
            <span className="w-24 text-[var(--muted)] shrink-0">テーマ</span>
            <span>風景・都市・光と影</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
