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
    tableConfig: QueryDatabaseItemsConfig;
    queryProps: QueryDatabaseItemsProps;
};
declare const _default: ({ tableConfig, queryProps }: UpdateQueryProps) => void;

export { QryProps, QueryDatabaseItemsConfig, QueryDatabaseItemsProps, _default as updateQuery };
