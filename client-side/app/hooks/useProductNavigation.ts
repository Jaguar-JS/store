// import {products} from "@/mock-data/product.data";

// TODO: Запрос к БД, вместо mock-data взять либо статичные данные либо в кеше react-query

export const useProductNavigation = (productId: number) => {
    // const nextProductSlug = products.find(product => product.id === productId + 1)?.slug
    // const prevProductSlug = products.find(product => product.id === productId - 1)?.slug
    console.log(productId)
    return {
        // nextProductSlug,
        // prevProductSlug
        // isNextDisabled: productId === products.length,
        // isPrevDisabled: productId === 1
    }
}
