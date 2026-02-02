import pandas as pd

def clean_data(df):
    report = {}

    report["rows_before"] = len(df)

    df = df.drop_duplicates()
    report["duplicates_removed"] = report["rows_before"] - len(df)

    missing = df.isnull().sum().to_dict()
    report["missing_values"] = missing

    numeric_cols = df.select_dtypes(include="number").columns
    df[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].median())

    df = df.fillna("Unknown")

    report["rows_after"] = len(df)

    return df, report

