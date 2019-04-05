import { format } from 'date-fns';

// reformat

/* cheap
{
"id": 8697874778657128000,
"departure": "Magdalena",
"arrival": "Maggiolo",
"departureTime": 1554295992397,
"arrivalTime": 1554302765175
}
*/

/* business
{
"uuid": "38ccd470-0c90-41f4-a7aa-cdd26bd0feca",
"flight": "Blida -> Paso del Rey",
"departure": "2019-04-03T13:21:08.169Z",
"arrival": "2019-04-03T15:54:01.782Z"
}
*/

/* final format
{
"id": "38ccd470-0c90-41f4-a7aa-cdd26bd0feca",
"departure": "Blida",
"arrival": "Paso del Rey"
"departureTime": "2019-04-03T13:21:08.169Z",
"arrivalTime": "2019-04-03T15:54:01.782Z"
}
*/

export const formatedDate = dateTime =>
  format(new Date(dateTime), 'YYYY-MM-DD HH:mm:SS');

export const reformatCheap = cheap => {
  const { departureTime, arrivalTime } = cheap;

  return {
    ...cheap,
    // departureTime: new Date(departureTime).toJSON(),
    departureTime: formatedDate(departureTime),
    // arrivalTime: new Date(arrivalTime).toJSON(),
    arrivalTime: formatedDate(arrivalTime),
    tag: 'cheap'
  };
};

export const reformatBusiness = ({
  uuid,
  flight,
  departure: departureTime,
  arrival: arrivalTime
}) => {
  const [departure, arrival] = flight.split('->');

  return {
    id: uuid,
    departure,
    arrival,
    departureTime: formatedDate(departureTime),
    arrivalTime: formatedDate(arrivalTime),
    tag: 'business'
  };
};
