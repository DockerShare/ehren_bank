export const errors = {
    permission:     '{"code": 18, "message": "You do not have permission to do this."}',
    amount:         '{"code": 17, "message": "Amount must above 0"}',
    auth:           '{"code": 16, "message": "Invalid Username or Password"}',
    adminKey:       '{"code": 15, "message": "New Admin Key created"}',
    todo:           '{"code": 14, "message": "This method is still being worked on"}',
    notActive:      '{"code": 13, "message": "App is not active for this user"}',
    lowBalance:     '{"code": 12, "message": "Insufficient User Balance"}',
    appExists:      '{"code": 11, "message": "App already exists"}',
    dbError:        '{"code": 10, "message": "Database Error"}',
    userCreate:     '{"code": 9, "message": "Could not create User"}',
    uuid:           '{"code": 8, "message": "Malformed Uuid"}',
    displayname:    '{"code": 7, "message": "Malformed Displayname"}',
    sessionExpired: '{"code": 6, "message": "Session expired"}',
    batch:          '{"code": 5, "message": "Batch calls are not supported yet"}',
    version:        '{"code": 4, "message": "Invalid Version"}',
    parameters:     '{"code": 3, "message": "Missing Parameters"}',
    request:        '{"code": 2, "message": "Invalid Request (and Notifications are not accepted)"}',
    method:         '{"code": 1, "message": "Invalid Method"}'
}