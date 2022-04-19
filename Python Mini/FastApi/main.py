# Importing Library
from fastapi import FastAPI, Path

# Creating object of FastAPI class
app = FastAPI()

# Defined Data/Given Data
item_id = 2
per_page = 6         # Total number of record per page
total = 12           # Total number of records
total_pages = 2      # Total number of pages
data = [             # Data of page 2
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ]

support = {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }


# Main API [Returning the predefined data]
@app.get("/user/")
def fastApi():                                      # Passing function as argument
    # Returning pre defined data
    return {"page": item_id,
            "per_page": per_page,
            "total": total,
            "total_pages": total_pages,
            "data": data,
            "support": support}


# Additional Feature if someone need particular data
@app.get("/user/{num}")
def particualData(num: int = Path(None,               # Accepting int value from user with range limits
                                 description="Enter the value of user you want to see",
                                 gt=6,
                                 le=12
                                 )
                  ):
    return data[num-7]                                 # Manipulating index value of list



