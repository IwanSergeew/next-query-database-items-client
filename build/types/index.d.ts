import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface QueryDatabaseItemsConfig {
    enableSearch: boolean;
    perPage: number;
    perPageOptions: number[];
}
interface QueryDatabaseItemsProps {
    page: number;
    perPage: number;
    search: string;
    filters: Record<string, string[]>;
}
interface QryProps {
    where: string[];
    items: any[];
}

type UpdateQueryProps = {
    router: AppRouterInstance;
    pathname: string;
    tableConfig: QueryDatabaseItemsConfig;
    queryProps: QueryDatabaseItemsProps;
};
declare const _default: ({ router, pathname, tableConfig, queryProps }: UpdateQueryProps) => void;

export { QryProps, QueryDatabaseItemsConfig, QueryDatabaseItemsProps, _default as updateQuery };
