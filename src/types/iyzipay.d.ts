declare module 'iyzipay' {
    export default class Iyzipay {
        constructor(config: any);
        static LOCALE: { TR: string; EN: string };
        static CURRENCY: { TRY: string; USD: string; EUR: string };
        static PAYMENT_GROUP: { PRODUCT: string; LISTING: string; SUBSCRIPTION: string };
        static BASKET_ITEM_TYPE: { PHYSICAL: string; VIRTUAL: string };
        checkoutFormInitialize: any;
    }
}
