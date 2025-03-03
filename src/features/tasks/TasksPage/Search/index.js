import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { Input } from "../../common/Input";
import { InputContainer } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);


    const onInputChange = (event) => {
        const searchParams = new URLSearchParams(location.search);
        if (event.target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, event.target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <InputContainer>
            <Input
                id={nanoid()}
                placeholder="Wyszukaj"
                value={query || ""}
                onChange={onInputChange}
            />
        </InputContainer>
    )
};

export default Search;