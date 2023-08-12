import React, {useEffect} from 'react';
import styles from './MainContent.module.scss';
import Book from "@/app/components/books/Book";
import {countBooks, countFetch, selectBooksData} from "@/redux/books/selector";
import {useSelector} from "react-redux";
import {fetchBooksData} from "@/redux/books/asyncAction";
import Skeleton from "@/assets/skeleton";
import {useAppDispatch} from "@/redux/store";
import {category, searchValue} from "@/redux/filter/selector";
import {Status} from "@/redux/books/types";
import {setSearchValue} from "@/redux/filter/slice";
import {setCountFetch} from "@/redux/books/slice";

const MainContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const books = useSelector(selectBooksData);
    const searchValueData = useSelector(searchValue);
    const categorySelect = useSelector(category)
    const countFindBooks = useSelector(countBooks);
    const countFetchPage = useSelector(countFetch)


    useEffect(() => {

        const params = {
            title: searchValueData,
            category: categorySelect,
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
                    books?.status === Status.LOADING ? (
                        [...Array(3)].map((_, index) => {
                            return <Skeleton key={index}/>
                        })
                    ) : ''
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
