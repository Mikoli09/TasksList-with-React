import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameters = (searchQueryParamName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        }
        else {
            searchParams.set(key, value)
        };
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    return replaceQueryParameter;
};

