import { User } from "./User";

export class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(id: number, title: string, content: string, userId: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    preview(): string {
        return this.content.length > 30
            ? this.content.substring(0, 30) + "..."
            : this.content;
    }
}