import { Input } from "../../common/Input";
import { InputContainer } from "../../common/Input";
import { nanoid } from "@reduxjs/toolkit";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <InputContainer>
            <Input
                id={nanoid()}
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </InputContainer>
    )
};

export default Search;