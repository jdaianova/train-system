function creteOrderData(passengersList, payingClient, currentRoutes, seatsSelected) {
    // не знаю, какой пол true или false
    function mapGender(gender) {
        return gender === "Ж" ? true : false;
    }

    // проверка количества пассажиров и билетов
    // function validatePassengerCount(passengers, ticketsDeparture, ticketsArrival) {
    //     const maxTickets = Math.max(ticketsDeparture.length, ticketsArrival.length);
    //     if (passengers.length !== maxTickets) {
    //         throw new Error(`Количество пассажиров (${passengers.length}) не соответствует количеству билетов в одном из направлений (${maxTickets})`);
    //     }
    // }

    // создание объекта места
    function createSeatObject(ticket, passenger) {
        return {
            "coach_id": ticket.coachId,
            "person_info": {
                "is_adult": ticket.isAdult,
                "first_name": passenger.firstName,
                "last_name": passenger.lastName,
                "patronymic": passenger.middleName,
                "gender": mapGender(passenger.gender),
                "birthday": passenger.birthDate,
                "document_type": passenger.documentType,
                "document_data": passenger.documentNumber
            },
            "seat_number": ticket.seat,
            "is_child": false,
            "include_children_seat": false
        };
    }

    // cопоставление пассажиров с местами
    function matchPassengersToSeats(passengers, tickets) {

        return tickets.map((ticket, index) => {
            const passenger = passengers[index];
            // проверка соответствия взрослый/ребенок
            if ((ticket.isAdult && passenger.type !== "adult") || (!ticket.isAdult && passenger.type !== "child")) {
                throw new Error("Несоответствие типов билетов и пассажиров");
            }

            return createSeatObject(ticket, passenger);
        });
    }

    // Обработка мест для отправления и прибытия
    const currentDepartureSeats = currentRoutes.currentRoutes.departure
        ? matchPassengersToSeats(passengersList, seatsSelected.departure.selectedSeats)
        : [];

    const currentArrivalSeats = currentRoutes.currentRoutes.arrival
        ? matchPassengersToSeats(passengersList, seatsSelected.arrival.selectedSeats)
        : [];

    return {
        user: {
            first_name: payingClient.firstName,
            last_name: payingClient.lastName,
            patronymic: payingClient.middleName,
            phone: payingClient.phone,
            email: payingClient.email,
            payment_method: payingClient.payingCash ? "cash" : "online",
        },
        departure: {
            route_direction_id: currentRoutes.currentRoutes.departure._id,
            seats: currentDepartureSeats,
        },
        arrival: {
            route_direction_id: currentRoutes.currentRoutes.arrival ? currentRoutes.currentRoutes.arrival._id : null,
            seats: currentArrivalSeats,
        },
    };
};

export default creteOrderData;