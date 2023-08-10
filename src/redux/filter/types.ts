
/*
https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=yourAPIKey

    orderBy=relevance — возвращает результаты поиска в порядке от наиболее релевантных к наименее релевантным (по умолчанию).
orderBy=newest — возвращает результаты поиска в порядке от самой новой опубликованной даты до самой старой.


https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey

all — не ограничивается типом печати (по умолчанию).
books — возвращает только результаты, являющиеся книгами.
magazines — возвращает результаты, которые являются журналами.
 */

export enum SortoOderBy {
    RELEVANCE = 'relevance',
    NEWEST = 'newest',
}

export enum SortPrintType {
    ALL = 'all',
    BOOKS = 'books',
    MAGAZINES = 'magazines',
}

export interface FilterSliceState {
    searchValue: string
}