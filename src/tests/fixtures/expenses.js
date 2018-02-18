import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 11,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 100,
    createdAt:  moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'Credt',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}];
