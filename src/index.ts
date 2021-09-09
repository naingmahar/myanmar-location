import District from './data/district'
import Region from './data/region'
import Townships from './data/township/index'

enum ERegions {
    "AYEYAWADY"="AYEYAWADY",
    "BAGO"="BAGO",
    "CHIN"="CHIN",
    "KACHIN"="KACHIN",
    "KAYAH"="KAYAH",
    "KAYIN"="KAYIN",
    "MON"="MON",
    "RAKHINE"="RAKHINE",
    "SHAN"="SHAN",
    "TANINTHARYI"="TANINTHARYI",
    "YANGON"="YANGON",
    "MAGWAY"="MAGWAY",
    "MANDALAY"="MANDALAY",
    "SAGAING"="SAGAING"
}

interface IDisrict {
      id : number
      district_en: string
      district_mm: string
      region_id: number
}
    
interface ITownship {
    id : number
    township_en: string
    township_mm: string
    district_id: number 
}

interface IRegion {
    id : number
    region_en: string
    region_mm: string
}

type TGetByName = { english?: string, myanmar?: string }

const getAllRegion = () => {
    return Region
}

const getRegionByName = ({ english,myanmar}:TGetByName) => {
    return Region.find((row) => {
        if (row.region_en === english || row.region_mm === myanmar)
            return row
    })
}

const searchRegionByName = ({ english, myanmar }: TGetByName) => {
    let result = []
    Region.map((row) => {
        if (english) {
            let ts = String(row.region_en)
                        .toLowerCase()
                        .search(english.toLowerCase())
            if(ts !== -1) result.push(row)
        }
        if (myanmar) {
            let ts = row.region_mm.search(myanmar)
            if(ts !== -1) result.push(row)
        }
    })
    return result
}

const getRegionById = (id: number) => {
    return Region.find((row) => row.id === id)
}


const getAllDistricts = () => {
    return District
}

const getAllDistrictsByRegionGroup = () => {
    let group: { [key: string]: [IDisrict]; } = {}
    District.map((d) => {
        if (group[d.region_id]) group[d.region_id].push(d)
        else group[d.region_id]= [d]
    })
    return group
}

const getDistrictByName = ({ english,myanmar}:TGetByName) => {
    return District.find((row) => {
        if (row.district_en === english || row.district_mm === myanmar)
        return row
    })
}

const searchDistrictByName = ({ english, myanmar }: TGetByName) => {
    let result = []
    District.map((row) => {
        if (english) {
            let ts = String(row.district_en)
                        .toLowerCase()
                        .search(english.toLowerCase())
            if(ts !== -1) result.push(row)
        }
        if (myanmar) {
            let ts = row.district_mm.search(myanmar)
            if(ts !== -1) result.push(row)
        }
    })
    return result
}

const getDistrictById = (id:number) => {
    return District.find((row) => row.id === id)
}

const getDistrictByRegionId = (region_id:number) => {
    return District.filter((row) => row.region_id === region_id)
}

const getAllTownships = ():ITownship[] => {
    let newArr = [];
    Object.keys(Townships).map(key => newArr = newArr.concat(Townships[key]))
    return newArr
}

const searchTownships = ({ english,myanmar}:TGetByName):ITownship[] => {
    let townships = getAllTownships()
    let result = []
    townships.map((row) => {
        if (english) {
            let ts = String(row.township_en)
                        .toLowerCase()
                        .search(english.toLowerCase())
            if(ts !== -1) result.push(row)
        }
        if (myanmar) {
            let ts = row.township_mm.search(myanmar)
            if(ts !== -1) result.push(row)
        }
    })
    return result
}

const getRegionIdToName = (region_id: number) => {
    const regionKey = getRegionById(region_id)
        .region_en
            .replace(" State", "")
            .replace(" Region", "")
            .toUpperCase()
    return regionKey
}


const searchTownshipsByRegionName = (region:ERegions|String,{english,myanmar}:TGetByName) => {
    let townships = Townships[region as ERegions]
    let result = []
    townships.map((row) => {
        if (english) {
            let ts = String(row.township_en)
                        .toLowerCase()
                        .search(english.toLowerCase())
            if(ts !== -1) result.push(row)
        }
        if (myanmar) {
            let ts = row.township_mm.search(myanmar)
            if(ts !== -1) result.push(row)
        }
    })
    return result
}

const searchTownshipsByRegionId = (region_id:number,{english,myanmar}:TGetByName) => {
    const name = getRegionIdToName(region_id)
    if (!name) return []
    return searchTownshipsByRegionName(name,{english,myanmar})
}

const getTownshipsByDistrictId = (district_id) => {
    const district = getDistrictById(district_id)
    const regionName = getRegionIdToName(district.region_id)
    const townships: ITownship[] = Townships[regionName]
    return townships.filter((row) => {
        if (row.district_id === district_id )
            return row
    })
}

const getAllTownshipsByGroup = () => {
    return Townships;
}

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
const getTownshipsByRegion = (region:ERegions) => {
    return Townships[region]
}

const getTownshipsByRegionId = (region_id: number) => {
    const regionKey = getRegionById(region_id)
        .region_en
            .replace(" State", "")
            .replace(" Region", "")
            .toUpperCase()
    return Townships[regionKey]
}

const searchTownshipFullInfoByName = ({ english, myanmar }: TGetByName) => {
    let res= []
    const searchRes = searchTownships({ english, myanmar })
    searchRes.map((row) => {
        let temp: { township: ITownship, district?: IDisrict, region?: IRegion } = {township:row};
        let district = getDistrictById(row.district_id)
        let region = getRegionById(district.region_id)
        temp["district"] = district
        temp["region"] = region

        res.push(temp)
    })

    return res
}

const getRegionAndDistrictByDistrictId = (id:number|string) => {
    try {
        let _id = parseInt(String(id))
        let district = getDistrictById(_id)
        let region = getRegionById(district.region_id)
        return { district, region }
    } catch (error) {
        return new Error(error.message||"Unexpected Error")
    }
}



export default {
    searchRegionByName,
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
    searchDistrictByName,
    getRegionAndDistrictByDistrictId,
    searchTownshipFullInfoByName
}


