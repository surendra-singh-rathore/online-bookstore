import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name: "books"})
export class BookEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    book_title: string;

    @Column()
    book_author: string;

    @Column()
    isbn: number;

    @Column()
    price: number;

    @Column()
    stock_quantity: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created!: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated!: Date;
}