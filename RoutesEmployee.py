from flask import Blueprint, request, jsonify   
from ControllersEmployee import (
    get_all_employees,
    get_employee_by_id,
    add_employee,
    update_employee,
    delete_employee
)


employee_routes = Blueprint('employee_routes', __name__)

@employee_routes.route('/create_employees', methods=['POST'])
def add_employee_route():
    data = request.json
    return jsonify(add_employee(data))

@employee_routes.route('/get_all_employees', methods=['GET'])
def get_all_employees_route():
    return jsonify(get_all_employees())

@employee_routes.route('/get_employees/<employee_id>', methods=['GET'])
def get_employee_by_id_route(employee_id):
    return jsonify(get_employee_by_id(employee_id))

@employee_routes.route('/update_employees/<employee_id>', methods=['PUT'])
def update_employee_route(employee_id):
    data = request.json
    return jsonify(update_employee(employee_id, data))

@employee_routes.route('/delete_employees/<employee_id>', methods=['DELETE'])
def delete_employee_route(employee_id):
    return jsonify(delete_employee(employee_id))


                       