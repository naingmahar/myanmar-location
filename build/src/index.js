"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const district_1 = __importDefault(require("./data/district"));
const region_1 = __importDefault(require("./data/region"));
const index_1 = __importDefault(require("./data/township/index"));
var ERegions;
(function (ERegions) {
    ERegions["AYEYAWADY"] = "AYEYAWADY";
    ERegions["BAGO"] = "BAGO";
    ERegions["CHIN"] = "CHIN";
    ERegions["KACHIN"] = "KACHIN";
    ERegions["KAYAH"] = "KAYAH";
    ERegions["KAYIN"] = "KAYIN";
    ERegions["MON"] = "MON";
    ERegions["RAKHINE"] = "RAKHINE";
    ERegions["SHAN"] = "SHAN";
    ERegions["TANINTHARYI"] = "TANINTHARYI";
    ERegions["YANGON"] = "YANGON";
    ERegions["MAGWAY"] = "MAGWAY";
    ERegions["MANDALAY"] = "MANDALAY";
    ERegions["SAGAING"] = "SAGAING";
})(ERegions || (ERegions = {}));
const getAllRegion = () => {
    return region_1.default;
};
const getRegionByName = ({ english, myanmar }) => {
    return region_1.default.find((row) => {
        if (row.region_en === english || row.region_mm === myanmar)
            return row;
    });
};
const getRegionById = (id) => {
    return region_1.default.find((row) => row.id === id);
};
const getAllDistricts = () => {
    return district_1.default;
};
const getAllDistrictsByRegionGroup = () => {
    let group = {};
    district_1.default.map((d) => {
        if (group[d.region_id])
            group[d.region_id].push(d);
        else
            group[d.region_id] = [d];
    });
    return group;
};
const getDistrictByName = ({ english, myanmar }) => {
    return district_1.default.find((row) => {
        if (row.district_en === english || row.district_mm === myanmar)
            return row;
    });
};
const getDistrictById = (id) => {
    return district_1.default.find((row) => row.id === id);
};
const getDistrictByRegionId = (region_id) => {
    return district_1.default.find((row) => row.region_id === region_id);
};
const getAllTownships = () => {
    let newArr = [];
    Object.keys(index_1.default).map(key => newArr = newArr.concat(index_1.default[key]));
    return newArr;
};
const searchTownships = ({ english, myanmar }) => {
    let townships = getAllTownships();
    let result = [];
    townships.map((row) => {
        if (english) {
            let ts = String(row.township_en)
                .toLowerCase()
                .search(english);
            if (ts !== -1)
                result.push(row);
        }
        if (myanmar) {
            let ts = row.township_mm.search(myanmar);
            if (ts !== -1)
                result.push(row);
        }
    });
    return result;
};
const getRegionIdToName = (region_id) => {
    const regionKey = getRegionById(region_id)
        .region_en
        .replace(" State", "")
        .replace(" Region", "")
        .toUpperCase();
    return regionKey;
};
const searchTownshipsByRegionName = (region, { english, myanmar }) => {
    let townships = index_1.default[region];
    let result = [];
    townships.map((row) => {
        if (english) {
            let ts = String(row.township_en)
                .toLowerCase()
                .search(english);
            if (ts !== -1)
                result.push(row);
        }
        if (myanmar) {
            let ts = row.township_mm.search(myanmar);
            if (ts !== -1)
                result.push(row);
        }
    });
    return result;
};
const searchTownshipsByRegionId = (region_id, { english, myanmar }) => {
    const name = getRegionIdToName(region_id);
    if (!name)
        return [];
    return searchTownshipsByRegionName(name, { english, myanmar });
};
const getTownshipsByDistrictId = (district_id) => {
    const district = getDistrictById(district_id);
    const regionName = getRegionIdToName(district.region_id);
    const townships = index_1.default[regionName];
    return townships.find((row) => {
        if (row.district_id === district_id)
            return row;
    });
};
const getAllTownshipsByGroup = () => {
    return index_1.default;
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
const getTownshipsByRegion = (region) => {
    return index_1.default[region];
};
const getTownshipsByRegionId = (region_id) => {
    const regionKey = getRegionById(region_id)
        .region_en
        .replace(" State", "")
        .replace(" Region", "")
        .toUpperCase();
    return index_1.default[regionKey];
};
exports.default = {
    getAllRegion,
    getRegionByName,
    getRegionById,
    getAllDistricts,
    getDistrictByName,
    getDistrictById,
    getDistrictByRegionId,
    getAllDistrictsByRegionGroup,
    getAllTownships,
    getAllTownshipsByGroup,
    getTownshipsByRegion,
    getTownshipsByRegionId,
    getTownshipsByDistrictId,
    searchTownshipsByRegionId,
    searchTownshipsByRegionName,
    searchTownships,
};
