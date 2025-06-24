import type { PickupStation } from "$lib/interfaces";
import { writable } from "svelte/store";

export const pusStore = writable<PickupStation>({
    name: "Jumia PUS Isolo",
    week: "8am - 7pm",
    weekend: "8am - 7pm",
    number: "+2349063056727",
    address: "6B Daddy Adediran street Adagun Odo Off Ire Akari Estate road Isolo.",
    state: "Lagos",
    Payment: "COD",
    landmark: "Keystone Bank",
    map: "https://bit.ly/3obi2l0",
    latitude: "6.524071310327221",
    longitude: "3.3227437885655258",
    initiative: "",
})