import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

from config import username, password

#################################################
# Database Setup
#################################################

connection_string = f'{username}:{password}@localhost:5432/housing_prices_db'
engine = create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Housing_Prices = Base.classes.us_median_housing_prices
Income = Base.classes.us_median_household_incomes
Master_File = Base.classes.master_data_file

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/us_median_housing_prices<br/>"
        f"/api/v1.0/master_data_file<br/>"
    )

@app.route("/api/v1.0/us_median_housing_prices")
def us_median_housing_prices():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    """Return the data in the us_median_housing_prices table"""
    # Perform a query to retrieve the data and precipitation scores
    results = session.query(Housing_Prices.year, Housing_Prices.date, Housing_Prices.regionname, Housing_Prices.statename, Housing_Prices.median_housing_price)
    
    session.close()
    
    # Create a dictionary from the row data and append to a list of precipitation_scores
    median_housing_prices = []
    for year, date, regionname, statename, median_housing_price in results:
        housing_price_dict = {}
        housing_price_dict["Year"] = year
        housing_price_dict["Date"] = date
        housing_price_dict["Region"] = regionname
        housing_price_dict["State"] = statename
        housing_price_dict["US Median Housing Price"] = median_housing_price
        median_housing_prices.append(housing_price_dict)

    return jsonify(median_housing_prices)

@app.route("/api/v1.0/master_data_file")
def master_data_file():
    import json
    import pandas as pd

    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    """Return the data in the master_data_file table"""
    # Perform a query to retrieve the data and precipitation scores
    results = session.query(Master_File.year, Master_File.date, Master_File.regionname, Master_File.statename, Master_File.median_housing_price, Master_File.median_income)
    
    session.close()
    
    # Create a dictionary from the row data and append to a list of precipitation_scores
    master_file = []
    for year, date, regionname, statename, median_housing_price, median_income in results:
        master_file_dict = {}
        master_file_dict["Year"] = year
        master_file_dict["Date"] = date
        master_file_dict["CityName"] = regionname
        master_file_dict["StateAbbr"] = statename
        master_file_dict["MedianHousingPrice"] = median_housing_price
        master_file_dict["MedianIncome"] = median_income
        master_file.append(master_file_dict)

    final_result = {"metadata": master_file}

    with open('Samples.json', 'w') as json_file:
        json.dump(final_result, json_file)

    return jsonify(final_result)

if __name__ == '__main__':
    app.run(debug=True)