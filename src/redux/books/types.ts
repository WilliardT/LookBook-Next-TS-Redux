export type fetchBooksArgs = {
    title: string
}

export type Book = {
    id: string
    volumeInfo: {
        title: string
    }
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface BookSliceState {
    books: Book[]
    status: Status
}