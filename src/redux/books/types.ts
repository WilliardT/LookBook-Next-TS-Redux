export type fetchBooksArgs = {
    title: string
    category: string
    countFetch: string
    sortOrder: string
}

export type Book = {

    id: string
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: {
            thumbnail: string
        }
    }

}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface BookSliceState {
    books: {
        items: Book[],
    },
    status: Status,
    countFetch: number,
}