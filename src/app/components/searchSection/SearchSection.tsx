import React, {useCallback} from 'react';
import style from './SearchSection.module.scss';
import {useDispatch} from "react-redux";
import {setSearchValue} from "@/redux/filter/slice";
import { debounce } from "debounce";
import Image from "next/image";
import clearIcon from "@/assets/clearIcon.svg";
import {setDataBooks} from "@/redux/books/slice";


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

    const onHandleClearInput = () => {
        setInputValue('');
        dispatch(setSearchValue(''));
        dispatch(setDataBooks([]));
    }



    return (
        <div className={style.searchSection}>
            <div className={style.searchSectionInputWrapper}>
                <input
                    className={style.searchSectionInput}
                    placeholder='введите название или автора'
                    onChange={onChangeValue}
                    value={inputValue}
                />
                {inputValue && (
                    <Image
                        className={style.searchSectionInputClean}
                        src={clearIcon}
                        alt="очистить"
                        onClick={onHandleClearInput}
                    />
                )}
            </div>
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
