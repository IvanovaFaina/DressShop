/**
 * Модель данных товара магазина.
 */
import {Description} from "./Descriptions";

export enum ItemKind {
    wedding = "Свадебные платья",
    cocktail = "Коктейльные платья"
}

export class ShopItem {
    /**
     * Идентификатор товара.
     */
    public id: number;

    /**
     * Название товара.
     */
    public title: string;

    /**
     * Цена товара.
     */
    public price: number;

    /**
     * Адрес изображения.
     */
    public imageSrc: string;

    /**
     * Короткое описание.
     */
    public brief: string;

    /**
     * Вид.
     */
    public kind: ItemKind;

    /**
     * Полное описание.
     */
    public description: Description[];

    constructor(
        id: number,
        title: string,
        price: number,
        imageSrc: string,
        brief: string,
        description: Description[],
        kind: ItemKind
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageSrc = imageSrc;
        this.brief = brief;
        this.description = description;
        this.kind = kind;
    }
}
