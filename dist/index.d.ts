declare enum ERegions {
    "AYEYAWADY" = "AYEYAWADY",
    "BAGO" = "BAGO",
    "CHIN" = "CHIN",
    "KACHIN" = "KACHIN",
    "KAYAH" = "KAYAH",
    "KAYIN" = "KAYIN",
    "MON" = "MON",
    "RAKHINE" = "RAKHINE",
    "SHAN" = "SHAN",
    "TANINTHARYI" = "TANINTHARYI",
    "YANGON" = "YANGON",
    "MAGWAY" = "MAGWAY",
    "MANDALAY" = "MANDALAY",
    "SAGAING" = "SAGAING"
}
interface IDisrict {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
}
interface ITownship {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}
declare type TGetByName = {
    english?: string;
    myanmar?: string;
};
declare const _default: {
    searchRegionByName: ({ english, myanmar }: TGetByName) => any[];
    getAllRegion: () => {
        id: number;
        region_en: string;
        region_mm: string;
    }[];
    getRegionByName: ({ english, myanmar }: TGetByName) => {
        id: number;
        region_en: string;
        region_mm: string;
    };
    getRegionById: (id: number) => {
        id: number;
        region_en: string;
        region_mm: string;
    };
    getAllDistricts: () => {
        id: number;
        district_en: string;
        district_mm: string;
        region_id: number;
    }[];
    getDistrictByName: ({ english, myanmar }: TGetByName) => {
        id: number;
        district_en: string;
        district_mm: string;
        region_id: number;
    };
    getDistrictById: (id: number) => {
        id: number;
        district_en: string;
        district_mm: string;
        region_id: number;
    };
    getDistrictByRegionId: (region_id: number) => {
        id: number;
        district_en: string;
        district_mm: string;
        region_id: number;
    }[];
    getAllDistrictsByRegionGroup: () => {
        [key: string]: [IDisrict];
    };
    getAllTownships: () => ITownship[];
    getAllTownshipsByGroup: () => {
        AYEYAWADY: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        BAGO: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        CHIN: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        KACHIN: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        KAYAH: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        KAYIN: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        MON: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        RAKHINE: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        SHAN: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        TANINTHARYI: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        YANGON: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        MAGWAY: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        MANDALAY: {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        }[];
        SAGAING: ({
            id: number;
            township_en: string;
            township_mm: string;
            district_id: number;
        } | {
            id: number;
            township_en: string;
            township_mm: string;
            district_id: string;
        })[];
    };
    getTownshipsByRegion: (region: ERegions) => {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    }[] | ({
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    } | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: string;
    })[];
    getTownshipsByRegionId: (region_id: number) => any;
    getTownshipsByDistrictId: (district_id: any) => ITownship[];
    searchTownshipsByRegionId: (region_id: number, { english, myanmar }: TGetByName) => any[];
    searchTownshipsByRegionName: (region: String | ERegions, { english, myanmar }: TGetByName) => any[];
    searchTownships: ({ english, myanmar }: TGetByName) => ITownship[];
    searchDistrictByName: ({ english, myanmar }: TGetByName) => any[];
    getRegionAndDistrictByDistrictId: (id: string | number) => Error | {
        district: {
            id: number;
            district_en: string;
            district_mm: string;
            region_id: number;
        };
        region: {
            id: number;
            region_en: string;
            region_mm: string;
        };
    };
    searchTownshipFullInfoByName: ({ english, myanmar }: TGetByName) => any[];
};
export default _default;
