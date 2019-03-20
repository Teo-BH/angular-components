export class Heart {
    constructor(
        public full: boolean,
        public urlFullHeart: string = '../assets/full_heart.png',
        public urlEmptyHeart: string = '../assets/empty_heart.png'
    ) { }

    public showState(): string {
        if (this.full) {
            return this.urlFullHeart
        } else {
            return this.urlEmptyHeart
        }
    }
}