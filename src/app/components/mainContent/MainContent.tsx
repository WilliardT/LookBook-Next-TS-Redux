import React, {useEffect} from 'react';
import styles from './MainContent.module.scss';
import Book from "@/app/components/books/Book";
import {countBooks, selectBooksData} from "@/redux/books/selector";
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
    const countFindBooks = useSelector(countBooks)

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
                books?.length > 0 ? (
                    <p className={styles.mainText}>найдено: {countFindBooks} </p>
                ) : (
                    <p className={styles.mainText}>чтобы найти книгу введите что-нибудь в строку поиска</p>
                )
            }
            <div className={styles.mainBook}>
                {
                    books?.status === Status.LOADING ? (
                        [...Array(3)].map((_, index) => {
                            return <Skeleton key={index} />
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
                books?.length > displayCount && (
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
