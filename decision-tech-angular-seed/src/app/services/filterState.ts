export declare module FilterState {

    export interface State {
        productTypes: ProductTypes,
        speed: string,
        mobileData: string
    }

    export interface ProductTypes {
        broadband: boolean
        tv?: boolean
        mobile?: boolean
    }
}

