import React from 'react';
import Header from '../../Home/Home/Header';
import AppointmentNavigation from '../AppointmentNavigation/AppointmentNavigation';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
            <AppointmentNavigation date={date} setDate={setDate}></AppointmentNavigation>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;