export interface Suggestion {
    id: number;
    title: string;
    description: string;
    category: string;
    date: Date | string;
    status: string;
    nbLikes: number;
}
