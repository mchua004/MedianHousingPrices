-- Query used to pivot the US Median Housing Prices data
SELECT
  EXTRACT(YEAR FROM CAST(date AS DATE)) Year,
  CAST(date AS DATE) Date,
  RegionName, 
  StateName,
  CASE
    WHEN date = '2017-01-31' THEN _1_31_2017  
    WHEN date = '2017-02-28' THEN _2_28_2017 
    WHEN date = '2017-03-31' THEN _3_31_2017 
    WHEN date = '2017-04-30' THEN _4_30_2017 
    WHEN date = '2017-05-31' THEN _5_31_2017 
    WHEN date = '2017-06-30' THEN _6_30_2017 
    WHEN date = '2017-07-31' THEN _7_31_2017 
    WHEN date = '2017-08-31' THEN _8_31_2017 
    WHEN date = '2017-09-30' THEN _9_30_2017 
    WHEN date = '2017-10-31' THEN _10_31_2017 
    WHEN date = '2017-11-30' THEN _11_30_2017 
    WHEN date = '2017-12-31' THEN _12_31_2017 
    WHEN date = '2018-01-31' THEN _1_31_2018 
    WHEN date = '2018-02-28' THEN _2_28_2018
    WHEN date = '2018-03-31' THEN _3_31_2018 
    WHEN date = '2018-04-30' THEN _4_30_2018 
    WHEN date = '2018-05-31' THEN _5_31_2018 
    WHEN date = '2018-06-30' THEN _6_30_2018 
    WHEN date = '2018-07-31' THEN _7_31_2018 
    WHEN date = '2018-08-31' THEN _8_31_2018 
    WHEN date = '2018-09-30' THEN _9_30_2018 
    WHEN date = '2018-10-31' THEN _10_31_2018 
    WHEN date = '2018-11-30' THEN _11_30_2018 
    WHEN date = '2018-12-31' THEN _12_31_2018
    WHEN date = '2019-01-31' THEN _1_31_2019 
    WHEN date = '2019-02-28' THEN _2_28_2019 
    WHEN date = '2019-03-31' THEN _3_31_2019 
    WHEN date = '2019-04-30' THEN _4_30_2019 
    WHEN date = '2019-05-31' THEN _5_31_2019 
    WHEN date = '2019-06-30' THEN _6_30_2019 
    WHEN date = '2019-07-31' THEN _7_31_2019 
    WHEN date = '2019-08-31' THEN _8_31_2019 
    WHEN date = '2019-09-30' THEN _9_30_2019 
    WHEN date = '2019-10-31' THEN _10_31_2019 
    WHEN date = '2019-11-30' THEN _11_30_2019 
    WHEN date = '2019-12-31' THEN _12_31_2019
  END AS median_housing_price
FROM `analytics-mkt-adops-thd.Median_Housing_Prices.median_housing_prices_2017_2018_2019` 
CROSS JOIN(
  SELECT '2017-01-31' as date 
  UNION ALL
  SELECT '2017-02-28' as date 
  UNION ALL
  SELECT '2017-03-31' as date 
  UNION ALL
  SELECT '2017-04-30' as date 
  UNION ALL
  SELECT '2017-05-31' as date 
  UNION ALL
  SELECT '2017-06-30' as date 
  UNION ALL
  SELECT '2017-07-31' as date 
  UNION ALL
  SELECT '2017-08-31' as date 
  UNION ALL
  SELECT '2017-09-30' as date 
  UNION ALL
  SELECT '2017-10-31' as date 
  UNION ALL
  SELECT '2017-11-30' as date 
  UNION ALL
  SELECT '2017-12-31' as date 
  UNION ALL
  SELECT '2018-01-31' as date 
  UNION ALL
  SELECT '2018-02-28' as date 
  UNION ALL
  SELECT '2018-03-31' as date 
  UNION ALL
  SELECT '2018-04-30' as date 
  UNION ALL
  SELECT '2018-05-31' as date 
  UNION ALL
  SELECT '2018-06-30' as date 
  UNION ALL
  SELECT '2018-07-31' as date 
  UNION ALL
  SELECT '2018-08-31' as date 
  UNION ALL
  SELECT '2018-09-30' as date 
  UNION ALL
  SELECT '2018-10-31' as date 
  UNION ALL
  SELECT '2018-11-30' as date 
  UNION ALL
  SELECT '2018-12-31' as date 
  UNION ALL
  SELECT '2019-01-31' as date 
  UNION ALL
  SELECT '2019-02-28' as date 
  UNION ALL
  SELECT '2019-03-31' as date 
  UNION ALL
  SELECT '2019-04-30' as date 
  UNION ALL
  SELECT '2019-05-31' as date 
  UNION ALL
  SELECT '2019-06-30' as date 
  UNION ALL
  SELECT '2019-07-31' as date 
  UNION ALL
  SELECT '2019-08-31' as date 
  UNION ALL
  SELECT '2019-09-30' as date 
  UNION ALL
  SELECT '2019-10-31' as date 
  UNION ALL
  SELECT '2019-11-30' as date 
  UNION ALL
  SELECT '2019-12-31' as date
) dates
ORDER BY 
  1,2,3,4

