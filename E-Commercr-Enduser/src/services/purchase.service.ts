import { Purchase, PurchaseListStatus } from "../types/purchase.type.ts";
import { SuccessResponseApi } from "../types/util.type.ts";
import httpRequest from "../utils/http";
import { purchasesStatus } from '../constants/purchase.ts';

const URL = '/api/v1/purchases';

const purchaseService = {
    addToCart: (body: { product_id: string; buy_count: number }) => {
        return httpRequest.post<SuccessResponseApi<Purchase>>(
            `${URL}/add-to-cart`,
            body,
        );
    },
    getPurchases: () => {
        return httpRequest.get<SuccessResponseApi<Purchase[]>>(`${URL}/${purchasesStatus.inCart}`);
    },
    buyProducts: (body: { product_id: string; buy_count: number }[]) => {
        return httpRequest.post<SuccessResponseApi<Purchase[]>>(
            `${URL}/buy-products`,
            body,
        );
    },
    updatePurchase: (body: { product_id: string; buy_count: number }) => {
        return httpRequest.put<SuccessResponseApi<Purchase>>(
            `${URL}/update-purchase`,
            body,
        );
    },
    deletePurchase: (purchaseIds: string[]) => {
        return httpRequest.delete<
            SuccessResponseApi<{ deleted_count: number }>
        >(`${URL}`, {
            data: purchaseIds,
        });
    },
};

export default purchaseService;
