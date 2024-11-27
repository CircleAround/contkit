import { forwardRef, ComponentProps } from 'react';
import { Card, CardImage, CardContent, CardTitle } from '@/components/Card/Card'
import { BadgeList } from '@/components/Badge/BadgeList'
import { Badge } from '@/components/Badge/Badge'
import { Link } from 'gatsby';

type BlogCardProps = ComponentProps<typeof Card> & {
  blogUrl: string;
  title: string;
  imgsrc: string;
  publishedAtStr: string;
  tags?: {
    label: string;
    link: string;
  }[]
  className?: string;
}

const BlogCard = forwardRef<HTMLDivElement, BlogCardProps>(({ blogUrl, title, imgsrc, publishedAtStr, tags, className, ...others }, ref) => {

  return (
    <Card
      style="none"
      size="none"
      className={className}
      {...others}
      ref={ref}
    >
      <Link to={blogUrl}>
        <CardImage
          imgSrc={imgsrc}
          imgAlt=''
          className="rounded-none"
        />
      </Link>
      <CardContent className='bg-gray-50 p-4'>
        <BadgeList>
          {tags?.map((tag) => (
            <li key={tag.link}>
              <Link to={tag.link}>
                <Badge
                  shape="sm"
                  className="bg-palePurple-600 py-0.5 text-[10px]"
                >
                  {tag.label}
                </Badge>
              </Link>
            </li>
          ))}
        </BadgeList>
        <Link to={blogUrl}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <small className="mt-auto text-zinc-600">{publishedAtStr}</small>
      </CardContent>
    </Card>
  );
});

BlogCard.displayName = 'BlogCard';

export { BlogCard };