-- Query used to pivot the US Median Income data
SELECT
  2017 AS Year,
  state,
  CASE 
    WHEN state = 'AL' THEN Alabama__Median_income__dollars___Estimate
    WHEN state = 'AK' THEN Alaska__Median_income__dollars___Estimate
    WHEN state = 'AZ' THEN Arizona__Median_income__dollars___Estimate
    WHEN state = 'AR' THEN Arkansas__Median_income__dollars___Estimate
    WHEN state = 'CA' THEN California__Median_income__dollars___Estimate
    WHEN state = 'CO' THEN CAST(REPLACE(Colorado__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'CT' THEN CAST(REPLACE(Connecticut__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'DE' THEN CAST(REPLACE(Delaware__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'FL' THEN CAST(REPLACE(Florida__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'GA' THEN Georgia__Median_income__dollars___Estimate
    WHEN state = 'HI' THEN Hawaii__Median_income__dollars___Estimate
    WHEN state = 'ID' THEN CAST(REPLACE(Idaho__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'IL' THEN Illinois__Median_income__dollars___Estimate
    WHEN state = 'IN' THEN Indiana__Median_income__dollars___Estimate
    WHEN state = 'IA' THEN Iowa__Median_income__dollars___Estimate
    WHEN state = 'KS' THEN Kansas__Median_income__dollars___Estimate
    WHEN state = 'KY' THEN Kentucky__Median_income__dollars___Estimate
    WHEN state = 'LA' THEN Louisiana__Median_income__dollars___Estimate
    WHEN state = 'ME' THEN CAST(REPLACE(Maine__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'MD' THEN CAST(REPLACE(Maryland__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'MA' THEN CAST(REPLACE(Massachusetts__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'MI' THEN Michigan__Median_income__dollars___Estimate
    WHEN state = 'MN' THEN Minnesota__Median_income__dollars___Estimate
    WHEN state = 'MS' THEN CAST(REPLACE(Mississippi__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'MO' THEN Missouri__Median_income__dollars___Estimate
    WHEN state = 'MT' THEN Montana__Median_income__dollars___Estimate
    WHEN state = 'NE' THEN Nebraska__Median_income__dollars___Estimate
    WHEN state = 'NV' THEN Nevada__Median_income__dollars___Estimate
    WHEN state = 'NH' THEN CAST(REPLACE(New_Hampshire__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'NJ' THEN CAST(REPLACE(New_Jersey__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'NM' THEN CAST(REPLACE(New_Mexico__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'NY' THEN New_York__Median_income__dollars___Estimate
    WHEN state = 'NC' THEN North_Carolina__Median_income__dollars___Estimate
    WHEN state = 'ND' THEN CAST(REPLACE(North_Dakota__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'OH' THEN Ohio__Median_income__dollars___Estimate
    WHEN state = 'OK' THEN CAST(REPLACE(Oklahoma__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'OR' THEN Oregon__Median_income__dollars___Estimate
    WHEN state = 'PA' THEN CAST(REPLACE(Pennsylvania__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'RI' THEN Rhode_Island__Median_income__dollars___Estimate
    WHEN state = 'SC' THEN South_Carolina__Median_income__dollars___Estimate
    WHEN state = 'SD' THEN South_Dakota__Median_income__dollars___Estimate
    WHEN state = 'TN' THEN CAST(REPLACE(Tennessee__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'TX' THEN Texas__Median_income__dollars___Estimate
    WHEN state = 'UT' THEN Utah__Median_income__dollars___Estimate
    WHEN state = 'VT' THEN CAST(REPLACE(Vermont__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'VA' THEN Virginia__Median_income__dollars___Estimate
    WHEN state = 'WA' THEN Washington__Median_income__dollars___Estimate
    WHEN state = 'WV' THEN CAST(REPLACE(West_Virginia__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'WI' THEN Wisconsin__Median_income__dollars___Estimate
    WHEN state = 'WY' THEN CAST(REPLACE(Wyoming__Median_income__dollars___Estimate, ',', '') AS INT64)
    WHEN state = 'PR' THEN CAST(REPLACE(Puerto_Rico__Median_income__dollars___Estimate, ',', '') AS INT64)
  END AS median_income
FROM `analytics-mkt-adops-thd.Median_Housing_Prices.2017_median_income_household_estimates` estimates
CROSS JOIN(
  SELECT "AL" as state
  UNION ALL
  SELECT "AK" as state
  UNION ALL
  SELECT "AZ" as state
  UNION ALL
  SELECT "AR" as state
  UNION ALL
  SELECT "CA" as state
  UNION ALL
  SELECT "CO" as state
  UNION ALL
  SELECT "CT" as state
  UNION ALL
  SELECT "DE" as state
  UNION ALL
  SELECT "FL" as state
  UNION ALL
  SELECT "GA" as state
  UNION ALL
  SELECT "HI" as state
  UNION ALL
  SELECT "ID" as state
  UNION ALL
  SELECT "IL" as state
  UNION ALL
  SELECT "IN" as state
  UNION ALL
  SELECT "IA" as state
  UNION ALL
  SELECT "KS" as state
  UNION ALL
  SELECT "KY" as state
  UNION ALL
  SELECT "LA" as state
  UNION ALL
  SELECT "ME" as state
  UNION ALL
  SELECT "MD" as state
  UNION ALL
  SELECT "MA" as state
  UNION ALL
  SELECT "MI" as state
  UNION ALL
  SELECT "MN" as state
  UNION ALL
  SELECT "MS" as state
  UNION ALL
  SELECT "MO" as state
  UNION ALL
  SELECT "MT" as state
  UNION ALL
  SELECT "NE" as state
  UNION ALL
  SELECT "NV" as state
  UNION ALL
  SELECT "NH" as state
  UNION ALL
  SELECT "NJ" as state
  UNION ALL
  SELECT "NM" as state
  UNION ALL
  SELECT "NY" as state
  UNION ALL
  SELECT "NC" as state
  UNION ALL
  SELECT "ND" as state
  UNION ALL
  SELECT "OH" as state
  UNION ALL
  SELECT "OK" as state
  UNION ALL
  SELECT "OR" as state
  UNION ALL
  SELECT "PA" as state
  UNION ALL
  SELECT "RI" as state
  UNION ALL
  SELECT "SC" as state
  UNION ALL
  SELECT "SD" as state
  UNION ALL
  SELECT "TN" as state
  UNION ALL
  SELECT "TX" as state
  UNION ALL
  SELECT "UT" as state
  UNION ALL
  SELECT "VT" as state
  UNION ALL
  SELECT "VA" as state
  UNION ALL
  SELECT "WA" as state
  UNION ALL
  SELECT "WV" as state
  UNION ALL
  SELECT "WI" as state
  UNION ALL
  SELECT "WY" as state
  UNION ALL
  SELECT "PR" as state
) states
ORDER BY 2

-- Join pivoted income data and pivoted housing price data to result in master data file 
SELECT 
  p.Year, 
  Date, 
  RegionName, 
  StateName, 
  median_housing_price,
  median_income
FROM 
  `analytics-mkt-adops-thd.Median_Housing_Prices.US_median_housing_prices` p
LEFT JOIN 
  `analytics-mkt-adops-thd.Median_Housing_Prices.US_median_household_incomes` i
ON
  p.Year = i.Year AND
  p.StateName = i.state