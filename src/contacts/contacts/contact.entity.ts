import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'contacts'})
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;
}
