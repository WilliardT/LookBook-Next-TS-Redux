import React, {useEffect} from 'react';
import styles from './MainContent.module.scss';
import Book from "@/app/components/books/Book";
import {selectBooksData} from "@/redux/books/selector";
import { useSelector} from "react-redux";
import {fetchBooksData} from "@/redux/books/asyncAction";
import Skeleton from "@/assets/skeleton";
import {useAppDispatch} from "@/redux/store";
import {category, searchValue} from "@/redux/filter/selector";
import {Status} from "@/redux/books/types";
import {setSearchValue} from "@/redux/filter/slice";

const MainContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const books = useSelector(selectBooksData);
    const searchValueData = useSelector(searchValue);
    const categorySelect = useSelector(category)

    const [displayCount, setDisplayCount] = React.useState(30);

    useEffect(() => {

        dispatch(fetchBooksData({
            title: searchValueData,
            category: categorySelect,
        }))

        if (!searchValueData) {
            dispatch(setSearchValue('*'))
        }

    }, [searchValueData, categorySelect])

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
