import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

export function floorNumber(number: number, numberOfDecimals: number): number {
  return Math.floor(number * 10 ** numberOfDecimals) / 10 ** numberOfDecimals;
}
