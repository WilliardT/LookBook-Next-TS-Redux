export type fetchBooksArgs = {
    title: string
    category: string
    countFetch: string
}

export type Book = {
    id: string
    volumeInfo: {
        title: string,
        authors: string,
        imageLinks: {
            thumbnail: string
        }
    },

}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface BookSliceState {
    books: {
        items: Book[],
        totalItems: number
    },
    status: Status,
    countFetch: number,
}