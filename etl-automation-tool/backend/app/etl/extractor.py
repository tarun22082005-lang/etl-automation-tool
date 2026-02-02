import pandas as pd
from io import StringIO

def extract_csv(file):
    content = file.read().decode("utf-8")
    return pd.read_csv(StringIO(content))
