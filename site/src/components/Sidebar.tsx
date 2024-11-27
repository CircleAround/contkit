import { forwardRef, ComponentProps } from 'react';
import { BadgeList } from '@/components/Badge/BadgeList';
import { Badge } from '@/components/Badge//Badge';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Link } from 'gatsby';

type SidebarProps = ComponentProps<'aside'>

// タグ一覧確認用のための仮
const tags =[{ label: 'データベース', link: '/tags' }, { label: 'セッション', link: '/tags' }, { label: '開発者ツール', link: '/tags' }, { label: '実演', link: '/tags' }];

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ className, ...others }, ref) => {

    return (
      <aside
        className={className}
        {...others}
        ref={ref}
      >
        <SectionTitle
          className="text-3xl font-medium leading-relaxed text-blue-950	 lg:text-3xl lg:leading-relaxed"
        >
          タグ一覧
        </SectionTitle>
        {/* タグ一覧 ※後日実装のため仮置き */}
        <ul className="mt-4">
          <BadgeList className="md:flex-col md:gap-y-2.5">
            {tags?.map((tag) => (
              <li
                key={tag.label}
                className="md:border-b md:border-palePurple-600 md:pb-1"
              >
                <Link to={tag.link}>
                  <Badge
                    variant="primary"
                    shape="sm"
                    className="bg-palePurple-600 py-0.5 text-[10px] md:bg-transparent md:px-0 md:text-base md:font-bold md:text-palePurple-600"
                  >
                    {tag.label}
                  </Badge>
                </Link>
              </li>
            ))}
          </BadgeList>
        </ul>
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export { Sidebar };
