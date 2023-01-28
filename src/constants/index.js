
const TokensList = require("./tokens.json");


export const FACTORY_ADDRESS = '0xFF89048FC50F848cf6B99F3629c16Ed6332785a5'

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
