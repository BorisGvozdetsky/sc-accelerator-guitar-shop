import { Guitar } from './types/guitar';

const filterGuitarByName = (guitars: Guitar[], inputValue: string) => guitars.filter((guitar) => guitar.name.toLowerCase().includes(inputValue.toLowerCase()));

export {filterGuitarByName};
