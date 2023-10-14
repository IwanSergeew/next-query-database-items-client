const parseSearchParams = (param) => {
    if (!param?.length)
        return [];
    return Array.isArray(param) ? param : [param];
};

var updateQuery = ({ router, pathname, tableConfig, queryProps }) => {
    const params = [];
    params.push(['page', `${queryProps.page + 1}`]);
    if (queryProps.perPage !== tableConfig.perPage)
        params.push(['perPage', queryProps.perPage.toString()]);
    if (queryProps.search.length)
        params.push(['search', queryProps.search]);
    const filterKeys = Object.keys(queryProps.filters);
    for (const filter of filterKeys) {
        params.push(...parseSearchParams(queryProps.filters[filter]).map((fData) => [`filter-${filter}`, fData]));
    }
    router.push(`${pathname}?${new URLSearchParams(params)}`);
};

export { updateQuery };
