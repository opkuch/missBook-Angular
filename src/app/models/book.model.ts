export class BookModel {
    constructor(
        public _id?: string,
        public title: string = '',
        public description: string = '',
        public author: string = '',
        public imgUrl: string = '',
        public rating: number | null = null,
        public isStarred: boolean = false,
        ) {

    }

}
