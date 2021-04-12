import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product [] = [

            {
                name: 'Mac Air 2020',
                description: 'Core I3 -8gb Ram -256gb SSD -Sellada',
                img: 'assets/img/MAC.png',
                price: '4.394.009'
            },

        {
            name: 'Portatil HP 255 67',
            description: 'AMD Athlon  -4gb Ram -500gb  -Windows 10',
            img: 'assets/img/HP.png',
            price: '1.399.900'
        },

        {
            name: 'Lenovo Ideapp L340',
            description: 'Core I5 -8gb Ram -512gb SSD -Sellada',
            img: 'assets/img/Lenovo.png',
            price: '3.299.999'
        },

        {
            name: 'Portatil Asus X489ma',
            description: 'Core I3 -8gb Ram -256gb SSD -Sellada',
            img: 'assets/img/asus.png',
            price: '1.219.900'
        },

    ]

    constructor(){
        console.log('service runing');
    }

    // tslint:disable-next-line: typedef
    getProdcuts(){
        return this.products;
    }

}

// tslint:disable-next-line: no-empty-interface
export interface Product {
    name: string;
    description: string;
    img: string;
    price: string;
}