CREATE TABLE US_median_housing_prices (
	Year INT,
	Date DATE,
	RegionName VARCHAR,
	StateName VARCHAR,
	median_housing_price INT
);

CREATE TABLE US_median_household_incomes (
	Year INT,
	state VARCHAR,
	median_income INT
);

CREATE TABLE master_data_file (
	Year INT,
	Date DATE,
	RegionName VARCHAR,
	StateName VARCHAR,
	median_housing_price INT,
	median_income INT
);

