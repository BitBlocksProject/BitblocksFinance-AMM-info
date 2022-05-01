
const TokensList = require("./tokens.json");


export const FACTORY_ADDRESS = '0x65b3cc7a7cb167221266fc93884717de2dbd074e'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  TokensList,
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
]

// pair blacklist
export const PAIR_BLACKLIST = []
