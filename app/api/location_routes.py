from flask import Blueprint
from app.models import Location

location_routes = Blueprint('locations', __name__)

@location_routes.route('/')
def locations():
    locations = Location.query.all()
    return locations.to_dict()


@location_routes.route('/<int:id>')
def getLocation(id):
    print("THIS IS THE LOCATION ID: ", id)
    location = Location.query.get(id)
    return location.to_dict()
