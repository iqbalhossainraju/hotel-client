import React, { useState } from 'react';
import Banner from './Banner';

const DateFormat = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Banner date={date} setDate={setDate} />
        </div>
    );
};

export default DateFormat;