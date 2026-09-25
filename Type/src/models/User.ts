export class User {
    private id: number;
    public name: string;
    public email: string;
    private password: string;
    public phone: string;
    public age: number;

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }
}