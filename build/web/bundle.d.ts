declare let SAGAING: ({
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
declare let MANDALAY: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let MAGWAY: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let YANGON: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let TANINTHARYI: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let SHAN: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let RAKHINE: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let MON: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let CHIN: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let KAYIN: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let KAYAH: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let KACHIN: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let BAGO: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let AYEYAWADY: {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
}[];
declare let Townships: {
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
declare let Region: {
    id: number;
    region_en: string;
    region_mm: string;
}[];
declare let District: {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
}[];
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
declare const getAllRegion: () => {
    id: number;
    region_en: string;
    region_mm: string;
}[];
declare const getRegionByName: ({ english, myanmar }: TGetByName) => {
    id: number;
    region_en: string;
    region_mm: string;
};
declare const getRegionById: (id: number) => {
    id: number;
    region_en: string;
    region_mm: string;
};
declare const getAllDistricts: () => {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
}[];
declare const getAllDistrictsByRegionGroup: () => {
    [key: string]: [IDisrict];
};
declare const getDistrictByName: ({ english, myanmar }: TGetByName) => {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
};
declare const getDistrictById: (id: number) => {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
};
declare const getDistrictByRegionId: (region_id: number) => {
    id: number;
    district_en: string;
    district_mm: string;
    region_id: number;
};
declare const getAllTownships: () => ITownship[];
declare const searchTownships: ({ english, myanmar }: TGetByName) => any[];
declare const getRegionIdToName: (region_id: number) => string;
declare const searchTownshipsByRegionName: (region: ERegions | String, { english, myanmar }: TGetByName) => any[];
declare const searchTownshipsByRegionId: (region_id: number, { english, myanmar }: TGetByName) => any[];
declare const getTownshipsByDistrictId: (district_id: any) => ITownship;
declare const getAllTownshipsByGroup: () => {
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
/**
 * @param { "AYEYAWADY"
 * |"BAGO"
 * |"CHIN"
 * |"KACHIN"
 * |"KAYAH"
 * |"KAYIN"
 * |"MON"
 * |"RAKHINE"
 * |"SHAN"
 * |"TANINTHARYI"
 * |"YANGON"
 * |"MAGWAY"
 * |"MANDALAY"
 * |"SAGAING"} region
 */
declare const getTownshipsByRegion: (region: ERegions) => ({
    id: number;
    township_en: string;
    township_mm: string;
    district_id: number;
} | {
    id: number;
    township_en: string;
    township_mm: string;
    district_id: string;
})[] | {
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
}[];
declare const getTownshipsByRegionId: (region_id: number) => any;
declare let MYANMAR: {
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
    };
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
    getTownshipsByRegion: (region: ERegions) => ({
        id: number;
        township_en: string;
        township_mm: string;
        district_id: number;
    } | {
        id: number;
        township_en: string;
        township_mm: string;
        district_id: string;
    })[] | {
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
    }[];
    getTownshipsByRegionId: (region_id: number) => any;
    getTownshipsByDistrictId: (district_id: any) => ITownship;
    searchTownshipsByRegionId: (region_id: number, { english, myanmar }: TGetByName) => any[];
    searchTownshipsByRegionName: (region: ERegions | String, { english, myanmar }: TGetByName) => any[];
    searchTownships: ({ english, myanmar }: TGetByName) => any[];
};
