export default class TodoVO {
    id: string;             // id
    title: string;          // title
    date: string;           // 기한
    favorite: boolean;      // 즐겨찾기 여부
    repeat: string;         // 반복
    reply: boolean;         // 댓글 여부

    constructor() {
    }

    getId(): string {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getFavorite(): boolean {
        return this.favorite;
    }

    setFavorite(favorite) {
        this.favorite = favorite;
    }

    getDate(): string {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }

    getRepeat() {
        return this.repeat;
    }

    setRepeat(repeat) {
        this.repeat = repeat;
    }

    getReply() {
        return this.reply;
    }

    setReply(reply) {
        this.reply = reply;
    }
}