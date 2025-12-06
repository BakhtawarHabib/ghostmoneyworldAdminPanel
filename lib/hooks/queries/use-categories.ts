"use client";

import { categoriesApi } from "@/lib/api/categories";
import { queryKeys } from "@/utils/query-keys";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
    return useQuery({
        queryKey: queryKeys.categories.all,
        queryFn: async () => {
            const res = await categoriesApi.getAll();
            console.log("API returned:", res.data.length);
            return res;
        },
        staleTime: 5 * 60 * 1000,
    });
}

export function useCategoryById(id: string) {
    return useQuery({
        queryKey: queryKeys.categories.detail(id),
        queryFn: () => categoriesApi.getById(id),
        staleTime: 5 * 60 * 1000,
    });
}

