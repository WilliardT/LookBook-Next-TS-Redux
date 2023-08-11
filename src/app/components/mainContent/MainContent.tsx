import React, {useEffect} from 'react';
import styles from './MainContent.module.scss';
import Book from "@/app/components/books/Book";
import {selectBooksData} from "@/redux/books/selector";
import { useSelector} from "react-redux";
import {fetchBooksData} from "@/redux/books/asyncAction";
import Skeleton from "@/assets/skeleton";
import {useAppDispatch} from "@/redux/store";
import {searchValue} from "@/redux/filter/selector";
import {Status} from "@/redux/books/types";
import {setDataBooks} from "@/redux/books/slice";

const MainContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const books = useSelector(selectBooksData);
    const searchValueData = useSelector(searchValue);

    const [displayCount, setDisplayCount] = React.useState(30);

    useEffect(() => {
        const params = searchValueData

        if (params.length > 0) {
            dispatch(fetchBooksData({
                title: params,
            }))
        }

        if (searchValueData.length === 0) {
            dispatch(setDataBooks([]));
        }

    }, [searchValueData])

    const handleClickShowMore = () => {
        setDisplayCount(displayCount + 30);
    }


    return (
        <section className={styles.main}>
            {
                books.books?.length > 0 ? (
                    <p className={styles.mainText}>найдено: {books.books.length}</p>
                ) : (
                    <p className={styles.mainText}>чтобы найти книгу введите что-нибудь в строку поиска</p>
                )
            }
            <div className={styles.mainBook}>
                {
                    books.status === Status.LOADING ? (
                        [...Array(3)].map((_, index) => {
                            return <Skeleton key={index} />
                        })
                    ) : ''
                }
                {
                    books.books?.length > 0 ? (
                        books.books.slice(0, displayCount).map((book: any) => {
                            return <Book key={book.id} {...book}/>
                        })
                    ) : ''
                }
            </div>
            {
                books.books?.length > displayCount && (
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
