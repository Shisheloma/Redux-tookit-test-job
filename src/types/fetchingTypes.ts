export type FetchStateType<T> = {
    data: T;
    isLoading: boolean;
    error: string;
}