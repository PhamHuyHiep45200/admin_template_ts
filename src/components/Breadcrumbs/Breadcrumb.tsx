import { Link, useLocation } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  items: Array<{ name: string; path: string }> | undefined;
}

const Breadcrumb = ({ items, pageName }: BreadcrumbProps) => {
  const location = useLocation();

  if (!items) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>
      <nav aria-label="breadcrumb">
        <ol className="flex items-center gap-2">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link className=" font-medium text-primary" to={item.path}>
                  {item.name} {index < items.length - 1 && '/ '}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
