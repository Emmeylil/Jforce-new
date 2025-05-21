export interface PickupStation {
    name: string;
    week: string;
    weekend: string;
    number: string;
    address: string;
    state: string;
    Payment: string;
    landmark: string;
    map: string;
    latitude: string;
    longitude: string;
    initiative: string;
}

export interface iRemoteData { pus: PickupStation[], priceList: any[], zones: any[] }

export interface PriceList {
    departure: string;
    arrival: string;
    small: string;
    medium: string;
    deliveryTime: string;
}

export interface Zone {
    zone: string;
    cities: string;
}