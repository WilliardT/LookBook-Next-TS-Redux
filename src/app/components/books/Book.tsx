import React from 'react';
import styles from './Book.module.scss'
import Image from "next/image";
import {Book} from "@/redux/books/types";

const Book: React.FC<Book> = ({imageLink, title, authors}) => {

    return (
        <div className={styles.book}>
            {imageLink ? (
                <Image
                    className={styles.bookImage}
                    src={imageLink}
                    width={110}
                    height={170}
                    alt={title}
                />

            ) : (
                <div className={styles.bookNotImage}>
                    <p className={styles.bookNotImageText}>нет обложки</p>
                </div>
            )}
            <h4 className={styles.bookTitle}>{title}</h4>
            <p className={styles.bookAuthor}>{authors}</p>
        </div>
    );
};

export default Book;
