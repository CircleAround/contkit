import type { HeadFC, PageProps } from "gatsby"
import {
  SectionTitle,
} from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import { twMerge } from 'tailwind-merge';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'

const AboutPage: React.FC<PageProps> = () => {
  const headingBaseCn = 'relative py-4 text-blue-600 text-center border-b border-blue-600 font-bold text-2xl'
  const headingBeforeCn = 'before:absolute before:left-0 before:-bottom-1 before:h-2 before:w-4 before:bg-blue-700'
  const headingAfterCn = 'after:absolute after:right-0 after:-bottom-1 after:h-2 after:w-4 after:bg-blue-700'
  const headingCn = twMerge(headingBaseCn, headingBeforeCn, headingAfterCn)

  return (
    <>
      <Layout>
        <div className="py-8 pt-20">
          <div className="">
            <Breadcrumb/>

            <SectionTitle
              className="text-3xl font-medium leading-relaxed text-blue-600"
            >
              Tech libについて
            </SectionTitle>
            <p className="">Tech libは「WEB開発の現場で求められる基本的な知識を集約する場所を学習者の方に向けて作りたい」という想いからスタートしたWEBサイトです。</p>
            <p className="">主に以下のような2つの課題を解消すべく日夜努力しています。</p>
            <h3 className={headingCn}>情報にたどり着くのが難しい</h3>
            <p className="">「WEBの仕組み」「データベース」「オブジェクト指向」「デザインパターン」など、 WEB開発を行う上で求められる知識は数多くありますが、それらは書籍やWEB等に点在している為に自分で適切な情報源を吟味してたどり着く必要があります。 これを自力でやるのは、ある程度の見通しが立つまではかなり困難なことではないでしょうか。</p>
            <p className="">また、昨今は誰でも気軽に技術的な情報の発信を行えるようになりました。<span className="inline-block">それ自体は歓迎すべきカルチャーであると感じる反面、理解度や解釈の違いが様々な為に 中には学習者に誤った知識を植えつけてしまう情報も少なくないと感じています。</span></p>
            <p className="">以上のような背景により「求めている妥当性のある情報」に行き着くハードルが年々高まっていると言えるでしょう。</p>
            <p className="">Tech libは学習者が「知らない言葉に出会ったらここを見ればまず足掛かりになる!」と思ってもらえるような場所になりたいと考えています。</p>
            <h3 className={headingCn}>情報にたどり着くのが難しい</h3>
            <p className="">ある程度それらしいWEBページへたどり着いても、文章から具体的な意味を獲得できずに 苦労することはないでしょうか。また、表現が難し過ぎて読むのを断念したことはないでしょうか。 システム開発やコンピュータに関係する言葉は深い背景知識を必要とするものであったり プログラミングのコードにしないと難しかったりするものが数多くあります （例えば Wikipedia は大変有用なWEBサイトではありますが、言葉の説明だけで理解するのがかなり困難だと感じることがあると思います）。</p>
            <p className="">そのような課題意識から、Tech libでは以下のようなことを行っています。</p>
            <ul className="flex flex-col space-y-2">
              <li className="">「概念」は動画で伝える</li>
              <li className="">実際にソースコードやブラウザを操作するところを通して「具体的にどういうものか」を伝える</li>
              <li className="">利用したソースコードなどは動く形で公開しておき、試せるようにしておく</li>
            </ul>
            <p className="">以上のような工夫に加えて、<a href="https://circlearound.co.jp" target="_blank" rel="noreferrer" className="underline">運営者のサークルアラウンド社</a>ではプログラマーのトレーニング事業やシステムの受託開発を行っている経験から 「よくある誤解」を記したり「実際の開発でよく利用されるもの」をピックアップするなど、 無機質な言葉の説明だけに終わらないように努めています。</p>
            <p className="">ぜひ辿り着いた情報から実際に手を動かして試して、本当の意味での理解を深めてください。</p>
            <p className="">Tech libが多くの学習者の方の一助になれば幸いです。</p>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
