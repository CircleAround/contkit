import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import { twMerge } from 'tailwind-merge';

const TermsOfUse: React.FC<PageProps> = () => {
  const headingBaseCn = 'relative pb-4 text-center font-bold text-2xl border-b'
  const headingStyleCn = 'text-blue-600 border-blue-600 bg-gradient-to-t from-blue-100/50'
  const headingBeforeCn = 'before:absolute before:left-0 before:-bottom-1 before:h-2 before:w-4 before:bg-blue-700'
  const headingAfterCn = 'after:absolute after:right-0 after:-bottom-1 after:h-2 after:w-4 after:bg-blue-700'
  const headingCn = twMerge(headingBaseCn, headingStyleCn, headingBeforeCn, headingAfterCn)

  const termsData = {
    articles: [
      {
        heading: "1. 免責",
        content: "当社は、本サービスにより提供される記事、図表、動画、写真およびソースコードやソフトウェア等（以下、「コンテンツ」） が適切であること、ユーザーの需要に適合すること、本サービス自体の完全性、その他ユーザーへの本サービスの提供については最善を尽くしますが、 ユーザーに対しこれらについて何ら保証するものではありません。当社は、ユーザーが本サービスを利用したことにより被った損害、 その他本サービスに関連して被った損害について責任を免れるものとします。 本サービスで提供された内容をユーザーが自身で試行した事や、それを第三者へ提供した事などによって起こる損害についても含めて免れるものとします。",
      },
      {
        heading: "2. 禁止事項",
        content: "当社は、本サービスにおいて、ユーザーが次の事項に該当する、もしくはその恐れのある行為を行うことを禁止しています。",
        list: [
          "当社を装う、または詐称する行為",
          "当社のサーバまたは本サービスに対する不正アクセス等、本サービスの運営に支障を生じさせる行為",
          "本サービスに関するプログラム等の改変、リバースエンジニアリング、解析またはユーティリティの作成・頒布等の行為",
          "本サービスを利用した、営業活動または営利もしくはその準備を目的とした行為",
          "当社または他のユーザーその他第三者の財産、プライバシーまたは肖像権を侵害する行為",
          "当社または他のユーザーその他第三者の著作権その他の知的財産権を侵害する行為",
          "犯罪行為を目的にしたり、犯罪行為を誘発する行為",
          "他人の名誉を毀損したり、権利を侵害する行為",
          "反社会的勢力に直接・間接に利益を提供する行為",
          "その他、法令に違反し、公序良俗に反する行為",
          "本サービスの運営を妨げるような行為",
          "その他当社が不適切と判断する一切の行為",
        ],
      },
      {
        heading: "3. 著作権等",
        content: "コンテンツに関する著作権および商標権その他知的財産権は、当社または当該情報の提供元に帰属します。 また、本サービスに関する著作権および商標権その他知的財産権についても、当社に帰属します。",
      },
      {
        heading: "4. 提供範囲",
        content: "本サービスは日本語を解する方に向けた日本国内向けのサービスであることをここに明記します。 その他海外の法令に照らし合わせた利用を想定していませんので、該当しない方は利用を中断してください。",
      },
      {
        heading: "5. 規約違反",
        content: "当社は、ユーザーが本規約等に違反した場合には、当該ユーザーによる本サービスの利用を停止および禁止することができるものとします。 また、当該ユーザーによる違反行為により当社が損害を被った時は、当社は、当該ユーザーに対し、当該違反行為によって当社が被った損害額を請求することができるものとします。",
      },
      {
        heading: "6. 本サービス内のリンク等について",
        content: "本サービスにおいて他のWebサイトやリソースへのリンクを提供している場合があります。 当該サイトやリソースについては、それぞれの提供者の課す権利や義務に従って適切に利用してください。 また、当社は当該サイトやリソースの正確性、信憑性などを何ら保証するものではありません。",
      },
      {
        heading: "7. 転載について",
        content: "ユーザーは、本サービスにより提供されるコンテンツの転載を希望する場合は、当社の許可を受ける必要があります。 本サービスにより提供される記事や写真・図表等の無断転載は禁止します。 ただし引用については法令の認める方法に基づきその範囲内において行う事が許可されます。",
      },
      {
        heading: "8. 規約の変更",
        content: "当社は、当社が必要と判断したときには、ユーザーの事前の承諾を得ることなく、本規約等を変更できるものとします。 当社は、本規約等変更後に、ユーザーが本サービスを利用したことにより、ユーザーが変更後の本規約等の内容を承諾したものとみなします。 ユーザーは変更後の本規約の適用について異議ある場合は、本サービスを利用しないこととします。",
      },
      {
        heading: "9. サービス内容の変更や停止",
        content: "当社はユーザーに事前に通知することなく本サービスの内容を変更し、また提供を停止または中止することができるものとします。",
      },
      {
        heading: "10. プライバシーポリシー",
        content: "当社が本サービスを通じて取得したユーザーの個人情報およびサービスの利用状況に関する情報については、 当社が規定するプライバシーポリシーおよび個人情報保護法等法令の規定に準拠して取り扱うものとします。",
      },
      {
        heading: "11. 法令等",
        content: "本規約等は日本国の法令に準拠し、解釈されるものとし、本サービスおよび本規約等に関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
      },
    ],
  }

  const revisionDate = "2020年10月10日"

  return (
    <>
      <Layout>
        <div className="py-8">
          <div className="px-8">
            <section className="[&>article]:mt-11 [&_p]:mt-4">
              <SectionTitle className="text-3xl font-bold leading-relaxed text-blue-600 lg:text-3xl">利用規約</SectionTitle>
              <p>Tech lib（以下、「本サービス」といいます）はサークルアラウンド株式会社（以下、「当社」といいます）が提供するサービスです。 本規約は、当社がWebサイト「Tech lib（ techlib.circlearound.co.jp ）」において提供するサービスを利用される方すべて（以下、「ユーザー」）について、本サービスの利用を開始した時点で適用されます。</p>
              {termsData.articles.map((article) => (
                <article key={article.heading}>
                  <h3 className={headingCn}>{article.heading}</h3>
                  <p>{article.content}</p>
                  {article.list && <List items={article.list} />}
                </article>
              ))}
              <div className="flex items-center space-x-4">
                <p>改訂日</p>
                <p>{revisionDate}</p>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

const List = ({items} : {items: string[]}) => {
  return (
    <ul className="mt-4 flex list-disc flex-col space-y-2 rounded-md bg-blue-100 py-4 pl-9 pr-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default TermsOfUse

export const Head: HeadFC = () => <title>Terms Of Use Page</title>
