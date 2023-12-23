export const initialPassenger = {
    first_name: "",
    last_name: "",
    patronymic: "",
    phone: "",
    email: "",
    payment_method: "",
    departure: {
        route_direction_id: "",
        seat: {
            coach_id: "",
            seat_number: 0,
            is_child: false,
            include_children_seat: false,
            person_info: {
                is_adult: true,
                first_name: "",
                last_name: "",
                patronymic: "",
                gender: true,
                birthday: "",
                document_type: "",
                document_data: ""
            }
        }
    },
    arrival: {
        route_direction_id: "",
        seat: {
            coach_id: "",
            seat_number: 0,
            is_child: false,
            include_children_seat: false,
            person_info: {
                is_adult: true,
                first_name: "",
                last_name: "",
                patronymic: "",
                gender: true,
                birthday: "",
                document_type: "",
                document_data: ""
            }
        }
    },
}