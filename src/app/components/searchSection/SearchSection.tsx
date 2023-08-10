import React, {useCallback} from 'react';
import style from './SearchSection.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {searchValue} from "@/redux/filter/selector";
import {setSearchValue} from "@/redux/filter/slice";

import { debounce } from "debounce";

const SearchSection = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState<string>('');


    const updateInputValue =  useCallback(
        debounce((string: string) => {
            dispatch(setSearchValue(string));
        }, 500), []
    )

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        updateInputValue(e.target.value)
    }

    return (
        <div className={style.searchSection}>
            <input
                className={style.searchSectionInput}
                placeholder='введите название или автора'
                onChange={onChangeValue}
                value={inputValue}
            />
            <div className={style.searchSectionSelectWrapper}>
                <select className={style.searchSectionSelectCategory}>
                    <option>category</option>
                </select>
                <select className={style.searchSectionSelectSort}>
                    <option>sort</option>
                </select>
            </div>

        </div>
    );
};

export default SearchSection;
