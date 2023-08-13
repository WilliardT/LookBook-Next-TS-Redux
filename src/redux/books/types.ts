export type fetchBooksArgs = {
    title: string
    category: string
    countFetch: string
    sortOrder: string
}

export type Book = {
    id: string
    title: string,
    authors: string[],
    imageLink: any,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface BookSliceState {
    items: any,
    status: Status,
    countFetch: number,
}