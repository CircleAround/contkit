import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import { twMerge } from 'tailwind-merge';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
import { Seo } from "@/components/Seo";

const AboutPage: React.FC<PageProps> = () => {
  const headingBaseCn = 'relative pb-4 text-center font-bold text-2xl border-b'
  const headingStyleCn = 'text-blue-600 border-blue-600 bg-gradient-to-t from-blue-100/50'
  const headingBeforeCn = 'before:absolute before:left-0 before:-bottom-1 before:h-2 before:w-4 before:bg-blue-700'
  const headingAfterCn = 'after:absolute after:right-0 after:-bottom-1 after:h-2 after:w-4 after:bg-blue-700'
  const headingCn = twMerge(headingBaseCn, headingStyleCn, headingBeforeCn, headingAfterCn)

  return (
    <>
      <Layout>
        <div className="py-8">
          <div className="px-8">
            <Breadcrumb className="[&_a]:text-blue-600 [&_a]:underline"/>

            <section className="mt-4 [&_p]:mt-4">
              <SectionTitle className="text-3xl font-bold leading-relaxed text-blue-600 lg:text-3xl">Tech libについて</SectionTitle>
              <p>Tech libは「WEB開発の現場で求められる基本的な知識を集約する場所を学習者の方に向けて作りたい」という想いからスタートしたWEBサイトです。</p>
              <p>主に以下のような2つの課題を解消すべく日夜努力しています。</p>
              <article className="mt-11">
                <h3 className={headingCn}>情報にたどり着くのが難しい</h3>
                <p>「WEBの仕組み」「データベース」「オブジェクト指向」「デザインパターン」など、 WEB開発を行う上で求められる知識は数多くありますが、それらは書籍やWEB等に点在している為に自分で適切な情報源を吟味してたどり着く必要があります。 これを自力でやるのは、ある程度の見通しが立つまではかなり困難なことではないでしょうか。</p>
                <p>また、昨今は誰でも気軽に技術的な情報の発信を行えるようになりました。<span className="inline-block">それ自体は歓迎すべきカルチャーであると感じる反面、理解度や解釈の違いが様々な為に 中には学習者に誤った知識を植えつけてしまう情報も少なくないと感じています。</span></p>
                <p>以上のような背景により「求めている妥当性のある情報」に行き着くハードルが年々高まっていると言えるでしょう。</p>
                <p>Tech libは学習者が「知らない言葉に出会ったらここを見ればまず足掛かりになる!」と思ってもらえるような場所になりたいと考えています。</p>
              </article>
              <article className="mt-11">
                <h3 className={headingCn}>情報を理解するのが難しい</h3>
                <p>ある程度それらしいWEBページへたどり着いても、文章から具体的な意味を獲得できずに 苦労することはないでしょうか。また、表現が難し過ぎて読むのを断念したことはないでしょうか。 システム開発やコンピュータに関係する言葉は深い背景知識を必要とするものであったり プログラミングのコードにしないと難しかったりするものが数多くあります （例えば Wikipedia は大変有用なWEBサイトではありますが、言葉の説明だけで理解するのがかなり困難だと感じることがあると思います）。</p>
                <p>そのような課題意識から、Tech libでは以下のようなことを行っています。</p>
                <ul className="mt-4 flex list-disc flex-col space-y-2 rounded-md bg-blue-100 py-4 pl-9 pr-2">
                  <li>「概念」は動画で伝える</li>
                  <li>実際にソースコードやブラウザを操作するところを通して「具体的にどういうものか」を伝える</li>
                  <li>利用した<a href="https://github.com/CircleAround/pgonline" target="_blank" rel="noreferrer" className="text-blue-600 underline">ソースコードなどは動く形で公開</a>しておき、試せるようにしておく</li>
                </ul>
                <p>以上のような工夫に加えて、<a href="https://circlearound.co.jp" target="_blank" rel="noreferrer" className="text-blue-600 underline">運営者のサークルアラウンド社</a>ではプログラマーのトレーニング事業やシステムの受託開発を行っている経験から 「よくある誤解」を記したり「実際の開発でよく利用されるもの」をピックアップするなど、 無機質な言葉の説明だけに終わらないように努めています。</p>
                <p>ぜひ辿り着いた情報から実際に手を動かして試して、本当の意味での理解を深めてください。</p>
                <p>Tech libが多くの学習者の方の一助になれば幸いです。</p>
              </article>
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default AboutPage

export const Head: HeadFC = () => (
  <Seo
    title="Tech libについて | Tech lib 〜 WEBプログラミング基礎の動画解説をここに集約 〜"
  />
);