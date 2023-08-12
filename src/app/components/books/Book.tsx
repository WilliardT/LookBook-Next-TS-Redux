import React from 'react';
import styles from './Book.module.scss'
import Image from "next/image";
import {Book} from "@/redux/books/types";

const Book: React.FC<Book> = (book) => {

    return (
        <div className={styles.book}>
            {book.volumeInfo.imageLinks?.thumbnail ? (
                <Image
                    className={styles.bookImage}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    width={110}
                    height={170}
                    alt='namepic'
                />

            ) : (
                <div className={styles.bookNotImage}>
                    <p className={styles.bookNotImageText}>нет обложки</p>
                </div>
            )}
            <h4 className={styles.bookTitle}>{book.volumeInfo.title}</h4>
            <p className={styles.bookAuthor}>{book.volumeInfo.authors}</p>
        </div>
    );
};

export default Book;
