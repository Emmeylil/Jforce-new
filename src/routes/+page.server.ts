import { APPSCRIPT_URL } from '$env/static/private';
import type { PickupStation } from '$lib/interfaces';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {

    const fetchPUS = async (url: string) => {
        const response = await fetch(url)
        const remoteData = await response.json() as { pus: PickupStation[], priceList: any[], zones: any[] }
        return remoteData
    }
    return {
        remoteData: fetchPUS(APPSCRIPT_URL)
    };
}) satisfies PageServerLoad;
