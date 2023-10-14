import { parseSearchParams } from './util';
import { QueryDatabaseItemsConfig, QueryDatabaseItemsProps } from './types';
import { usePathname, useRouter } from 'next/navigation';

type UpdateQueryProps = {
  tableConfig: QueryDatabaseItemsConfig;
  queryProps: QueryDatabaseItemsProps;
};
export default ({ tableConfig, queryProps }: UpdateQueryProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const params: [string, string][] = [];

  params.push(['page', `${queryProps.page + 1}`]);

  if (queryProps.perPage !== tableConfig.perPage) params.push(['perPage', queryProps.perPage.toString()]);
  if (queryProps.search.length) params.push(['search', queryProps.search]);

  const filterKeys = Object.keys(queryProps.filters);
  for (const filter of filterKeys) {
    params.push(
      ...parseSearchParams(queryProps.filters[filter]).map((fData): [string, string] => [`filter-${filter}`, fData]),
    );
  }
  router.push(`${pathname}?${new URLSearchParams(params)}`);
};
