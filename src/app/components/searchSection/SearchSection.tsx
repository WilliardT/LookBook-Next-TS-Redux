import React, {useCallback} from 'react';
import style from './SearchSection.module.scss';
import {useDispatch} from "react-redux";
import {setCategory, setSearchValue, setSortOrder} from "@/redux/filter/slice";
import { debounce } from "debounce";
import Image from "next/image";
import clearIcon from "@/assets/clearIcon.svg";
import {setDataBooks} from "@/redux/books/slice";
import {Sort0rOderBy, SortCategory} from "@/redux/filter/types";

type SearchSectionProps = {}


const SearchSection: React.FC<SearchSectionProps> = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState<string>('');
    const ref = React.useRef<HTMLInputElement>(null);


    const updateInputValue =  useCallback(
        debounce((string: string) => {
            dispatch(setSearchValue(string));
        }, 500), [dispatch, debounce]
    )

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        updateInputValue(e.target.value)
    }

    const onHandleClearInput = () => {
        setInputValue('');
        dispatch(setSearchValue('*'));
        dispatch(setDataBooks([]));
        ref.current?.focus();
    }


    const categoriesOptions: {name: string, value: SortCategory}[] = [
        {name: 'все категории', value: SortCategory.ALL},
        {name: 'искусство', value: SortCategory.ARTS},
        {name: 'биография', value: SortCategory.BIOGRAPHY},
        {name: 'компьютеры', value: SortCategory.COMPUTERS},
        {name: 'история', value: SortCategory.HISTORY},
        {name: 'медицина', value: SortCategory.MEDICAL},
        {name: 'поэзия', value: SortCategory.POETRY},
    ]

    const onHandleChangeCategory = (option: SortCategory) => {
        dispatch(setCategory(option));
    }

    const selectOrder: {name: string, value: Sort0rOderBy}[] = [
        {name: 'релевантные', value: Sort0rOderBy.RELEVANCE},
        {name: 'сначала новые', value: Sort0rOderBy.NEWEST},
    ]

    const onHandleChangeSortOrder = (option: Sort0rOderBy) => {
        dispatch(setSortOrder(option));
    }


    return (
        <div className={style.searchSection}>
            <div className={style.searchSectionInputWrapper}>
                <input
                    className={style.searchSectionInput}
                    placeholder='введите название или автора'
                    onChange={onChangeValue}
                    value={inputValue}
                    ref={ref}
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
                <select
                    className={style.searchSectionSelectCategory}
                    onChange={(e) => onHandleChangeCategory(e.target.value as SortCategory)}
                >
                    {
                        categoriesOptions.map((option, index) => {
                            return (
                                <option
                                    className={style.searchSectionSelectOption}
                                    key={index}
                                    value={option.value}
                                >
                                    {option.name}
                                </option>
                            )
                        })
                    }
                </select>
                <select
                    className={style.searchSectionSelectSort}
                    onChange={(e) => onHandleChangeSortOrder(e.target.value as Sort0rOderBy)}
                >
                    {
                        selectOrder.map((option, index) => {
                            return (
                                <option
                                    className={style.searchSectionSelectOption}
                                    key={index}
                                    value={option.value}
                                >
                                    {option.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>

        </div>
    );
};

export default SearchSection;
