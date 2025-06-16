import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameters = (searchQueryParamName: string): string | null => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    interface replaceQueryParameterArg {
        key: string,
        value?: string,
    }

    const replaceQueryParameter = ({ key, value }: replaceQueryParameterArg) => {
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

