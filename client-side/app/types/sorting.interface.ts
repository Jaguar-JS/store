export enum EnumSorting {
    NEWEST= 'newest',
    OLDEST='oldest',
    'HIGH_TO_LOW_PRICE'='high-to-low',
    'LOW_TO_HIGH_PRICE'='low-to-high'
}

export interface ISortingItem{
    label: 'Prise: high to low' |  'Prise: low to high' | 'Newest' | 'Oldest'
    value: EnumSorting
}
