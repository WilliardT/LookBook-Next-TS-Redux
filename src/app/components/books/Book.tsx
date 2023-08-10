import React from 'react';
import styles from './Book.module.scss'
import Image from "next/image";

const Book = (book)=> {

    return (
        <div className={styles.book}>
            {book.volumeInfo.imageLinks?.smallThumbnail ? (
                <Image
                    className={styles.bookImage}
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    width={140}
                    height={205}
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
