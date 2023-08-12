import React, {useEffect} from 'react';
import styles from './MainContent.module.scss';
import Book from "@/app/components/books/Book";
import { countFetch, loadingStatus, selectBooksData} from "@/redux/books/selector";
import {useSelector} from "react-redux";
import {fetchBooksData} from "@/redux/books/asyncAction";
import Skeleton from "@/assets/skeleton";
import {useAppDispatch} from "@/redux/store";
import {category, searchValue} from "@/redux/filter/selector";
import {Status} from "@/redux/books/types";
import {setSearchValue} from "@/redux/filter/slice";
import {setCountFetch} from "@/redux/books/slice";
import {SortCategory} from "@/redux/filter/types";

const MainContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const books = useSelector(selectBooksData);
    const searchValueData = useSelector(searchValue);
    const categorySelect = useSelector(category)
    const countFindBooks = useSelector((state: any) => state.books.countBooks);
    const countFetchPage = useSelector(countFetch)
    const loading = useSelector(loadingStatus)

    //  //?subject:medical  --- к категории

    useEffect(() => {
        let selectCategoryStriing = '';

        if (categorySelect === SortCategory.ALL) {
            selectCategoryStriing = ''
        } else {
            selectCategoryStriing = `?subject:${categorySelect}`
        }

        const params = {
            title: searchValueData,
            category: selectCategoryStriing,
        }

        dispatch(fetchBooksData({
            ...params,
            countFetch: String(countFetchPage),
        }))

        if (!searchValueData) {
            dispatch(setSearchValue('*'))
        }

    }, [searchValueData, categorySelect, countFetchPage])


    useEffect(() => {
        dispatch(setCountFetch(0));
    },[categorySelect, searchValueData])


    const handleClickShowMore = () => {
        dispatch(setCountFetch(countFetchPage + 30));
    }


    return (
        <section className={styles.main}>
            {
                books?.length > 0 ? (
                    <p className={styles.mainText}>найдено: {countFindBooks} </p>
                ) : ''
            }
            <div className={styles.mainBook}>
                {
                    loading === Status.LOADING && (
                        [...Array(4)].map((_, index) => {
                            return (
                                <div
                                    className={styles.mainBookSkeleton}
                                    key={index}>
                                    <Skeleton />
                                </div>
                            )
                        })
                    )
                }
                {
                    books?.length > 0 ? (
                        books.map((book: any) => {
                            return <Book key={book.id} {...book}/>
                        })
                    ) : ''
                }
            </div>
            {
                books?.length >= 30 && (
                    <button
                        onClick={handleClickShowMore}
                    >
                        Показать больше
                    </button>
                )
            }
        </section>
    );
};

export default MainContent;
