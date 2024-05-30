import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

interface floorToDecimalPlacesArgs {
  number: number;
  numberOfDecimals: number;
}

export function floorToDecimalPlaces({
  number,
  numberOfDecimals,
}: floorToDecimalPlacesArgs): number {
  return Math.floor(number * 10 ** numberOfDecimals) / 10 ** numberOfDecimals;
}
